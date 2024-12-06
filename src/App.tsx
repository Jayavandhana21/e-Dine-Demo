import { Suspense, lazy } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import AppHeaderHome from './pages/AppHeaderHome';
import Login from './pages/login';
import Students from './pages/Students';


// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Notification = lazy(() => import('./pages/Notification'));
const Allergies = lazy(() => import('./pages/Allergies'));
const Topup = lazy(() => import('./pages/Topup'));
const TopupWallet = lazy(() => import('./pages/TopupWallet'));
const OrderScreenv1 = lazy(() => import('./pages/OrderScreenv1'));
const Tablev1 = lazy(() => import('./pages/Tablev1'));



function App() {
  return (
    <Router>
      <HeaderWrapper />  {/* Place the HeaderWrapper inside Router to ensure proper context */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/notification" element={<Notification />} />
          <Route path='/students' element={<Students />} />
          <Route path='/allergies' element={<Allergies />} />
          <Route path='/topup' element={<Topup />} />
          <Route path='/topupwallet' element={<TopupWallet />} />
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