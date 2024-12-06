import { TbMailFilled } from 'react-icons/tb';
import picweb from '../assests1/login page.svg';
import { TiLockClosed } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/students');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen"> {/* Flex container with column for mobile and row for medium and above */}
      
      {/* Left side image */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-4">
        <img 
          src={picweb} 
          className="w-full h-full object-contain pt-4 md:h-auto md:pt-0" 
          alt="Login Illustration"/>
      </div>

      {/* Right side form */}
      <section className="w-full md:w-1/2 px-4 py-8 flex flex-col justify-center">
        <div className='md:bg-slate-200 md:p-10'>
          <div className="mb-4">
            <h3 className="mb-1 font-bold text-lg">Welcome back!</h3>
            <p>Login to your account</p>
          </div>
          
          {/* Username / Email Input */}
          <div className="my-4">
            <label htmlFor="username" className="block text-gray-700 mb-1">
              User name / Mail Id
            </label>
            <div className="flex items-center border rounded-lg bg-white">
              <TbMailFilled className="text-xl ml-2 lg:text-2xl" />
              <input
                type="text"
                id="username"
                placeholder="Enter your username or email"
                className="flex-1 p-2 outline-none" />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border rounded-lg overflow-hidden bg-white">
              <TiLockClosed className="text-xl ml-2 lg:text-2xl" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="flex-1 p-2 outline-none" />
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
          <div className="mb-4">
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={handleClick}>
              Continue
            </button>
          </div>

          {/* Sign Up Link */}
          <div>
            <p className="text-sm text-center text-gray-500 mt-4 lg:px-20">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
