const METERS_PER_MILE = 1609.344;

function mondayKey(dateString) {
  const [year, month, day] = dateString.slice(0, 10).split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const dayOfWeek = date.getUTCDay();
  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  date.setUTCDate(date.getUTCDate() + diff);
  return date.toISOString().slice(0, 10);
}

function formatWeekLabel(key) {
  return new Date(`${key}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export async function getStravaMileage({ weeks = 16 } = {}) {
  const clientId = import.meta.env.STRAVA_CLIENT_ID;
  const clientSecret = import.meta.env.STRAVA_CLIENT_SECRET;
  const refreshToken = import.meta.env.STRAVA_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) return null;

  try {
    const tokenResponse = await fetch("https://www.strava.com/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });

    if (!tokenResponse.ok) {
      console.warn("Strava token refresh failed", tokenResponse.status);
      return null;
    }

    const token = await tokenResponse.json();
    const after = Math.floor((Date.now() - weeks * 8 * 24 * 60 * 60 * 1000) / 1000);
    const activities = [];

    for (let page = 1; page <= 4; page += 1) {
      const response = await fetch(
        `https://www.strava.com/api/v3/athlete/activities?after=${after}&page=${page}&per_page=100`,
        { headers: { Authorization: `Bearer ${token.access_token}` } },
      );

      if (!response.ok) {
        console.warn("Strava activity fetch failed", response.status);
        return null;
      }

      const batch = await response.json();
      activities.push(...batch);
      if (batch.length < 100) break;
    }

    const runs = activities.filter((activity) =>
      ["Run", "TrailRun", "VirtualRun"].includes(activity.sport_type || activity.type),
    );

    const byWeek = new Map();
    for (const activity of runs) {
      const key = mondayKey(activity.start_date_local || activity.start_date);
      const previous = byWeek.get(key) || { distance: 0, runs: 0 };
      previous.distance += Number(activity.distance || 0);
      previous.runs += 1;
      byWeek.set(key, previous);
    }

    const currentMonday = mondayKey(new Date().toISOString());
    const weekKeys = [];
    const cursor = new Date(`${currentMonday}T00:00:00Z`);
    for (let i = weeks - 1; i >= 0; i -= 1) {
      const d = new Date(cursor);
      d.setUTCDate(d.getUTCDate() - i * 7);
      weekKeys.push(d.toISOString().slice(0, 10));
    }

    const weekly = weekKeys.map((key) => {
      const week = byWeek.get(key) || { distance: 0, runs: 0 };
      return {
        key,
        label: formatWeekLabel(key),
        miles: Number((week.distance / METERS_PER_MILE).toFixed(1)),
        runs: week.runs,
      };
    });

    const completedWeeks = weekly.slice(0, -1);
    const recentFour = completedWeeks.slice(-4);
    const rolling4 = recentFour.length
      ? Number((recentFour.reduce((sum, week) => sum + week.miles, 0) / recentFour.length).toFixed(1))
      : 0;
    const last12 = completedWeeks.slice(-12);
    const twelveWeekMiles = Number(last12.reduce((sum, week) => sum + week.miles, 0).toFixed(1));
    const highWeek = completedWeeks.reduce((best, week) => (week.miles > best.miles ? week : best), { miles: 0, label: "—" });
    const maxMiles = Math.max(...weekly.map((week) => week.miles), 1);

    return {
      athleteId: token.athlete?.id,
      athleteName: token.athlete ? `${token.athlete.firstname} ${token.athlete.lastname}` : "Liam Tilton",
      weekly,
      rolling4,
      twelveWeekMiles,
      highWeek,
      maxMiles,
      updatedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.warn("Strava integration unavailable", error);
    return null;
  }
}
