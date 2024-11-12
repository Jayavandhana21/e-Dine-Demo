import { useNavigate } from 'react-router-dom';


const Home = () => {

const navigate = useNavigate ()
const handleClick = () => {
  navigate('/students')
}

  const navigate1 = useNavigate ()
  const handleClick1 = () => {
    navigate1('/orderscreen')  

}

  return (
    <div className="text-center grid ">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p>Welcome to the home page!</p>
      <button className="mt-12 border hover: border-black" onClick={handleClick}>Click here for Students list</button>
      <button className='mt-6 border hover: border-black' onClick={handleClick1}>Order Screen</button>
      </div>
  );
};

export default Home;
