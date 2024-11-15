import { useNavigate } from 'react-router-dom';
import NotificationIcon from '../assets/Notification.png'
import Ellipse from '../assets/Ellipse.png'

import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FaBell, FaChevronDown } from 'react-icons/fa';

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

const AppHeader = () => {
    // Notification and profile icon button
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/notification')
    };

    const futureWeeks = generateFutureWeeks(52); // Generate future weeks for the next year
    const [selectedWeek, setSelectedWeek] = useState<Week | null>(null);
    const [selectedDay, setSelectedDay] = useState<moment.Moment | null>(null);
    const currentDate = moment().date(); // Get current date (e.g., 24)

    // Set the default selected week to the current week
    useEffect(() => {
        const currentWeekNumber = moment().week();
        const currentWeek = futureWeeks.find(week => week.number === currentWeekNumber);
        if (currentWeek) {
            setSelectedWeek(currentWeek);
        }
    }, []);

    const handleWeekChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedWeekNumber = Number(event.target.value);
        const week = futureWeeks.find(w => w.number === selectedWeekNumber);
        if (week) {
            setSelectedWeek(week);
        }
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
            <div className="flex items-center justify-between mb-4 bg-white ">
                {/* <div className="relative">
                    <select
                        value={selectedWeek?.number}
                        onChange={handleWeekChange}
                        className="bg-gray-100 p-3 rounded-md text-gray-700 text-sm font-semibold cursor-pointer  "
                    >
                        {futureWeeks.map(week => (
                            <option key={week.number} value={week.number}>
                                Week {week.number} - {week.startDate} to {week.endDate}
                            </option>
                        ))}
                    </select>
                </div> */}
                <div className="relative inline-block bg-gray-50 p-4 rounded-lg mr-4">
                    {/* Display the selected week information */}
                    <div className="text-left">
                        <p className="text-sm font-semibold text-gray-700">Week {selectedWeek?.number}</p>
                        <p className="text-blue-500 text-lg font-semibold">
                            {selectedWeek?.startDate} - {selectedWeek?.endDate}
                        </p>
                    </div>

                    {/* Dropdown icon */}
                    <FaChevronDown className="absolute bottom-6 left-52 text-blue-500 cursor-pointer" />

                    {/* Week Selector (hidden by default, can be shown as a dropdown menu if desired) */}
                    <select
                        value={selectedWeek?.number || ''}
                        onChange={handleWeekChange}
                        className="absolute inset-0 opacity-0 cursor-pointer "
                    >
                        {futureWeeks.map(week => (
                            <option key={week.number} value={week.number}>
                                Week {week.number} - {week.startDate} to {week.endDate}
                            </option>
                        ))}
                    </select>
                </div>


                {/* Icons */}
                <div className='flex gap-4 '>
                    <img src={NotificationIcon} alt='Notification icon' onClick={handleClick} className=' cursor-pointer ' />
                    <img src={Ellipse} alt='Mail profile icon' className='rounded-full p-[3px] border ' />

                </div>

                {/* Week Days */}
            </div>
            <div className="flex space-x-4 justify-between text-gray-600 text-center ">
                {getWeekDays().map((day, index) => (
                    <div
                        key={index}
                        onClick={() => handleDayClick(day)}
                        className={`w-16 h-16 rounded flex flex-col items-center justify-center cursor-pointer bg-slate-100 ${selectedDay && selectedDay.isSame(day, 'day')
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
    )
};

export default AppHeader;