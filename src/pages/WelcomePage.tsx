import { TbMailFilled } from "react-icons/tb";
import { TiLockClosed } from "react-icons/ti";
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';


const WelcomePage = () => { 

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/home')
    };
    
  return (
    <div className='p-4'>

    {/* Username / Email Input */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 mb-1">
          User name / Mail Id
        </label>
        <div className="flex items-center border rounded-lg overflow-hidden">
            <TbMailFilled className="text-xl ml-2"/>
          <input
            type="text"
            id="username"
            placeholder="Enter your username or email"
            className="flex-1 p-2 outline-none"/>
        </div>
      </div>

    {/* Password Input */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 mb-1">
          Password
        </label>
        <div className="flex items-center border rounded-lg overflow-hidden">
         <TiLockClosed className="text-xl ml-2"/>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="flex-1 p-2 outline-none"/>
        </div>
      </div>

    {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center text-gray-700">
          <input type="checkbox" className="w-4 h-4 text-blue-500 mr-2" />
          Remember me
        </label>
        <a href="#" className="text-sm text-gray-500 hover:underline">
          Forgot password?
        </a>
      </div> 

    {/* Login Button */}
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={handleClick}>
        Continue
      </button>

    {/* Sign Up Link */}
      <p className="text-sm text-center text-gray-500 mt-4">Don't have an account?{" "}
        <a href="#" className="text-blue-500 hover:underline" >
          Sign up
        </a>
      </p>
        
        
    </div>
  )
};

export default WelcomePage;

