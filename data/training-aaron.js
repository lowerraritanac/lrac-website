export const weeklyMileage = [
  { weekEnding: "2026-06-07", miles: 37.4, hours: 4.78 },
  { weekEnding: "2026-06-14", miles: 54.3, hours: 6.72 },
  { weekEnding: "2026-06-21", miles: 61.8, hours: 7.58 },
  { weekEnding: "2026-06-28", miles: 68.1, hours: 8.30 },
  { weekEnding: "2026-07-05", miles: 74.2, hours: 9.33 },
  { weekEnding: "2026-07-12", miles: 80.5, hours: 10.30 },
  { weekEnding: "2026-07-19", miles: 80.6, hours: 9.80 },
  { weekEnding: "2026-07-26", miles: 81.0, hours: 9.86 },
  { weekEnding: "2026-08-02", miles: 82.2, hours: 9.79 },
  { weekEnding: "2026-08-09", miles: 83.2, hours: 9.67 },
  { weekEnding: "2026-08-16", miles: 86.5, hours: 10.34 },
  { weekEnding: "2026-08-23", miles: 86.6, hours: 9.88 },
  { weekEnding: "2026-08-30", miles: 86.1, hours: 10.24 },
  { weekEnding: "2026-09-06", miles: 86.6, hours: 10.41 },
];

export const latestWeek = {
  label: "Week of August 31",
  weekEnding: "2026-09-06",
  totalMiles: 86.6,
  totalHours: 10.41,
  dailyMiles: [
    ["Mon", 10.0],
    ["Tue", 17.4],
    ["Wed", 15.1],
    ["Thu", 0.0],
    ["Fri", 17.1],
    ["Sat", 10.0],
    ["Sun", 17.1],
  ],
};

export const trainingDataSource = {
  name: "Strava export",
  through: "2026-09-06",
};
