import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Header from './components/Common/Header';



const Home = lazy(() => import('./pages/Home/Home'));
const OrderScreenv1 = lazy(() => import('./pages/menu/Menu'));
const Students = lazy(() => import('./pages/Students/Students'))
const Login = lazy(() => import('./pages/Login/login'))


function App() {
  return (
    <Router>
      <HeaderWrapper /> 
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/students' element={<Students />} />
          <Route path='/menu' element={<OrderScreenv1 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

const HeaderWrapper = () => {
  const location = useLocation(); 
  const isloginScreen = location.pathname === '/';
  const hideCalendar = location.pathname === '/students' ? true : false;

  return (
    <div className={`min-w-full`}>
      {!isloginScreen && <Header hideCalendar={hideCalendar}/>}
    </div>
  );
};

export default App;
