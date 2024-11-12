import cc from '../assets/Check Circle.png'
import { RxDotFilled } from "react-icons/rx";
import tp from '../assets/solar_card-2-broken.png'
import wl from '../assets/solar_card-transfer-broken.png'
import pi from '../assets/solar_card-transfer-bold.png'
import { useNavigate } from 'react-router-dom';

export default function Topup() {
  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/topupwallet');
    };
  return (
    <div className="p-4">
      <h3 className="bg-slate-100 flex justify-center rounded-md font-bold text-xl p-3">3645.78 AED</h3>
      <div className="flex justify-between mt-4">
        <div onClick={handleClick} className="bg-blue-600 text-white w-full cursor-pointer justify-center mr-[8%] flex items-center  text-lg rounded-md p-4 gap-2 ">
          <img src={tp}  />Top Up</div>
        <div className="bg-blue-600 text-white w-full flex justify-center items-center  text-lg rounded-md p-4 gap-2 ">  
          <img src={wl}  />Transfer</div>
      </div>
      <p className="mt-4 font-bold text-lg">Transactions</p>


      <div className="mt-2 flex justify-between ">
        <div className="flex items-center ">
        <img src={pi} className="bg-blue-600 p-3 rounded-full mr-6 "/>
        <div>
          <p className="font-bold">Payment</p>
          <p className="text-xs">View Description</p>
        </div>
        </div>
        < RxDotFilled className="text-orange-600 text-3xl"/>
      </div>
      <p className="text-xs flex justify-end mr-3">14:30 29/08/2024</p>

      <div className="mt-4 flex justify-between">
        <div className="flex items-center">
        <img src={pi} className="bg-blue-600 p-3 rounded-full mr-6 "/>
        <div>
          <p className="font-bold">Payment</p>
          <p className="text-xs">View Description</p>
        </div>
        </div>
        < RxDotFilled className="text-green-600 text-3xl"/>
      </div>
      <p className="text-xs flex justify-end mr-3">14:30 29/08/2024</p>

      <div  className="mt-4 flex justify-between">
        <div className="flex items-center">
        <img src={cc} className='bg-green-100 p-3 rounded-full mr-6'/>
        <div>
          <p className="font-bold">Top Up</p>
          <p className="text-xs">View Description</p>
        </div>
        </div>
        < RxDotFilled className="text-orange-600 text-3xl"/>
      </div>
      <p className="text-xs flex justify-end mr-3">10:15 10/05/2024</p>

      <div  className="mt-4 flex justify-between">
        <div className="flex items-center">
        <img src={cc} className='bg-green-100 p-3 rounded-full mr-6'/>
        <div>
          <p className="font-bold">Top Up</p>
          <p className="text-xs">View Description</p>
        </div>
        </div>
        < RxDotFilled className="text-orange-600 text-3xl"/>
      </div>
      <p className="text-xs flex justify-end mr-3">10:10 10/05/2024</p>

      <div  className="mt-4 flex justify-between">
        <div className="flex items-center">
        <img src={cc} className='bg-green-100 p-3 rounded-full mr-6'/>
        <div>
          <p className="font-bold">Top Up</p>
          <p className="text-xs">View Description</p>
        </div>
        </div>
        < RxDotFilled className="text-green-600 text-3xl"/>
      </div>
      <p className="text-xs flex justify-end mr-3">09:59 10/05/2024</p>

      <div  className="mt-4 flex justify-between">
        <div className="flex items-center">
        <img src={cc} className='bg-green-100 p-3 rounded-full mr-6'/>
        <div>
          <p className="font-bold">Top Up</p>
          <p className="text-xs">View Description</p>
        </div>
        </div>
        < RxDotFilled className="text-green-600 text-3xl"/>
      </div>
      <p className="text-xs flex justify-end mr-3">09:59 10/05/2024</p>

      <p className='mt-2 font-bold text-lg'>Yesterday</p>


      <div className="mt-2 flex justify-between ">
        <div className="flex items-center ">
        <img src={pi} className="bg-blue-600 p-3 rounded-full mr-6 "/>
        <div>
          <p className="font-bold">Payment</p>
          <p className="text-xs">View Description</p>
        </div>
        </div>
        < RxDotFilled className="text-orange-600 text-3xl"/>
      </div>
      <p className="text-xs flex justify-end mr-3">14:20 29/08/2024</p>

    </div>
  )

};