import { useState } from 'react'
import ad from '../assests1/advertisement.svg'
import pizza from '../assests1/Ellipse 14.svg'
import desert from '../assests1/Ellipse 15.svg'
import burger from '../assests1/Ellipse 16.svg'
import salad from '../assests1/Ellipse 17.svg'
import fries from '../assests1/Ellipse 18.svg'
import d1 from '../assests1/burger bg.svg'
import { HiShoppingCart } from 'react-icons/hi2'

interface Menu {
    id: number;
    name: string;
    image: string;
  }

const Tablev1 = () => {

    const header =["Promotions","Recommended","Reorder","Bestseller"];
    const [selected, setSelected] = useState<string>("Promotions"); // State to track the selected item


    const menu: Menu[] = [
        {id:1, image: pizza, name:"ForYou"},
        {id:2, image: desert, name: "Starter"},
        {id:3, image: burger , name:"Burger"},
        {id:4, image : salad, name:"Pizza"},
        {id:5, image: fries, name: "Fries"},{id:3, image: burger , name:"Burger"},
        {id:4, image : salad, name:"Pizza"},
        {id:5, image: fries, name: "Fries"}
    ];
    const image=[
        {id:1,name:"Spicy Fried chicken[5 pcs]",cost:"SGD 180.25"},
        {id:2,name:"Spicy Fried chicken[5 pcs]",cost:"SGD 180.25"},
        {id:3,name:"Spicy Fried chicken[5 pcs]",cost:"SGD 180.25"},
        {id:4,name:"Spicy Fried chicken[5 pcs]",cost:"SGD 180.25"},
        {id:5,name:"Spicy Fried chicken[5 pcs]",cost:"SGD 180.25"}
    ];

    return (
        <div className='py-4'>
            <p className='bg-blue-600 text-white font-semibold flex justify-center'>TABLE</p>

            {/* Menu Row (Scrollable) */}
            <div className="flex overflow-x-auto px- pb-1">
                {menu.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center justify-center text-center px-4 shadow hover:shadow-lg transition">
                        <img src={item.image} alt={item.name}
                            className="object-cover rounded-full mb-1 py-2"/>
                        <p className="text-sm text-gray-800 pb-1 ml-1">{item.name}</p>
                    </div>
                ))}
            </div>

            {/* Headers */}
            <div className="flex space-x-4 pt-1 overflow-x-auto">
                {header.map((head) => (
                    <div key={head} onClick={() => setSelected(head)}
                    className={`px-3 py-2 rounded-lg cursor-pointer font-semibold whitespace-nowrap 
                    ${selected === head ? " text-blue-600" : " text-gray-800 "}`}>
                    {head}
                  </div>
                ))}
            </div>

            {/* advertisement */}
            <img src={ad} className='w-full '/>
            <p className='px-3 pt-3 text-blue-600 text-lg font-bold tracking-wide'>RECOMMENDED FOR YOU</p>
            <p className='px-3 text-sm text-gray-700 mb-4'>Curated because you are unique</p>

            {/* main menu */}
            <div className='flex overflow-x-auto pb-1'>
                {image.map((img) => (
                    <div className='bg-slate-100 rounded-lg mr-3 min-w-64 '>
                     <img src={d1} className=''/>
                     <p className='font-semibold px-2'>{img.name}</p>
                     <p className='text-blue-600 font-semibold px-2 pb-1'>{img.cost}</p>
                     </div>
                 ))}
            </div>

            <p className='px-3 pt-3 text-blue-600 font-bold text-lg'>STARTERS</p>

            {/* starters */}
            <div className='px-4 flex '>
                <img src={d1} className='mr-4'/>
            </div>

            {/* Fixed Cart Button */}
            <div className='fixed bottom-0 left-0 right-0 rounded-lg bg-white text-blue-600 mx-4 shadow-lg'>
                <div className='bg-transparent p-3 flex justify-center items-center cursor-pointer font-semibold text-xl'>
                    <HiShoppingCart className='text-xl mr-1' />
                    <p>View Cart</p>
                </div>
            </div>
            
        </div>
      );
    
}

export default Tablev1;