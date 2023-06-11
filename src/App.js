import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login'; // renamed from SignUp
import Restaurants from './Components/Restaurants/Restaurants';
import Data from './Context/Data';
import Markets from './Components/Markets/Markets';
import Banks from './Components/Banks/Banks';
import Hospitals from './Components/Hospitals/Hospitals';
import MaintenancePayment from './Components/MaintenancePayment/MaintenancePayment';
import Education from './Components/Education/Education';
import Cinema from './Components/Cinema/Cinema';
import Shopping from './Components/Shopping/Shopping';
import Fashion from './Components/Fashion/Fashion';
import Health from './Components/Health/Health';
import Transportation from './Components/Transportation/Transportation';
import Maintenance from './Components/Maintenance/Maintenance';
import HomeServices from './Components/HomeServices/HomeServices';
import Sports from './Components/Sports/Sports';
import './App.css';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn'; // added
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

function App() {
  let routers = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "banks", element: <Banks /> },
        { path: "markets", element: <Markets /> },
        { path: "hospitals", element: <Hospitals /> },
        { path: "education", element: <Education /> },
        { path: "cinema", element: <Cinema /> },
        { path: "payment", element: <ProtectedRoute><MaintenancePayment /></ProtectedRoute>},
        { path: "restaurants", element: <Restaurants /> },
        { path: "shopping", element: <Shopping /> },
        { path: "fashion", element: <Fashion /> },
        { path: "health", element: <Health /> },
        { path: "sports", element: <Sports /> },
        { path: "maintenance", element: <Maintenance /> },
        { path: "homeServices", element: <HomeServices /> },
        { path: "transportation", element: <Transportation /> },
        { path: "contactus", element: <ContactUs /> },
        { path: "signin", element: <SignIn /> },
        { path: "signup", element: <SignUp /> }, // renamed from Login
        { path: "*", element: <NotFound /> }]
    }
  ])

  return (
    <>
      <Data>
        <RouterProvider router={routers}></RouterProvider>
      </Data>
    </>
  );
}

export default App;