import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Resturants from './Components/Resturants/Resturants';
import './App.css';

function App() {
  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "resturants", element: <Resturants /> },
        { path: "contactus", element: <ContactUs /> },
        { path: "login", element: < Login /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <NotFound /> }]
    }
  ])


  return (<>
    <RouterProvider router={routers}></RouterProvider>
  </>);
}

export default App;
