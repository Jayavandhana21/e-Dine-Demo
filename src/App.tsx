import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import AppHeaderHome from './pages/AppHeaderHome';


// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const OrderScreenv1 = lazy(() => import('./pages/OrderScreenv1'));
const Students = lazy(() => import('./pages/Students'))
const Login = lazy(() => import('./pages/Login/login'))


function App() {
  return (
    <Router>
      <HeaderWrapper />  {/* Place the HeaderWrapper inside Router to ensure proper context */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/students' element={<Students />} />
          <Route path='/orderscreenv1' element={<OrderScreenv1 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

const HeaderWrapper = () => {
  const location = useLocation(); // Now within the Router context
  // const isNotificationPage = location.pathname === '/notification';
  const isloginScreen = location.pathname === '/login';
  const hideCalendar = location.pathname === '/students' ? true : false;

  return (
    <div className={`min-w-full`}>
      {!isloginScreen && <AppHeaderHome hideCalendar={hideCalendar}/>}
    </div>
  );
};

export default App;