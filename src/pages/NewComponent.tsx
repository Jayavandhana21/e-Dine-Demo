import { useNavigate } from 'react-router-dom';
import Ellipse from '../assets/Ellipse.png';
import NotificationIcon from '../assets/Notification.png';
import { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { FaChevronDown } from 'react-icons/fa6';
import moment from 'moment';

interface Week {
  number: number;
  startDate: string;
  endDate: string;
}

// Function to generate an array of future weeks starting from the current week
  const generateFutureWeeks = (weeksCount: number): Week[] => {
  const currentWeek = moment().week(); // Get the current week number
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

const NewComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/notification');
  };

  const futureWeeks = generateFutureWeeks(52); // Generate future weeks for the next year
  const [selectedWeek, setSelectedWeek] = useState<Week | null>(null);
  const [selectedDay, setSelectedDay] = useState<moment.Moment | null>(null);
  const [showDatePicker, setDatePicker] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);

  // Set the default selected week to the current week
  useEffect(() => {
      const currentWeekNumber = moment().week();
      const currentWeek = futureWeeks.find(week => week.number === currentWeekNumber);
      if (currentWeek) {
          setSelectedWeek(currentWeek);
      }
  }, []);

  const handleDatePicker = (type: string) => {
      type === 'open' ? setDatePicker(true) : setDatePicker(false);
  };

  // Handle date change from DatePicker
  const handleDateChange = (newDate: moment.Moment | null) => {
      if (newDate) {
          setSelectedDate(newDate);

          // Calculate the week number of the selected date
          const selectedWeekNumber = newDate.week();
          const newWeek = futureWeeks.find(week => week.number === selectedWeekNumber);

          if (newWeek) {
              setSelectedWeek(newWeek); // Update the selected week
          }
      }

      setDatePicker(false); // Close the DatePicker after selection
  };

  // Calculate the days of the selected week
  const getWeekDays = () => {
      if (!selectedWeek) return [];
      const startOfWeek = moment(selectedWeek.startDate, 'DD MMM');
      return Array.from({ length: 7 }).map((_, index) =>
          startOfWeek.clone().add(index, 'days')
      );
  };

  const handleDayClick = (day: moment.Moment) => {
      setSelectedDay(day);
  };

  return (
      <>
          <div className="flex items-center justify-between mb-4 bg-white">
              <div className="relative inline-block bg-gray-50 p-2 pr-8 rounded-lg mr-4">
                  {/* Display the selected week information */}
                  <div className="text-left cursor-pointer" onClick={() => handleDatePicker('open')}>
                      <p className="text-sm font-semibold text-gray-700">Week {selectedWeek?.number}</p>
                      <p className="text-blue-500 text-sm font-semibold">
                          {selectedWeek?.startDate} - {selectedWeek?.endDate}
                      </p>
                  </div>

                  {/* Dropdown icon */}
                  <FaChevronDown className="absolute bottom-3 left-40 text-blue-500 cursor-pointer" />
              </div>

              {/* Conditional Date Picker Popup */}
              {showDatePicker && (
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DatePicker
                          onClose={() => handleDatePicker('close')}
                          value={selectedDate}
                          onChange={handleDateChange}
                          slotProps={{
                              textField: {
                                  sx: { display: 'none' }, // Hide the default input field
                              },
                          }}
                          open={showDatePicker}
                      />
                  </LocalizationProvider>
              )}

              {/* Icons */}
              <div className="flex gap-4">
                  <img
                      src={NotificationIcon}
                      alt="Notification icon"
                      onClick={handleClick}
                      className="cursor-pointer"
                  />
                  <img
                      src={Ellipse}
                      alt="Mail profile icon"
                      className="rounded-full p-[3px] border"
                  />
              </div>
          </div>

          {/* Week Days */}
          <div className="flex space-x-4 justify-between text-gray-600 text-center">
              {getWeekDays().map((day, index) => (
                  <div
                      key={index}
                      onClick={() => handleDayClick(day)}
                      className={`w-16 h-16 rounded flex flex-col items-center justify-center cursor-pointer bg-slate-100 
                      ${
                          selectedDay && selectedDay.isSame(day, 'day')
                              ? '!bg-blue-500 text-white'
                              : 'text-gray-700'
                      }`}
                  >
                      <span className="text-lg">{day.format('dd')[0]}</span>
                      <span className="block text-sm font-medium">{day.format('D')}</span>
                  </div>
              ))}
          </div>
      </>
  );
};

export default NewComponent;


