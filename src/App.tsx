import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import AppHeader from './pages/AppHeader';
import AppHeaderHome from './pages/AppHeaderHome';
import NewComponent from './pages/NewComponent';
import WelcomePage from "./pages/WelcomePage"


// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Notification = lazy(() => import('./pages/Notification'));
const Students = lazy(() => import('./pages/Students'));
const Allergies = lazy(() => import ('./pages/Allergies'));
const Topup = lazy(() => import ('./pages/Topup'));
const TopupWallet =lazy(() => import ('./pages/TopupWallet'));
const OrderScreenv1 =lazy(() => import ('./pages/OrderScreenv1'));
// const OrderScreen = lazy(() => import ('./pages/OrderScreen'));


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
        <Route path='/orderscreen' element={<OrderScreenv1/>}/>
        <Route path='/login' element={<WelcomePage/>}/>
        {/* <Route path='/orderscreen' element={<OrderScreen/> }/> */}
        <Route path='/calender' element={<NewComponent/>}/>
      </Routes>
    </Suspense>
  </Router>
  );
}

const HeaderWrapper = () => {
  const location = useLocation(); // Now within the Router context

  // Define all the routes where the header should be hidden
  const isNotificationPage = location.pathname === '/notification';
  const isOrderPage = location.pathname === '/orderscreen';
  const isWelcomePage = location.pathname === '/login';
  const isNewcomponent =location.pathname === '/calender' // Add new page condition

   // Combine conditions to decide when to hide the header
   const shouldHideHeader = isNotificationPage || isWelcomePage || isNewcomponent;

   return (
     <div className={`container mx-auto ${shouldHideHeader ? '' : 'p-4'}`}>
       {/* Conditionally render headers based on the current route */}
       {isOrderPage ? (
         <AppHeader />
       ) : !shouldHideHeader ? (
         <AppHeaderHome />
       ) : null}
     </div>
   );
 };

export default App;