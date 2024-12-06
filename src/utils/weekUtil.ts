import moment from 'moment';

export interface Week {
  number: number;
  startDate: string;
  endDate: string;
}

// Function to generate future weeks
export const generateFutureWeeks = (weeksCount: number): Week[] => {
  const currentWeek = moment().week();
  const weeks: Week[] = [];
  for (let i = 0; i < weeksCount; i++) {
    const weekStart = moment().startOf('week').add(i, 'weeks');
    const weekEnd = weekStart.clone().add(6, 'days');
    weeks.push({
      number: currentWeek + i,
      startDate: weekStart.format('DD MMM'),
      endDate: weekEnd.format('DD MMM YYYY'),
    });
  }
  return weeks;
};