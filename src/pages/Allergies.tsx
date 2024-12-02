import React, { useState } from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import { FaPlus } from "react-icons/fa6";

const Allergies = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const [newAllergy, setNewAllergy] = useState<string>('');
  const [allergies, setAllergies] = useState<string[]>([
    'Wheat', 'Walnuts', 'Soyabeans', 'Fish', 'Crab', 'Onion', 'Maida', 
    'Egg', 'Apple', 'Cheese', 'Butter', 'Pasta', 'Chilli', 'Carrot'
  ]);

  const handleAddNewAllergy = () => {
    if (newAllergy.trim()) {
      setAllergies([...allergies, newAllergy.trim()]);
      setNewAllergy('');
      setIsBottomSheetOpen(false); // Close bottom sheet after adding
    }
  };

  return (
    <div className='p-4'>
      <div className='flex justify-between'>
        <span className='font-medium text-lg'>Ajmal</span>
        <span className='text-blue-600 underline underline-offset-2 font-medium decoration-blue-500 text-xs my-1'>School 1</span>
      </div>

      <div className='text-blue-600 font-semibold text-sm my-6'>
        {allergies.map((allergy) => (
          <div key={allergy} className='my-2 bg-slate-100 p-4 rounded-lg flex justify-between'>
            <p>{allergy}</p>
            <Toggle aria-label='No label tag' icons={false} />
          </div>
        ))}
      </div>

      <button 
        onClick={() => setIsBottomSheetOpen(true)} 
        className='bg-blue-600 mt-5 w-full flex justify-center items-center font-semibold p-4 text-white rounded-md'>
        <FaPlus className='mr-3' /> Add New
      </button>

      {/* Bottom Sheet Modal */}
      {isBottomSheetOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
          <div className="bg-white w-full rounded-t-lg p-6">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">Add New Allergy</h3>
              <button onClick={() => setIsBottomSheetOpen(false)} className="text-xl font-semibold">X</button>
            </div>
            <div className="mt-4">
              <input
                type="text"
                value={newAllergy}
                onChange={(e) => setNewAllergy(e.target.value)}
                placeholder="Enter allergy..."
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleAddNewAllergy}
                className="bg-blue-600 text-white p-2 px-6 rounded-md font-semibold">
                Add Allergy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Allergies;
