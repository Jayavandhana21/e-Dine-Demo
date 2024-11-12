import Toggle from 'react-toggle';
import "react-toggle/style.css";
import { FaPlus } from "react-icons/fa6";


const Allergies = () => {

  const allergies = ['Wheat', 'Walnuts', 'Soyabeans', 'Fish', 'Crab', 'Onion', 'Maida', 'Egg', 'Apple', 'Cheese', 'Butter', 'Pasta', 'Chilli', 'Carrot']

  return (
    <div className='p-4'>

      <div className='flex justify-between '>
        <span className='font-medium text-lg'>Ajmal</span>
        <span className='text-blue-600 underline underline-offset-2 font-medium decoration-blue-500 text-xs my-1 '>School 1</span>
      </div>

      <div className='text-blue-600 font-semibold text-sm my-6 '>
        {
          allergies.map((x) => (
            <div className='my-2 bg-slate-100 p-4 rounded-lg flex justify-between'>

              <p>{x}</p>

              <Toggle
                aria-label='No label tag' icons={false}/>

            </div>
          ))
        }
      </div>
      
      <button className='bg-blue-600 mt-10 w-full flex justify-center items-center font-semibold p-4 text-white rounded-md'> <FaPlus className='mr-3'/> Add New</button>
    </div>
  )
}

export default Allergies;