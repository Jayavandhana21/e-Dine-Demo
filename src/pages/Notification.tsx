import { FiArrowLeft } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const Notification = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/login');
    };
    

  return (
    <div className="">
      <div className='flex justify-between  border-b-[#E7E9EC] border-b-2 border-solid p-4'>
        <p className='flex justify items-center gap-5 font-bold text-xl'> <FiArrowLeft className='text-3xl cursor-pointer' onClick={handleClick}/> Notification</p>
        <p className='font-medium text-blue-600'>Clear all</p>
      </div>
      <div className="grid grid-cols-12 p-3 items-center ">
        <GoBell className="text-2xl text-blue-600 col-span-1 mx-auto" />
        <p className="col-span-11 ml-3 text-lg font-semibold">
          With this in mind, Global Online Academy created the Blended Learning Design
        </p>
      </div>
      <div className="border-b-[#E7E9EC] border-b-2 border-solid pb-5">
        <span className="p-16 text-sm text-slate-400 ">Aug 12, 2020 at 12:08 PM</span>
      </div>
        
      <div className="grid grid-cols-12 p-3 items-center ">
        <GoBell className="text-2xl text-blue-600 col-span-1 mx-auto" />
        <p className="col-span-11 text-lg font-semibold ml-3 ">
        Technology should serve, not drive, pedagogy. Schools often discuss
        </p>
      </div>
      <div className="border-b-[#E7E9EC] border-b-2 border-solid pb-5">
        <span className="p-16 text-sm text-slate-400 ">Aug 12, 2020 at 12:08 PM</span>
      </div>

      <div className="grid grid-cols-12 p-3 items-center ">
        <GoBell className="text-2xl text-blue-600 col-span-1 mx-auto" />
        <p className="col-span-11 ml-3 text-lg font-semibold">
        Peer learning works. By building robust personal learning communities both  
        </p>
      </div>
      <div className="border-b-[#E7E9EC] border-b-2 border-solid pb-5 ">
        <span className="p-16 text-sm text-slate-400 ">Aug 12, 2020 at 12:08 PM</span>
      </div>

      
    </div>
  )
};

export default Notification;