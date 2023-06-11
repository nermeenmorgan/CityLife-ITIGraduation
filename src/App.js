import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import NotFound from './Components/NotFound/NotFound';
import SignUp from './Components/SignUp/SignUp';
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
import Shawarma from './Components/Restaurants/shawarma';
import Fried from './Components/Restaurants/fried';
import Fastfood from './Components/Restaurants/fastfood';
import Orientalfood from './Components/Restaurants/orientalfood';
import Seafood from './Components/Restaurants/seafood';
import RestaurantLayout from './Components/Restaurants/RestaurantLayout';
import Pizza from './Components/Restaurants/pizza';
import SignIn from './Components/SignIn/SignIn';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Restaurants from './Components/Restaurants/allRestaurants';


function App() {
  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'banks', element: <Banks /> },
        { path: 'markets', element: <Markets /> },
        { path: 'hospitals', element: <Hospitals /> },
        { path: 'education', element: <Education /> },
        { path: 'cinema', element: <Cinema /> },
        { path: 'payment', element: <ProtectedRoute><MaintenancePayment /></ProtectedRoute> },
        {
          path: "restaurants",
          element: <RestaurantLayout />,
          children: [
            { index: true, element: <Restaurants></Restaurants> },
            { path: "fried", element: <Fried></Fried> },
            { path: "fastfood", element: <Fastfood></Fastfood> },
            { path: "oriental", element: <Orientalfood></Orientalfood> },
            { path: "pizza", element: <Pizza></Pizza> },
            { path: "seafood", element: <Seafood></Seafood> },
            { path: "shawarma", element: <Shawarma></Shawarma> },
            { path: "*", element: <NotFound></NotFound> },
          ],
        },
        { path: 'shopping', element: <Shopping /> },
        { path: 'fashion', element: <Fashion /> },
        { path: 'health', element: <Health /> },
        { path: 'sports', element: <Sports /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: 'homeServices', element: <HomeServices /> },
        { path: 'transportation', element: <Transportation /> },
        { path: 'contactus', element: <ContactUs /> },
        { path: 'signin', element: <SignIn /> },
        { path: 'signup', element: <SignUp /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <Data>
        <RouterProvider router={routers}></RouterProvider>
      </Data>
    </>
  );
}

export default App;