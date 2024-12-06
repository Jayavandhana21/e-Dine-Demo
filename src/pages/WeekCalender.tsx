import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';

interface Week {
  number: number;
  startDate: string;
  endDate: string;
}

interface WeekCalenderProps {
  futureWeeks: Week[];
  selectedWeek: Week | null;
  onWeekChange: (week: Week) => void;
}

const WeekCalender: React.FC<WeekCalenderProps> = ({ futureWeeks, selectedWeek, onWeekChange }) => {
  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedWeekNumber = Number(event.target.value);
    const newWeek = futureWeeks.find((week) => week.number === selectedWeekNumber);
    if (newWeek) {
      onWeekChange(newWeek);
    }
  };

  return (
    <div className="relative inline-block bg-gray-50 p-2 mx-2 md:pr-14 pr-8 md:mx-2 rounded-md w-fit flex items-center">
      <div className="text-left cursor-pointer">
        <p className="text-sm font-semibold text-gray-700 md:text-lg">
          Week {selectedWeek?.number}
        </p>
        <p className="text-blue-500 text-sm font-semibold md:text-lg">
          {selectedWeek?.startDate} - {selectedWeek?.endDate}
        </p>
      </div>
      <FaChevronDown className="absolute right-3 bottom-3 text-blue-500 cursor-pointer lg:top-11 md:top-10 md:right-5"/>
      <select
        className="absolute inset-0 opacity-0 cursor-pointer"
        value={selectedWeek?.number || ''}
        onChange={handleDropdownChange}>
        {futureWeeks?.map((week) => (
          <option key={week.number} value={week.number}>
            Week {week.number}: {week.startDate} - {week.endDate}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WeekCalender;