import React from 'react'
import FoodNavbar from "./FoodNavbar"
import FoodItems from './FoodItems'
import Cart from './Cart'

const food = () => {


    return (
        <>
      <FoodNavbar />
      <FoodItems />
      <Cart />  
        </>
    )
}

export default food