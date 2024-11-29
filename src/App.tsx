import { Suspense, lazy } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import AppHeader from './pages/AppHeader';
import AppHeaderHome from './pages/AppHeaderHome';
import NewComponent from './pages/NewComponent';
import WelcomePage from "./pages/WelcomePage"
import OrderScreenv2 from './pages/OrderScreenv2';
import Coupon from './components/dialog/coupon';


// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Notification = lazy(() => import('./pages/Notification'));
const Students = lazy(() => import('./pages/Students'));
const Allergies = lazy(() => import ('./pages/Allergies'));
const Topup = lazy(() => import ('./pages/Topup'));
const TopupWallet =lazy(() => import ('./pages/TopupWallet'));
const OrderScreenv1 =lazy(() => import ('./pages/OrderScreenv1'));
const Tablev1 =lazy(()=> import ('./pages/Tablev1'));



function App() {
  return (
    <Router>
    <HeaderWrapper />  {/* Place the HeaderWrapper inside Router to ensure proper context */}
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/login' element={<WelcomePage/>}/>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
        <Route path='/students' element={<Students/> } />
        <Route path='/allergies' element ={<Allergies/> } />
        <Route path='/topup' element ={<Topup/>} />
        <Route path='/topupwallet' element={<TopupWallet/> } />
        <Route path='/orderscreenv1' element={<OrderScreenv1/>}/>
        <Route path='/orderscreenv2' element={<OrderScreenv2/>}/>
        <Route path='/calender' element={<NewComponent/>}/>
        <Route path='/coupon' element={<Coupon/>}/>
        <Route path='/tablev1' element={<Tablev1/>}/>
      </Routes>
    </Suspense>
  </Router>
  );
}

const HeaderWrapper = () => {
  const location = useLocation(); // Now within the Router context

  // Define all the routes where the header should be hidden
  const isNotificationPage = location.pathname === '/notification';
  const isOrderPagev1 = location.pathname === '/orderscreenv1';
  const isOrderPagev2 = location.pathname === '/orderscreenv2';
  const isWelcomePage = location.pathname === '/login';
  const isNewcomponent =location.pathname === '/calender';
  const isTablev1 =location.pathname === '/tablev1';
  const isCoupon =location.pathname === '/coupon' // Add new page condition

   // Combine conditions to decide when to hide the header
   const shouldHideHeader = isNotificationPage || isWelcomePage || isNewcomponent ||isTablev1 || isCoupon;

   return (
     <div className={`container mx-auto ${shouldHideHeader ? '' : 'p-4'}`}>
       {/* Conditionally render headers based on the current route */}
       {(isOrderPagev1 || isOrderPagev2 ) ? (
         <AppHeader />
       ) : !shouldHideHeader ? (
         <AppHeaderHome />
       ) : null}
     </div>
   );
 };

export default App;