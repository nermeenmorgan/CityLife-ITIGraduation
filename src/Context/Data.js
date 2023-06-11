import React, { createContext } from 'react';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { useEffect } from 'react';

export const DataContext = createContext();

export default function Data({children}) {
                                                 // Managing User Data
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
    

const ExchangedData={FastFoodRes,userData, saveUserData,AllRestaurants,ShawarmaRes,SeaFoodRes, OrientalFoodRes, PizzaRes,  FriedRes }
    return (
        <DataContext.Provider value={ExchangedData}>
            {children}
        </DataContext.Provider>
    );
    
}