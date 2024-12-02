import { useState } from "react";
import pizza from '../assets/pizza img.png';
import salad from '../assets/salad img.png';
import dessert from '../assets/dessert img.png';
import sides from '../assets/sides img.png';
import dish1 from '../assests1/dish1.svg';
import dish2 from '../assests1/dish2.svg';
import dish3 from '../assests1/dish3.svg';
import dish4 from '../assests1/dish4.svg';
import dish5 from '../assests1/dish5.svg';
import dish6 from '../assests1/dish6.svg';
import { RxCross2 } from "react-icons/rx";
import { HiShoppingCart } from "react-icons/hi2";
import { Sheet } from "react-modal-sheet";

// Interface for Dish Size Options
interface DishSize {
  size: string;
  price: string;
}

// Interface for a Dish
interface Dishes {
  id: number;
  image: string;
  cost: string;
  label: string;
  name: string;
  description: string;
  sizes: DishSize[];
}

// Interface for Menu Category
interface MenuItems {
  id: number;
  name: string;
  image: string;
}

const OrderScreenv2 = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dishes | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("Medium");
  const [selectedCategory, setSelectedCategory] = useState<string>("Dinner");
  const [cartItems, setCartItems] = useState<{ name: string; size: string; price: string }[]>([]);

  const categories = ['Breakfast', 'Brunch', 'Lunch', 'Dinner', 'MDinner', "Lunch", 'Breakfast'];
  const menuItems: MenuItems[] = [
    { id: 1, name: 'Pizza', image: pizza },
    { id: 2, name: 'Salad', image: salad },
    { id: 3, name: 'Dessert', image: dessert },
    { id: 4, name: 'Sides', image: sides },
  ];

  const dishes: Dishes[] = [
    {
      id: 1,
      image: dish1,
      name: "Ramen Shoyu Mushroom Spicy Curry",
      cost: "SGD 180.25",
      label: "spicy",
      description: "Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg",
      sizes: [
        { size: "Small - 6”", price: "SGD 8" },
        { size: "Medium - 6”", price: "SGD 12" },
        { size: "Large - 6”", price: "SGD 16" },
      ]
    },
    {
      id: 2,
      image: dish2,
      name: "Cheese Loaded Fries with Bread & Toast",
      cost: "SGD 180.25",
      label: "trending",
      description: "Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg",
      sizes: [
        { size: "Small - 6”", price: "SGD 8" },
        { size: "Medium - 6”", price: "SGD 12" },
        { size: "Large - 6”", price: "SGD 16" },
      ]
    },
    {
      id: 3,
      image: dish3,
      name: "Ramen Shoyu Mushroom Spicy Curry",
      cost: "SGD 180.25",
      label: "trending",
      description: "Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg",
      sizes: [
        { size: "Small - 6”", price: "SGD 8" },
        { size: "Medium - 6”", price: "SGD 12" },
        { size: "Large - 6”", price: "SGD 16" },
      ]
    },
    {
      id: 4,
      image: dish4,
      name: "Cheese Loaded Fries with Bread & Toast",
      cost: "SGD 180.25",
      label: "trending",
      description: "Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg",
      sizes: [
        { size: "Small - 6”", price: "SGD 8" },
        { size: "Medium - 6”", price: "SGD 12" },
        { size: "Large - 6”", price: "SGD 16" },
      ]
    },
    {
      id: 5,
      image: dish5,
      name: "Ramen Shoyu Mushroom Spicy Curry",
      cost: "SGD 180.25",
      label: "trending",
      description: "Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg",
      sizes: [
        { size: "Small - 6”", price: "SGD 8" },
        { size: "Medium - 6”", price: "SGD 12" },
        { size: "Large - 6”", price: "SGD 16" },
      ]
    },
    {
      id: 6,
      image: dish6,
      name: "Cheese Loaded Fries with Bread & Toast",
      cost: "SGD 180.25",
      label: "trending",
      description: "Comes with 6 succulent sashimi-grade Scallops. Served with Japanese noodles, cabbage, onion & egg",
      sizes: [
        { size: "Small - 6”", price: "SGD 8" },
        { size: "Medium - 6”", price: "SGD 12" },
        { size: "Large - 6”", price: "SGD 16" },
      ]
    }
  ];

  const handleAddToCart = () => {
    if (selectedDish && selectedSize) {
      const selectedDishSize = selectedDish.sizes.find(size => size.size === selectedSize);
      if (selectedDishSize) {
        const newCartItem = {
          name: selectedDish.name,
          size: selectedSize,
          price: selectedDishSize.price
        };
        setCartItems([...cartItems, newCartItem]);
        setOpen(false);
      }
    }
  };

  return (
    <div className="p-4">
      {/* Categories */}
      <div className="flex mb-4 overflow-x-auto space-x-4 ">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-sm whitespace-nowrap px-5 py-2 mb-2 rounded-lg font-semibold 
            ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
            {category}
          </div>
        ))}
      </div>

      {/* Menu Items */}
      <div className='flex overflow-x-auto space-x-4 '>
        {menuItems.map((menu, index) => (
          <div
            key={index}
            className={`p-1 mb-2 min-w-16 py-3 rounded-lg cursor-pointer flex flex-col items-center 
            ${menu.name === selectedCategory ? 'border-2 border-blue-500 bg-white text-blue-500 ' : 'border border-gray-200 bg-gray-100 text-gray-800'}`}>
            <img src={menu.image} alt={menu.name} />
            <p className='text-center text-sm'>{menu.name}</p>
          </div>
        ))}
      </div>

      {/* Dishes */}
      <div className="grid grid-cols-2 gap-4 my-4 pb-7">
        {dishes.map((item) => (
          <div
            key={item.id}
            className="py-2 bg-slate-100 flex justify-center items-center rounded-lg cursor-pointer"
            onClick={() => {
              setSelectedDish(item);
              setOpen(true);
            }}>
            <div>
              <img src={item.image} alt={item.name} className="w-48 rounded-lg ml-3" />
              <p className="font-semibold ml-3 mr-3">{item.name}</p>
              <p className="text-blue-600 font-semibold flex justify-end mr-2">{item.cost}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Cart Button */}
      <div className='fixed bottom-0 left-0 right-0 rounded-lg bg-white text-blue-600 mx-4 shadow-lg'>
        <div className='bg-transparent p-3 flex justify-center items-center cursor-pointer font-semibold text-xl'>
          <HiShoppingCart className='text-xl mr-1' />
          <p>View Cart ({cartItems.length})</p>
        </div>
      </div>

      {/* Bottom Sheet */}
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[1]} initialSnap={0}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            {/* Selected Dish Details */}
            {selectedDish && (
              <div className="px-4 overflow-y-auto">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={selectedDish.image}
                      alt={selectedDish.name}
                      className="w-16 h-16 rounded-lg mr-3" />
                    <div>
                      <h2 className="text-lg font-semibold">{selectedDish.name}</h2>
                      <p className="text-gray-600 text-sm">{selectedDish.description}</p>
                    </div>
                  </div>
                  <div onClick={() => setOpen(false)}
                    className="text-gray-500 hover:text-gray-800 bg-transparent cursor-pointer">
                    <RxCross2 className="text-2xl mb-" />
                  </div>
                </div>

                {/* Size Options */}
                <div className="mb-4">
                  {selectedDish.sizes.map((option) => (
                    <label
                      key={option.size}
                      className="flex items-center justify-between py-2 border-b border-gray-200">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="size"
                          value={option.size}
                          checked={selectedSize === option.size}
                          onChange={(e) => setSelectedSize(e.target.value)}
                          className="form-radio h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-sm">{option.size}</span>
                      </div>
                      <span className="text-blue-600 font-semibold">{option.price}</span>
                    </label>
                  ))}
                </div>

                {/* Add Button */}
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg">
                  Add +
                </button>
              </div>
            )}
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
};

export default OrderScreenv2;
