// Liam’s estimated running time uses 9 mph for this week and future plans.
export const estimatedAverageMph = 9;

export const weeklyMileage = [
  { weekEnding: "2026-06-07", miles: 50, hours: 5.93 },
  { weekEnding: "2026-06-14", miles: 65, hours: 7.57 },
  { weekEnding: "2026-06-21", miles: 75, hours: 8.62 },
  { weekEnding: "2026-06-28", miles: 90, hours: 10.61 },
  { weekEnding: "2026-07-05", miles: 100, hours: 12.13 },
  { weekEnding: "2026-07-12", miles: 107, hours: 12.66 },
  { weekEnding: "2026-07-19", miles: 95, hours: 10.64 },
  { weekEnding: "2026-07-26", miles: 111, hours: 13.18 },
  { weekEnding: "2026-08-02", miles: 115, hours: 12.91 },
  { weekEnding: "2026-08-09", miles: 116, hours: 13.79 },
  { weekEnding: "2026-08-16", miles: 117, hours: 13.82 },
  { weekEnding: "2026-08-23", miles: 76, hours: 8.64 },
  { weekEnding: "2026-08-30", miles: 120, hours: 13.97 },
  { weekEnding: "2026-09-06", miles: 122, hours: 14.28 },
  { weekEnding: "2026-09-13", miles: 115, hours: 13.37 },
  { weekEnding: "2026-09-20", miles: 85 },
  { weekEnding: "2026-09-27", miles: 88, hours: 88 / estimatedAverageMph, hoursEstimated: true },
  { weekEnding: "2026-10-04", miles: 83, hours: 83 / estimatedAverageMph, hoursEstimated: true },
  { weekEnding: "2026-10-11", miles: 75 },
  { weekEnding: "2026-10-18", miles: 115 },
  { weekEnding: "2026-10-25", miles: 123 },
];

export const plannedMileage = [
  { weekEnding: "2026-11-01", miles: 125 },
  { weekEnding: "2026-11-08", miles: 125 },
  { weekEnding: "2026-11-15", miles: 125 },
  { weekEnding: "2026-11-22", miles: 110 },
  { weekEnding: "2026-11-29", miles: 85 },
  { weekEnding: "2026-12-06", miles: 70 },
].map((week) => ({ ...week, hours: week.miles / estimatedAverageMph, hoursEstimated: true }));

export const latestWeek = {
  label: "Week of October 19",
  weekEnding: "2026-10-25",
  totalMiles: 123,
  dailyMiles: [
    ["Mon", 18],
    ["Tue", 24],
    ["Wed", 18],
    ["Thu", 17],
    ["Fri", 16],
    ["Sat", 20],
    ["Sun", 10],
  ],
};

export const trainingDataSource = {
  name: "Strava export & weekly recaps",
  hoursEstimateNote: "",
  through: "2026-10-25",
};
