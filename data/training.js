export const weeklyMileage = [
  { weekEnding: "2026-06-07", miles: 50.6 },
  { weekEnding: "2026-06-14", miles: 65.3 },
  { weekEnding: "2026-06-21", miles: 75.0 },
  { weekEnding: "2026-06-28", miles: 90.8 },
  { weekEnding: "2026-07-05", miles: 100.1 },
  { weekEnding: "2026-07-12", miles: 107.5 },
  { weekEnding: "2026-07-19", miles: 95.4 },
  { weekEnding: "2026-07-26", miles: 111.2 },
  { weekEnding: "2026-08-02", miles: 115.4 },
  { weekEnding: "2026-08-09", miles: 116.8 },
  { weekEnding: "2026-08-16", miles: 117.2 },
  { weekEnding: "2026-08-23", miles: 77.2 },
  { weekEnding: "2026-08-30", miles: 120.4 },
  { weekEnding: "2026-09-06", miles: 108.1 },
];

export const latestWeek = {
  label: "Week of August 31",
  weekEnding: "2026-09-06",
  totalMiles: 108.1,
  dailyMiles: [
    ["Mon", 23.6],
    ["Tue", 17.4],
    ["Wed", 17.2],
    ["Thu", 17.1],
    ["Fri", 17.1],
    ["Sat", 9.2],
    ["Sun", 6.3],
  ],
};

export const trainingDataSource = {
  name: "Strava export",
  through: "2026-09-06",
};
