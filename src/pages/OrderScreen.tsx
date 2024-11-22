// import pizza from '../assets/pizza img.png'
// import salad from '../assets/salad img.png'
// import dessert from '../assets/dessert img.png'
// import sides from '../assets/sides img.png'
// import dish1 from '../assets/dish1.png'
// import dish2 from '../assets/dish2.png'
// import dish3 from '../assets/dish3.png'
// import dish4 from '../assets/dish4.png'
// import dish5 from '../assets/dish5.png'
// import dish6 from '../assets/dish6.png'
// import { useState } from 'react'
// import { FaFire } from 'react-icons/fa'
// import { FaTag } from 'react-icons/fa6'


// const OrderScreen = () => {

//   const [selectedCategory, setSelectedCategory] = useState('Dinner');
//   const [selectedMenuItem, setSelectedMenuItem] = useState('Pizza');

//   const [selectedDish, setSelectedDish] = useState<number | null>(null);

//   const categories = ['Dinner', 'Brunch', 'M Dinner', 'Breakfast', 'Lunch', 'Evening'];
//   const menuItems = [
//     { name: 'Pizza', image: pizza },
//     { name: 'Salad', image: salad },
//     { name: 'Dessert', image: dessert },
//     { name: 'Sides', image: sides },
//     { name: 'Salad', image: salad },
//     { name: 'Dessert', image: dessert }
//   ];

//   const menu = [
//     {id: 1,image: dish1,name: "Lamb Chop",cost: "SGD 180.25",label: "spicy"},
//     {id: 2,image: dish2,name: "Chicken Fried Rice",cost: "SGD 180.25",label: "trending"},
//     {id: 3,image: dish3,name: "Veg Fried Rice",cost: "SGD 180.25",label: "trending"},
//     {id: 4,image: dish4,name: "Chicken Manchurian",cost: "SGD 180.25",label: "trending"},
//     {id: 5,image: dish5,name: "Chicken Noodles",cost: "SGD 180.25"},
//     {id: 6,image: dish6,name: "Margherita",cost: "SGD 180.25",}
//   ];

//   return (
//     <div className='p-4'>

//       {/* Horizontal Category Buttons */}
//       <div className="flex overflow-x-auto space-x-4 pb-4 ">
//         {categories.map((category) => (
//           <button key={category} onClick={() => setSelectedCategory(category)}
//             className={`text-sm whitespace-nowrap px-4 py-2 rounded-lg font-semibold 
//               ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="border-b-[#E7E9EC] border-b-2 border-solid mb-4 " />

//       {/* Menu Items in a Scrollable Row */}
      
//       <div className="grid grid-cols-12 overflow-y-auto">
//         <div className="col-span-2">
//           {menuItems.map((item, index) => (
//             <div key={index} onClick={() => setSelectedMenuItem(item.name)}
//               className={`p-1 mb-4 rounded-lg cursor-pointer flex flex-col items-center 
//               ${selectedMenuItem === item.name ? 'border-2 border-blue-500 bg-white text-blue-500' : 'border border-gray-200 bg-gray-100 text-gray-800'}`}>
//               <img src={item.image} alt={item.name} />
//               <p className="text-sm text-center">{item.name}</p>
//             </div>
//           ))}
//         </div>

//         <div className="h-full w-[1px] bg-gray-300 ml-6 " />

//         <div className="col-span-10">
//           <div className="grid grid-cols-12">
//             {menu.map((dish) => (
//               <div className='col-span-6 mx-2 mb-4'>
//                 <div className='bg-gray-100 rounded p-2 !min-h-48'>
//                   <img src={dish.image} alt={dish.name} className='min-w-full'/>
//                   <div className="flex justify-between">
//                     <div className='flex flex-col'>
//                       <p className={` text-sm font-semibold ${selectedDish === dish.id ? 'text-white' : 'text-black'}`}>
//                         {dish.name}
//                       </p>
//                       <p
//                         className={`text-sm mt-2 ${selectedDish === dish.id ? 'text-white' : 'text-blue-600'} font-medium`}>
//                         {dish.cost}
//                       </p>
//                     </div>
//                     <div className="flex flex-col items-end">
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default OrderScreen;



// <div
// key={dish.id} onClick={() => setSelectedDish(dish.id)}
// className={`grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4 rounded-lg cursor-pointer mb-4
// ${selectedDish === dish.id ? 'bg-blue-500 text-white' : 'bg-slate-100'}`}>

// {/* Dish Image */}
// <img src={dish.image} alt={dish.name} className="w-16 h-16 rounded object-cover" />

// {/* Dish Details */}
// <div>
//   <p className={`font-semibold ${selectedDish === dish.id ? 'text-white' : 'text-black'}`}>
//     {dish.name}
//   </p>
//   <p
//     className={`${selectedDish === dish.id ? 'text-white' : 'text-blue-600'
//       } font-medium`}
//   >
//     {dish.cost}
//   </p>
// </div>

// {/* Badge */}
// <div className="flex flex-col items-end">
//   {dish.label && (
//     <span
//       className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm font-medium
//   ${selectedDish === dish.id ? 'bg-white text-blue-500' : 'bg-gray-200 text-gray-700'}`}>
//       <FaFire className="text-red-500" />
//       <span>{dish.label}</span>
//     </span>
//   )}
//   {dish.id === 1 && (
//     <span
//       className={`mt-2 flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium
//   ${selectedDish === dish.id ? 'bg-white text-blue-500' : 'bg-blue-100 text-blue-600'}`}>
//       <FaTag className="text-blue-500" />
//       <span>Spend $25, save $5</span>
//     </span>
//   )}
// </div>
// </div>


{/* {dish.label && (
                        <span
                          className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm font-medium
  ${selectedDish === dish.id ? 'bg-white text-blue-500' : 'bg-gray-200 text-gray-700'}`}>
                          <FaFire className="text-red-500" />
                          <span>{dish.label}</span>
                        </span>
                      )} */}
                      {/* {dish.id === 1 && (
                        <span
                          className={`mt-2 flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium
  ${selectedDish === dish.id ? 'bg-white text-blue-500' : 'bg-blue-100 text-blue-600'}`}>
                          <FaTag className="text-blue-500" />
                          <span>Spend $25, save $5</span>
                        </span>
                      )} */}
