import NotificationIcon from '../../assets/Notification.png'
import Ellipse from '../../assets/Ellipse.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { generateFutureWeeks, Week } from '../../utils/WeekUtil';
import { useEffect, useState } from 'react';
import moment from 'moment';
import WeekCalender from '../../utils/WeekCalender';
import WeekDays from '../../utils/WeekDays';


const AppHeaderHome = ({hideCalendar=false}) => {

  const location = useLocation();

  // Check if the current route is `OrderScreenV1`
  const isOrderScreen = location.pathname === '/menu';

  // Shared state for weeks and selected day
  const futureWeeks = generateFutureWeeks(52);
  const [selectedWeek, setSelectedWeek] = useState<Week | null>(null);
  const [selectedDay, setSelectedDay] = useState<moment.Moment | null>(null);

  // Set the default selected week to the current week
  useEffect(() => {
    const currentWeekNumber = moment().week();
    const currentWeek = futureWeeks.find((week) => week.number === currentWeekNumber);
    if (currentWeek) {
      setSelectedWeek(currentWeek);
    }
  }, []);

  const handleWeekChange = (newWeek: Week) => {
    setSelectedWeek(newWeek);
  };

  const handleDayClick = (day: moment.Moment) => {
    setSelectedDay(day);
  };

  return (
    <>
      <div className="grid grid-cols-12 md:bg-slate-100 p-2 items-center pt-4">

       {!hideCalendar && <div className="col-span-6 md:hidden">
          <WeekCalender
            futureWeeks={futureWeeks}
            selectedWeek={selectedWeek}
            onWeekChange={handleWeekChange}/>
        </div>}

          {/* Conditionally hide admin info on OrderScreen */}
          {!isOrderScreen && (
            <div className="md:hidden col-span-6 px-3">
              <p className="font-semibold">Hello Admin23</p>
              <p className="text-neutral-500">helloadmin23@gmail.com</p>
            </div>
          )}
        <div className={`${hideCalendar && isOrderScreen  ? 'col-span-12' : 'col-span-6'} md:col-span-12 flex md:w-full justify-end flex-row`}>
          
          <div className='cursor-pointer pr-4 md:mb-0'>
            <img src={NotificationIcon} alt='Notification icon'/>
          </div>
          <div className='flex items-center '>
            <div className='rounded-full p-[3px] border md:mb-3 mr-1'>
              <img src={Ellipse} alt='Mail profile icon' />
            </div>
            <p className='font-bold hidden md:block mb-3 '>Hello Admin23</p>
          </div>
        </div>
       {!hideCalendar && <div className="col-span-12 md:hidden">
          <WeekDays
            selectedWeek={selectedWeek}
            selectedDay={selectedDay}
            onDayClick={handleDayClick}
          />
        </div>}
      </div>
    </>
  )
}

export default AppHeaderHome;






