import profile from '../assets/Vector.png';
import edit from '../assets/Edit-outline.png';
import { useNavigate } from 'react-router-dom';


const Students: React.FC<StudentsProps> = ({ isPopup = false }) =>  {
    const navigate = useNavigate();
const handleClick = () => {
    navigate('/allergies')
};

const navigate1 = useNavigate();
const handleClick1 = () => {
  navigate1('/topupwallet')
};

const navigate2 = useNavigate();
const handleClick2 = () => {
  navigate2('/orderscreenv1')
};

  const students = [
    {id : 1,name : 'Ajmal',mail : 'Mohideen@lfsolutions.net',school : 'School 1'},
    {id : 2,name : 'Taism',mail : 'ajmal_cutty@yahoo.in',school : 'TEST K'},
    {id : 3,name : 'Ameen',mail : 'ajmal_cutty@yahoo.in',school : 'School 1'},
    {id : 4,name : 'Jack',mail : 'jack_son@yahoo.in',school : 'School 1'},
    {id : 5,name : 'Sam',mail : 'sam_funky@yahoo.in',school : 'School 1'},
    {id : 6,name : 'Emily',mail : 'emilygrace@yahoo.in',school : 'TEST K'},
    {id : 7,name : 'Harish',mail : 'harish4@gmail.com',school : 'School 1'}
  ];

  return (
    <div className='p-4'>
       {/* Conditionally render the Balance and TopUp section */}
       {!isPopup && (
        <div className="grid grid-cols-12 justify-between font-bold mb-4 text-lg">
          <p className="col-span-8 bg-slate-100 p-5 rounded-l-md">Balance: 364.01</p>
          <button
            className="col-span-4 bg-blue-600 text-white p-5 rounded-[0rem_0.375rem_0.375rem_0rem]"
            onClick={handleClick1}>
            TopUp
          </button>
        </div>
      )}

     {/* Grid display for students */}
     <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
      {students.map((student) => (
        <div
          key={student.id} 
          className="grid grid-cols-12 gap-5 my-2 p-6 relative bg-gray-100 rounded-lg cursor-pointer">
          <div className="md:hidden col-span-3 flex items-end justify-center bg-neutral-300 rounded-md " onClick={handleClick2}>
            <img src={profile} alt="Profile" />
          </div>

          <div className="col-span-9 flex flex-col p-1" onClick={handleClick2}>
            <span className="font-bold text-lg">{student.name}</span>
            <span className="font-display text-sm text-neutral-500 h-6">{student.mail}</span>
            <span className="text-blue-500 text-xs font-semibold">{student.school}</span>
          </div>

          <button
            className="absolute right-3 top-4 text-md bg-transparent hover:border-transparent "
            onClick={handleClick}>
            <img src={edit} alt="Edit"/>
          </button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Students;