import { useEffect, useState } from 'react';
import { HiShoppingCart } from "react-icons/hi2";
import dessert from '../../assets/dessert img.png';
import pizza from '../../assets/pizza img.png';
import salad from '../../assets/salad img.png';
import sides from '../../assets/sides img.png';
import dish1 from '../../assets/Rectangle 310.svg';
import dish2 from '../../assets/Rectangle 310 -2.svg';
import dish3 from '../../assets/Rectangle 310-3.svg';
import dish4 from '../../assets/Rectangle 310-4.svg';
import dish5 from '../../assets/Rectangle 310-6.svg';
import moment from 'moment';
import { generateFutureWeeks, Week } from '../../utils/WeekUtil';
import WeekCalender from '../../utils/WeekCalender';
import WeekDays from '../../utils/WeekDays';

function OrderScreenv1() {
    const [selectedCategory, setSelectedCategory] = useState('Breakfast');
    const [selectedMenuItem, setSelectedMenuItem] = useState('Pizza');
    const [selectedDish, setSelectedDish] = useState<number | null>(null);
    const [cart, setCart] = useState<number[]>([]); // To track selected dishes in the cart

    const categories = ['Breakfast', 'Brunch', 'Lunch', 'Dinner', 'MDinner']
    const menuItems = [
        { id: 1, name: 'Pizza', image: pizza },
        { id: 2, name: 'Salad', image: salad },
        { id: 3, name: 'Dessert', image: dessert },
        { id: 4, name: 'Sides', image: sides }];
    const dishes = [
        { id: 1, image: dish1, name: "Lamb Chop", cost: "SGD 180.25", label: "spicy", description: "Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg" },
        { id: 2, image: dish2, name: "Chicken Fried Rice", cost: "SGD 180.25", label: "trending", description: "Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg" },
        { id: 3, image: dish3, name: "Veg Fried Rice", cost: "SGD 180.25", label: "trending", description: "Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg" },
        { id: 4, image: dish4, name: "Chicken Manchurian", cost: "SGD 180.25", label: "trending", description: "Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg" },
        { id: 5, image: dish5, name: "Aloo Fried Rice", cost: "SGD 180.25", label: "", description: "Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg" },
        { id: 6, image: dish4, name: "Chicken Manchurian", cost: "SGD 180.25", label: "trending", description: "Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg" }];

    const addDishToCart = (dishId: number) => {
        setSelectedDish(dishId)
        if (cart.includes(dishId)) {
            setCart(cart.filter(id => id !== dishId)); // Remove from cart
        } else {
            setCart([...cart, dishId]); // Add to cart
        }
    };

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
        <div className="p-4">
            <div className='hidden md:flex md:flex-col lg:flex-row bg-slate-200 p-4 md:my-4 rounded-md'>
                <WeekCalender
                    futureWeeks={futureWeeks}
                    selectedWeek={selectedWeek}
                    onWeekChange={handleWeekChange}/>
                <WeekDays
                    selectedWeek={selectedWeek}
                    selectedDay={selectedDay}
                    onDayClick={handleDayClick}/>
            </div>

            
            <div className='flex items-center mb-4 overflow-x-auto justify-between md:bg-slate-100 md:rounded-md'>
            {/* {Categories button overflow} */} 
            <div className="flex space-x-4 ">
                {categories.map((category) => (
                    <div key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`lg:text-xl text-sm whitespace-nowrap px-5 md:mt-2 py-2 mb-2 md:mx-2 rounded-md cursor-pointer font-semibold 
                ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>{category}</div>))}
            </div>
            {/* Shopping cart Icon */}
            <HiShoppingCart className='hidden md:block text-2xl lg:text-3xl mr-3 text-blue-600 cursor-pointer'/>
            </div>


            {/* {Menuitems button overflow} */}
            <div className='flex overflow-x-auto space-x-4'>
                {menuItems.map((menu, index) => (
                    <div key={index}
                        onClick={() => setSelectedMenuItem(menu.name)}
                        className={`p-1 mb-2 min-w-16 lg:p-5 md:mx-2 rounded-md cursor-pointer flex flex-col items-center 
                          ${selectedMenuItem === menu.name ? 'border-2 border-blue-500 bg-white text-blue-500' : 'border border-gray-200 bg-gray-100 text-gray-800'}`}>
                        <img src={menu.image} alt={menu.name} className='lg:w-14 h-14'/>
                        <p className='text-center text-sm lg:text-xl'>{menu.name}</p>
                    </div>
                ))}
            </div>

            {/* Main menu */}
            <div className='mb-8 grid md:grid-cols-2 lg:grid-cols-3 '>
                {dishes.map((items) => (
                    <div
                        key={items.id}
                        onClick={() => addDishToCart(items.id)}
                        className={'flex px-2 gap-4 py-2 my-2 md:mx-2 rounded cursor-pointer bg-slate-100 hover:!bg-blue-500 hover:text-white'}>
                        <img src={items.image} />
                        <div className='flex flex-col hover:text-white'>
                            <p className='text-sm mb-1 font-semibold md:text-lg text-black'>{items.name}</p>
                            <p className='text-xs md:hidden text-black'>{items.description}</p>
                            <p className={'text-sm mt-1 font-semibold md:text-lg text-blue-600'}>{items.cost}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fixed Cart Button */}
            <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white mx-4 p-3 rounded-md shadow-lg flex justify-between items-center'>
                <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-semibold">
                    {cart.length}
                </div>
                <div className='flex items-center text-blue-600 font-semibold text-xl cursor-pointer'>
                    <HiShoppingCart className='text-2xl mr-2' />
                    <p>View Cart</p>
                </div>
            </div>

        </div>
    );
};

export default OrderScreenv1;