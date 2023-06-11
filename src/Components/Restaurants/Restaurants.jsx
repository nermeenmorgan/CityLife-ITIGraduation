

import React from 'react'
// import RestaurantNav from '../RestaurantNav/RestaurantNav'
import { Route, Routes } from 'react-router-dom'
// import Fried from '../Resturants/fried/Fried'
// import FastFood from '../Resturants/fastFood/FastFood'
// import Oriental from '../Resturants/oriental/Oriental'
// import Pizza from '../Resturants/pizza/Pizza'
// import SeaFood from '../Resturants/seaFood/SeaFood'
// import Shawarma from '../Resturants/shawarma/Shawarma'


// import Restaurants from '../Resturants/Restaurants'
import Fried from './fried'
import Fastfood from './fastfood'
import Orientalfood from './orientalfood'
import Seafood from './seafood'
import Pizza from './pizza'
import Shawarma from './shawarma'
import RestaurantsNavbar from './RestaurantsNavbar'
import Restaurants from './allRestaurants'
export default function RestaurantLayout() {

    return <>
        <RestaurantsNavbar></RestaurantsNavbar>
        <Routes>
            <Route index="true" element={<Restaurants></Restaurants>} ></Route>
            <Route path='/fried' element={<Fried></Fried>}></Route>
            <Route path='/fastfood' element={<Fastfood></Fastfood>}></Route>
            <Route path='/orientalfood' element={<Orientalfood></Orientalfood>}></Route>
            <Route path='/pizza' element={<Pizza></Pizza>}></Route>
            <Route path='/seafood' element={<Seafood></Seafood>}></Route>
            <Route path='/shawarma' element={<Shawarma></Shawarma>}></Route>
        </Routes>
    </>
}

