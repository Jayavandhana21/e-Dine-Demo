import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dialog from '../components/dialog/Dialog';
import Students from './Students';
import { RxCrossCircled } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


const Home = () => {

  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    navigate('/students')
  }

  const navigate1 = useNavigate()
  const handleClick1 = () => {
    navigate1('/orderscreen')

  }

  return (
    <div className="text-center grid ">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p>Welcome to the home page!</p>
      <button className="mt-12 border hover: border-black" onClick={handleClick}>Click here for Students list</button>
      <button className='mt-6 border hover: border-black' onClick={handleClick1}>Order Screen</button>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg">Open Modal
      </button>

      <Dialog isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      
        <div className="h-96 w-full max-h-[calc(100vh-100px)] overflow-y-auto ">
        <div className="flex items-center justify-between p-4 border">
  <span className="text-center">Select Students</span>
  {/* <button >Button</button> */}
  <RxCross2 className="ml-auto cursor-pointer text-black "/>
          </div>
          <Students isPopup={true}/> {/* Pass isPopup={true} */}
        </div>
      </Dialog>
    </div>
  );
};

export default Home;
