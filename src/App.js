import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import NotFound from './Components/NotFound/NotFound';
<<<<<<< HEAD
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Restaurants from './Components/Resturants/Resturants';
=======
import SignUp from './Components/SignUp/SignUp';
import Restaurants from './Components/Restaurants/Restaurants';
>>>>>>> 463d078cb651af21a94a7e0518887d58565c9bbd
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
<<<<<<< HEAD
import Shawarma from './Components/Resturants/shawarma';
import Fried from './Components/Resturants/fried';
import Fastfood from './Components/Resturants/fastfood';
// import Seafood from './Components/Resturants/seafood';
import Orientalfood from './Components/Resturants/orientalfood';
import Seafood from './Components/Resturants/seafood';
import RestaurantLayout from './Components/Resturants/Resturants';
import Pizza from './Components/Resturants/pizza';
import ResurantLayout from './Components/Resturants/Resturants';
// const restaurantsRoutes = [
//   { path: '', element: <Restaurants /> },
//   { path: 'seafood', element: <Seafood /> },
//   { path: 'fastfood', element: <Fastfood /> },
//   { path: 'fried', element: <Fried /> },
//   { path: 'shawarma', element: <Shawarma /> },
//   { path: 'orientalfood', element: <Orientalfood /> },
// ];
=======
import SignIn from './Components/SignIn/SignIn';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
>>>>>>> 463d078cb651af21a94a7e0518887d58565c9bbd


function App() {
  let routers = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
<<<<<<< HEAD
        { path: 'about', element: <About /> },
        { path: 'stores', element: <Stores /> },
        { path: 'markets', element: <Markets /> },
        { path: 'hospitals', element: <Hospitals /> },
        { path: 'education', element: <Education /> },
        { path: 'cinema', element: <Cinema /> },
        { path: 'payment', element: <MaintenancePayment /> },
        {
          path: "resturants",
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
// { path: "resturants/*", element: <ResurantLayout />}, // Update this line
        { path: 'shopping', element: <Shopping /> },
        { path: 'fashion', element: <Fashion /> },
        { path: 'health', element: <Health /> },
        { path: 'sports', element: <Sports /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: 'homeServices', element: <HomeServices /> },
        { path: 'transportation', element: <Transportation /> },
        { path: 'contactus', element: <ContactUs /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);
=======
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
        { path: "signin", element: < SignIn /> },
        { path: "signup", element: <SignUp /> },
        { path: "*", element: <NotFound /> }]
    }
  ])

>>>>>>> 463d078cb651af21a94a7e0518887d58565c9bbd

  return (
    <>
      <Data>
        <RouterProvider router={routers}></RouterProvider>
      </Data>
    </>
  );
}

export default App;