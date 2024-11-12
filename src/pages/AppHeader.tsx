import NotificationIcon from '../assets/Notification.png'
import Ellipse from '../assets/Ellipse.png'
import { useNavigate } from 'react-router-dom';



const AppHeader = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/notification');
    };

    return (
        <div className='flex justify-between mt-3'>
            <div>
                <h1 className=' font-bold text-lg'>Hello Admin23</h1>
                <p className=' text-slate-500 font-normal text-base '>helloadmin@gmail.com</p>
            </div>
            <div className='flex gap-4 '>
                <img src={NotificationIcon} alt='Notification icon' onClick={handleClick} className=' cursor-pointer ' />
                <img src={Ellipse} alt='Mail profile icon' className='rounded-full p-[3px] border ' />

            </div>

        </div>
    )
};

export default AppHeader;