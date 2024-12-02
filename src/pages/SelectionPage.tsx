import { useNavigate } from 'react-router-dom';
import imgred from '../assests1/svg 2.svg'
import imgblue from '../assests1/svg1.svg'
import { FaCircleArrowLeft } from "react-icons/fa6";

const SelectionPage = () => {
  const navigate = useNavigate()
    const handleClick = () => {
        navigate('/allergies')
    };
  return (
    <div className="p-4">
      <div className='bg-blue-600 w-9 h-9 flex items-center justify-center rounded-full'>
      <FaCircleArrowLeft className='text-white w-5 h-5' onClick={handleClick}/>
      </div>

      <div>
      <p className="font-bold text-2xl pt-7 ">What Day Should We Start Meal Plan?</p>
      <p className="text-gray-500 pt-2">Select a day to start your meal plan, you can delete the recipes later in my meal plan.</p>
      </div>

      <div className='flex justify-between pt-4'>
        <img src={imgblue} className='rounded-l-lg cursor-pointer'/>
        <img src={imgred} className='rounded-l-lg cursor-pointer'/>
      </div>
    </div>
  )
}

export default SelectionPage;