import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
export const DataContext = createContext();

export default function Data(props) {

  // Images About Slider
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

    // Cinema movies Data Management
    const [movies,setMovies] = useState([])

    useEffect(()=>{
       axios.get('http://localhost:3005/cinema')
       .then((res)=>{
        setMovies(res.data)
       })
    },[])

    // Sign in and sign up token management
    const [userData, setUserData] = useState(null);
    
    function saveUserData() {
        let encodedToken = localStorage.getItem("userToken");
        let decodedToken = jwtDecode(encodedToken);
        setUserData(decodedToken);
    }
    useEffect(()=>{
         if (localStorage.length !== 0){
           saveUserData()
         }
    },[])
    
    function DeleteUserData() {
        localStorage.removeItem("userToken")
        setUserData(null)
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
      axios.get("http://localhost:3005/restaurant")
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
    

//Education Data Management
const [AllEducation, setAllEducation] = useState([]);
const [Schools, setSchools] = useState([]);
const [Kindergarten, setKindergarten] = useState([]);
useEffect(() => {
    axios.get("http://localhost:3005/education")
        .then(res => {
        setSchools(res.data.schools);
        setKindergarten(res.data.kindergarten);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, []);

useEffect(() => {
setAllEducation([...Schools, ...Kindergarten]);
}, [Schools, Kindergarten]);




const ExchangedData={
  userData,
  DeleteUserData,
  saveUserData,
  movies,
  ImgsArr,
  FastFoodRes,
  AllRestaurants,
  ShawarmaRes,
  SeaFoodRes,
  OrientalFoodRes,
  PizzaRes,
  FriedRes,
  Schools,
  Kindergarten,
  AllEducation,
}
   
    return (
        <DataContext.Provider value={ExchangedData}>
            {props.children}
        </DataContext.Provider>
    );
}

