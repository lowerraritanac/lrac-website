const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
export function raceDate(race) {
  const [month, day] = race.date.split(' ');
  return Date.UTC(Number(race.year), months.indexOf(month), Number(day));
}
