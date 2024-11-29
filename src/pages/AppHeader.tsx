import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FaChevronDown } from 'react-icons/fa6';
import Ellipse from '../assets/Ellipse.png';
import NotificationIcon from '../assets/Notification.png';


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
    const [showDatePicker, setDatePicker] = useState<boolean>(false);
    const currentDate = moment().date(); // Get current date (e.g., 24)
    ////////////////////////////////////////////////////////////////////////////////////
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (newDate: any) => {
        setSelectedDate(newDate);
    
        // Calculate the week details for the selected date
        if (newDate) {
            const weekStart = moment(newDate).startOf('week'); // Start of the week
            const weekEnd = moment(newDate).endOf('week'); // End of the week
            const weekNumber = moment(newDate).week(); // Week number
    
            // Update the selectedWeek state with the calculated values
            setSelectedWeek({
                number: weekNumber,
                startDate: weekStart.format('DD MMM'),
                endDate: weekEnd.format('DD MMM YYYY'),
            });
        }
    };

    /////////////////////////////////////////////////////////////////////////////////////////////
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

    const handleDatePicker = (type: string) => {
        type === 'open' ? setDatePicker(true) : setDatePicker(false)
    }

    return (
        <>
            <div className="flex items-center justify-between mb-4 bg-white ">
                <div className="relative inline-block bg-gray-50 p-2 pr-8 rounded-lg mr-4 " onClick={() => handleDatePicker('open')}>
                    {/* Display the selected week information */}
                    <div className="text-left cursor-pointer" >
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
                            onClose={() => handleDatePicker('close')} // Close on blur
                            value={selectedDate}
                            onChange={handleDateChange} // Update date on change
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
                <div className='flex gap-4 '>
                    <img src={NotificationIcon} alt='Notification icon' onClick={handleClick} className=' cursor-pointer ' />
                    <img src={Ellipse} alt='Mail profile icon' className='rounded-full p-[3px] border ' />

                </div>

                {/* Week Days */}
            </div>
            <div className="flex space-x-4 justify-between text-gray-600 text-center ">
                {getWeekDays().map((day, index) => (
                   <div key={index} onClick={() => handleDayClick(day)}
                        className={`w-16 h-16 rounded flex flex-col items-center justify-center cursor-pointer bg-slate-100 
                        ${selectedDay && selectedDay.isSame(day, 'day')? '!bg-blue-500 text-white': 'text-gray-700'}`}>
                        <span className="text-lg font-semibold">{day.format('dd')[0]}</span>
                        <span className="block text-sm font-medium">{day.format('D')}</span>
                    </div>
                ))}
            </div>
        </>
    )
};

export default AppHeader;