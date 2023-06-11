import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
<<<<<<< HEAD
import { useEffect } from 'react';
=======
>>>>>>> 463d078cb651af21a94a7e0518887d58565c9bbd


<<<<<<< HEAD
export default function Data({children}) {
                                                 // Managing User Data
    const [userData, setUserData] = useState(null);
=======
export const DataContext = createContext();
export default function Data(props) {
    const ImgsArr = [
        "https://www.talaatmoustafa.com/Upload/75rehab%201.jpg",
        "https://www.talaatmoustafa.com/Upload/8rehab%202.jpg",
        "https://www.talaatmoustafa.com/Upload/72rehab%203.jpg",
        "https://www.talaatmoustafa.com/Upload/27rehab%208.jpg",
        "https://www.talaatmoustafa.com/Upload/4rehab%204.jpg",
        "https://www.talaatmoustafa.com/Upload/21rehab%205.jpg",
        "https://www.talaatmoustafa.com/Upload/16rehab%206.jpg",
        "https://www.talaatmoustafa.com/Upload/10rehab%209.jpg",
        "https://www.talaatmoustafa.com/Upload/80rehab%2010.jpg",
        "https://www.talaatmoustafa.com/Upload/14rehab%2011.jpg",
        "https://www.talaatmoustafa.com/Upload/23rehab%2015.jpg",
        "https://www.talaatmoustafa.com/Upload/77rehab%2014.jpg",
        "https://www.talaatmoustafa.com/Upload/54rehab%2013.jpg",
        "https://www.talaatmoustafa.com/Upload/35rehab%2019.jpg",
        "https://www.talaatmoustafa.com/Upload/15rehab%2017.jpg",
        "https://www.talaatmoustafa.com/Upload/3rehab%2020.jpg",
        "https://www.talaatmoustafa.com/Upload/85rehab%2018.jpg",
        "https://www.talaatmoustafa.com/Upload/61rehab%2021.jpg",
        "https://www.talaatmoustafa.com/Upload/41rehab%2023.jpg",
        "https://www.talaatmoustafa.com/Upload/0rehab%2022.jpg"
    ];

    const [movies,setMovies] = useState([])
>>>>>>> 463d078cb651af21a94a7e0518887d58565c9bbd

    useEffect(()=>{
       axios.get('http://localhost:3005/cinema')
       .then((res)=>{
        setMovies(res.data)
       })
    },[])
    const [userData, setUserData] = useState(null);
    function saveUserData() {
        let encodedToken = localStorage.getItem("userToken");
        let decodedToken = jwtDecode(encodedToken);
        setUserData(decodedToken);
    }
                                                // Restaurant Data Management
    const[AllRestaurants,setAllRestaurants]= useState([]);
    const[ShawarmaRes, setShawarmaRes] = useState ([]);
    const[SeaFoodRes, setSeaFoodRes] = useState ([]);
    const[OrientalFoodRes, setOrientalFoodRes] = useState ([]);
    const[PizzaRes, setPizzaRes] = useState ([]);
    const[FriedRes, setFriedRes] = useState ([]);
    const[FastFoodRes, setFastFoodRes] = useState ([]);
    useEffect(() => {
      axios.get("http://localhost:3000/restaurant")
        .then(res => {
          setShawarmaRes(res.data.shawarma);
          setSeaFoodRes(res.data.seafood);
          setOrientalFoodRes(res.data.orientalfood);
          setPizzaRes(res.data.pizza);
          setFriedRes(res.data.fried);
          setFastFoodRes(res.data.fastfood)
        })
        .catch(error => {
          console.error('Error fetching restaurants:', error);
        });
    }, []);
    
    useEffect(() => {
      setAllRestaurants([...ShawarmaRes, ...SeaFoodRes, ...OrientalFoodRes, ...PizzaRes, ...FriedRes]);
    }, [ShawarmaRes, SeaFoodRes, OrientalFoodRes, PizzaRes, FriedRes]);
    

<<<<<<< HEAD
const ExchangedData={FastFoodRes,userData, saveUserData,AllRestaurants,ShawarmaRes,SeaFoodRes, OrientalFoodRes, PizzaRes,  FriedRes }
    return (
        <DataContext.Provider value={ExchangedData}>
            {children}
=======
    function DeleteUserData() {
        localStorage.removeItem("userToken")
        window.location.reload();
    }

    return (
        <DataContext.Provider value={{ userData, saveUserData,movies,DeleteUserData,ImgsArr}}>
            {props.children}
>>>>>>> 463d078cb651af21a94a7e0518887d58565c9bbd
        </DataContext.Provider>
    );
    
}