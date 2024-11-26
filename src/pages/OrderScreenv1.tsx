import pizza from '../assets/pizza img.png'
import salad from '../assets/salad img.png'
import dessert from '../assets/dessert img.png'
import sides from '../assets/sides img.png'
import dish1 from '../assets/Rectangle 310.svg';
import dish2 from '../assets/Rectangle 310 -2.svg'
import dish3 from '../assets/Rectangle 310-3.svg'
import dish4 from '../assets/Rectangle 310-4.svg'
import dish5 from '../assets/Rectangle 310-6.svg'
import { useState } from 'react';
import { HiShoppingCart } from "react-icons/hi2";
import { PiCurrencyDollarSimpleLight } from "react-icons/pi";
import { FaDollarSign } from "react-icons/fa6";

function OrderScreenv1() {
    const [selectedCategory, setSelectedCategory] = useState('Dinner');
    const [selectedMenuItem, setSelectedMenuItem] = useState('Pizza');
    const [selectedDish, setSelectedDish] = useState<number | null>(null);

    const categories=['Breakfast','Brunch','Lunch','Dinner','MDinner',"Lunch",'Breakfast']
    const menuItems = [
        { id: 1,name: 'Pizza', image: pizza },
        { id: 2,name: 'Salad', image: salad },
        { id: 3,name: 'Dessert', image: dessert },
        { id: 4,name: 'Sides', image: sides },
        { id: 5,name: 'Salad', image: salad },
        { id: 6,name: 'Dessert', image: dessert },
        { id: 7,name: 'Sides', image: sides },
        { id: 8,name: 'Pizza', image: pizza },
        { id: 9,name: 'Salad', image: salad },
        { id: 10,name: 'Dessert', image: dessert },
        { id:11,name: 'Sides', image: sides },
        { id: 12,name: 'Pizza', image: pizza }
      ];
      const dishes = [
        {id: 1,image: dish1,name: "Lamb Chop",cost: "SGD 180.25",label: "spicy",description:"Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg"},
        {id: 2,image: dish2,name: "Chicken Fried Rice",cost: "SGD 180.25",label: "trending",description:"Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg"},
        {id: 3,image: dish3,name: "Veg Fried Rice",cost: "SGD 180.25",label: "trending",description:"Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg"},
        {id: 4,image: dish4,name: "Chicken Manchurian",cost: "SGD 180.25",label: "trending",description:"Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg"},
        {id: 5,image: dish5,name: "Aloo Fried Rice",cost: "SGD 180.25",label: "",description:"Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg"},
        {id: 4,image: dish4,name: "Chicken Manchurian",cost: "SGD 180.25",label: "trending",description:"Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg"}
      ];


  return (
    <div className="p-4">
        {/* {Categories button overflow} */}
        <div className="flex mb-4 overflow-x-auto space-x-4 ">
            {categories.map((category) =>(
                <div key={category} 
                onClick={() => setSelectedCategory(category)} 
                className={`text-sm whitespace-nowrap px-5 py-2 mb-2 rounded-lg font-semibold 
                ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>{category}</div>
            ))}
        </div>

        {/* {Menuitems button overflow} */}
        <div className='flex overflow-x-auto space-x-4 '>
            {menuItems.map((menu, index) =>(
                <div key={index} 
                onClick={() => setSelectedMenuItem(menu.name)} 
                 className={`p-1 mb-2 min-w-16 py-3 rounded-lg cursor-pointer flex flex-col items-center 
                 ${selectedMenuItem === menu.name ? 'border-2 border-blue-500 bg-white text-blue-500' : 'border border-gray-200 bg-gray-100 text-gray-800'}`}>
                    <img src={menu.image} alt={menu.name}/>
                    <p className='text-center text-sm'>{menu.name}</p>
                </div>
            ))}
        </div>

        {/* Main menu */}
        <div className='mb-8'>
            {dishes.map((items) => (
                <div key={items.id} 
                onClick={() => setSelectedDish(items.id)}
                className={`flex px-2 gap-4 py-2 my-2 rounded cursor-pointer ${selectedDish === items.id ? 'text-white bg-blue-600' : 'text-black bg-slate-100'}`} >
                    <img src={items.image}/>
                  <div className='flex flex-col'>
                    <p className='text-sm mb-1 font-semibold'>{items.name}</p>
                    <p className='text-xs '>{items.description}</p>
                    <p className={`text-sm mt-1 font-semibold ${selectedDish === items.id ? 'text-white' : 'text-blue-600'}`}>{items.cost}</p>
                  </div>
                </div>
            ))}
        </div>

        {/* Fixed Cart Button */}
        <div className='fixed bottom-0 left-0 right-0 rounded-lg bg-white text-blue-600  mx-4 shadow-md'>
            
            <div className='bg-transparent p-3 flex justify-center items-center cursor-pointer font-semibold text-xl'>
                <HiShoppingCart className='text-xl mr-1'/>
                <p>View Cart</p>
            </div>
        </div>

        {/* Fixed Cart Button */}
        {/* <div className="fixed bottom-0 left-0 right-0 bg-blue-500 text-white py-4 flex justify-center z-50 shadow-lg">
                <button
                    className="px-6 py-3 bg-white text-blue-500 rounded-full font-semibold shadow-md hover:bg-gray-200"
                    onClick={() => alert('Cart Button Clicked')}>View Cart
                </button>
            </div> */}
    </div>
  );
};

export default OrderScreenv1;