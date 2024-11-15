import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import AppHeader from './pages/AppHeader';
import AppHeaderHome from './pages/AppHeaderHome';


// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Notification = lazy(() => import('./pages/Notification'));
const Students = lazy(() => import('./pages/Students'));
const Allergies = lazy(() => import ('./pages/Allergies'));
const Topup = lazy(() => import ('./pages/Topup'));
const TopupWallet =lazy(() => import ('./pages/TopupWallet'));
const OrderScreen = lazy(() => import ('./pages/OrderScreen'));


function App() {
  return (
    <Router>
    <HeaderWrapper />  {/* Place the HeaderWrapper inside Router to ensure proper context */}
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
        <Route path='/students' element={<Students/> } />
        <Route path='/allergies' element ={<Allergies/> } />
        <Route path='/topup' element ={<Topup/>} />
        <Route path='/topupwallet' element={<TopupWallet/> } />
        <Route path='/orderscreen' element={<OrderScreen/> }/>
      </Routes>
    </Suspense>
  </Router>
  );
}

const HeaderWrapper = () => {
  const location = useLocation(); // Now within the Router context
  const isNotificationPage = location.pathname === '/notification';
  const isOrderPage = location.pathname === '/orderscreen';

  return (
    <div className={`container mx-auto ${isNotificationPage ? '' : 'p-4'}`}>
      {/* Conditionally render headers based on the current route */}
      {isOrderPage ? (
        <AppHeader />
      ) : !isNotificationPage ? (
        <AppHeaderHome />
      ) : null}
    </div>
  );
} 


export default App;