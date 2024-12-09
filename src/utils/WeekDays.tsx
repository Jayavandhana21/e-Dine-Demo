import React from 'react';
import moment from 'moment';

interface WeekDaysProps {
  selectedWeek: {
    number: number;
    startDate: string;
    endDate: string;
  } | null;
  selectedDay: moment.Moment | null;
  onDayClick: (day: moment.Moment) => void;
}

const WeekDays: React.FC<WeekDaysProps> = ({ selectedWeek, selectedDay, onDayClick }) => {
  const getWeekDays = () => {
    if (!selectedWeek) return [];
    const startOfWeek = moment(selectedWeek.startDate, 'DD MMM');
    return Array.from({ length: 7 }).map((_, index) =>
      startOfWeek.clone().add(index, 'days')
    );
  };

  return (
    <div className="flex space-x-4 justify-between text-gray-600 text-center mt-4 md:mt-4 md:mx-2 px-2">
      {getWeekDays().map((day, index) => (
        <div
          key={index}
          onClick={() => onDayClick(day)}
          className={`w-16 h-16 rounded flex flex-col items-center justify-center cursor-pointer bg-slate-100 
            ${selectedDay && selectedDay.isSame(day, 'day') ? '!bg-blue-500 text-white' : 'text-gray-700'}`}>
          <span className="text-lg font-semibold">{day.format('dd')[0]}</span>
          <span className="block text-sm font-medium">{day.format('D')}</span>
        </div>
      ))}
    </div>
  );
};

export default WeekDays;
