import { TbMailFilled } from "react-icons/tb";
import { TiLockClosed } from "react-icons/ti";
import pic from '../assests1/login sm.svg'
import { useNavigate } from 'react-router-dom';


const WelcomePage = () => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/students')
  };

  return (
    <div>

      {/* picture */}
      <div>
        <img src={pic} className="min-w-full"/>
      </div>

    {/* Username / Email Input */}
      <div className="my-4 px-4">
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
      <div className="mb-4 px-4">
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
      <div className="flex px-4 items-center justify-between mb-4">
        <label className="flex items-center text-gray-700">
          <input type="checkbox" className="w-4 h-4 text-blue-500 mr-2" />
          Remember me
        </label>
        <a href="#" className="text-sm text-gray-500 hover:underline">
          Forgot password?
        </a>
      </div> 

    {/* Login Button */}
    <div className="px-4">
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={handleClick}>
        Continue
      </button>
    </div>

    {/* Sign Up Link */}
    <div className="px-4">
      <p className="text-sm text-center text-gray-500 mt-4">Don't have an account?{" "}
        <a href="#" className="text-blue-500 hover:underline" >
          Sign up
        </a>
      </p>
      </div>
    </div>



    // <div className="page-container relative h-full flex flex-auto flex-col">
    //   <div className="grid lg:grid-cols-2">
    //     <div
    //       className="bg-no-repeat bg-cover pt-20 px-16 flex-col justify-between hidden lg:flex"
    //     >
    //       <div>
    //         <div className="mb-6 flex items-center gap-4">
    //           <img src={picweb} alt="auth login image" />
    //         </div>
    //       </div>

    //     </div>
    //     <div className="col-span-1 flex flex-col justify-center items-center bg-white dark:bg-gray-800">
    //       <div className="xl:min-w-[450px] px-8">
    //         <div className="mb-8">
    //           <h3 className="mb-1">Welcome back!</h3>
    //           <p>Please enter your credentials to sign in!</p>
    //         </div>
    //         <div>
    //           {/* Username / Email Input */}
    //           <div className="my-4 px-4">
    //             <label htmlFor="username" className="block text-gray-700 mb-1">
    //               User name / Mail Id
    //             </label>
    //             <div className="flex items-center border rounded-lg overflow-hidden">
    //               <TbMailFilled className="text-xl ml-2" />
    //               <input
    //                 type="text"
    //                 id="username"
    //                 placeholder="Enter your username or email"
    //                 className="flex-1 p-2 outline-none" />
    //             </div>
    //           </div>

    //           {/* Password Input */}
    //           <div className="mb-4 px-4">
    //             <label htmlFor="password" className="block text-gray-700 mb-1">
    //               Password
    //             </label>
    //             <div className="flex items-center border rounded-lg overflow-hidden">
    //               <TiLockClosed className="text-xl ml-2" />
    //               <input
    //                 type="password"
    //                 id="password"
    //                 placeholder="Enter your password"
    //                 className="flex-1 p-2 outline-none" />
    //             </div>
    //           </div>

    //           {/* Remember Me & Forgot Password */}
    //           <div className="flex px-4 items-center justify-between mb-4">
    //             <label className="flex items-center text-gray-700">
    //               <input type="checkbox" className="w-4 h-4 text-blue-500 mr-2" />
    //               Remember me
    //             </label>
    //             <a href="#" className="text-sm text-gray-500 hover:underline">
    //               Forgot password?
    //             </a>
    //           </div>

    //           {/* Login Button */}
    //           <div className="px-4">
    //             <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={handleClick}>
    //               Continue
    //             </button>
    //           </div>

    //           {/* Sign Up Link */}
    //           <div className="px-4">
    //             <p className="text-sm text-center text-gray-500 mt-4">Don't have an account?{" "}
    //               <a href="#" className="text-blue-500 hover:underline" >
    //                 Sign up
    //               </a>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
};

export default WelcomePage;

