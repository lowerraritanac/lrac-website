export const weeklyMileage = [
  { weekEnding: "2026-06-07", miles: 50.6, hours: 5.93 },
  { weekEnding: "2026-06-14", miles: 65.3, hours: 7.57 },
  { weekEnding: "2026-06-21", miles: 75.0, hours: 8.62 },
  { weekEnding: "2026-06-28", miles: 90.8, hours: 10.61 },
  { weekEnding: "2026-07-05", miles: 100.1, hours: 12.13 },
  { weekEnding: "2026-07-12", miles: 107.5, hours: 12.66 },
  { weekEnding: "2026-07-19", miles: 95.4, hours: 10.64 },
  { weekEnding: "2026-07-26", miles: 111.2, hours: 13.18 },
  { weekEnding: "2026-08-02", miles: 115.4, hours: 12.91 },
  { weekEnding: "2026-08-09", miles: 116.8, hours: 13.79 },
  { weekEnding: "2026-08-16", miles: 117.2, hours: 13.82 },
  { weekEnding: "2026-08-23", miles: 77.2, hours: 8.64 },
  { weekEnding: "2026-08-30", miles: 120.4, hours: 13.97 },
  { weekEnding: "2026-09-06", miles: 123.1, hours: 14.28 },
  { weekEnding: "2026-09-13", miles: 115.0, hours: 13.37 },
  { weekEnding: "2026-09-20", miles: 85.0 },
];

export const plannedMileage = [
  { weekEnding: "2026-09-27", miles: 75 },
  { weekEnding: "2026-10-04", miles: 83 },
  { weekEnding: "2026-10-11", miles: 55 },
  { weekEnding: "2026-10-18", miles: 97 },
  { weekEnding: "2026-10-25", miles: 115 },
  { weekEnding: "2026-11-01", miles: 123 },
  { weekEnding: "2026-11-08", miles: 125 },
  { weekEnding: "2026-11-15", miles: 125 },
  { weekEnding: "2026-11-22", miles: 110 },
  { weekEnding: "2026-11-29", miles: 85 },
  { weekEnding: "2026-12-06", miles: 70 },
];

export const latestWeek = {
  label: "Week of September 14",
  weekEnding: "2026-09-20",
  totalMiles: 85.0,
  totalHours: null,
  dailyMiles: [
    ["Mon", 16],
    ["Tue", 16],
    ["Wed", 10],
    ["Thu", 14],
    ["Fri", 8],
    ["Sat", 5],
    ["Sun", 16],
  ],
};

export const trainingDataSource = {
  name: "Strava export",
  through: "2026-09-20",
};
