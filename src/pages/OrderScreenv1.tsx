import pizza from '../assets/pizza img.png'
import salad from '../assets/salad img.png'
import dessert from '../assets/dessert img.png'
import sides from '../assets/sides img.png'
import dish1 from '../assets/Rectangle 310.svg';
import dish2 from '../assets/Rectangle 310 -2.svg'
import dish3 from '../assets/Rectangle 310-3.svg'
import dish4 from '../assets/Rectangle 310-4.svg'





function OrderScreenv1() {

    
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
        {id: 1,image: dish1,name: "Lamb Chop",cost: "SGD 180.25",label: "spicy"},
        {id: 2,image: dish2,name: "Chicken Fried Rice",cost: "SGD 180.25",label: "trending"},
        {id: 3,image: dish3,name: "Veg Fried Rice",cost: "SGD 180.25",label: "trending"},
        {id: 4,image: dish4,name: "Chicken Manchurian",cost: "SGD 180.25",label: "trending"},
      ];


  return (
    <div className="p-4">
        {/* {Categories button overflow} */}
        <div className="flex mb-4 overflow-x-auto space-x-4 ">
            {categories.map((category) =>(
                <div key={category} className="rounded-lg font-semibold bg-slate-100 px-4 py-2 cursor-pointer">{category}</div>
            ))}
        </div>

        {/* {Menuitems button overflow} */}
        <div className='flex overflow-x-auto space-x-4 '>
            {menuItems.map((menu) =>(
                <div key={menu.id} className='px-2 py-1.5 rounded-lg cursor-pointer flex flex-col items-center border border-gray-200 bg-gray-100 text-gray-800'>
                    <img src={menu.image} alt={menu.name}/>
                    <p className='text-sm text-center'>{menu.name}</p>
                </div>
            ))}
        </div>

        {/* Main menu */}
        <div className=''>
            {dishes.map((items) => (
                <div key={items.id}>
                    <img src={items.image}/>
                </div>
            ))}
        </div>
    </div>
  )
};

export default OrderScreenv1;