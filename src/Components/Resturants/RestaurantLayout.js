import React from 'react'
import RestaurantsNavbar from './RestaurantsNavbar';
import { Outlet} from 'react-router-dom'
import Offers from './offers';


export default function RestaurantLayout() {

    return <>
  <RestaurantsNavbar />
  <div className='d-flex '>
    <Outlet></Outlet>
    <Offers></Offers>
    </div>
   </>
}