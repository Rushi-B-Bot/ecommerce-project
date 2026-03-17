import React from 'react'
import HomePage from '../../pages/HomePage/HomePage'
import Usestate from '../../practice/Usestate'
import Props from '../../practice/Props'
import UseEffect from '../../practice/UseEffectt'
import ProductCardAPI from '../../services/ProductCardAPI/ProductCardAPI'

function Home() {
  return (
    <> 
     <HomePage/>
     <br /> <br />
     <Usestate/>
     <Props name="Sony TV" price="10000000" rating="5 star"/>
     {/* <UseEffect/> */}
     <br /> <br />
     <ProductCardAPI/>
    </>
 
  )
}

export default Home