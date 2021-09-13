
import React from 'react'
import Cards from './Cards';
import Tdata from './Tdata';
import Carousel from './Carousel'
const nCard = (e) =>{

  return (
    <Cards
         id = {e.id}
        cardPoster = {e.cardPoster}
        title = {e.title}
        date = { e.date }
        instImg = {e.instImg}
        instName = {e.instName}
        insDesc = {e.insDesc}
        img = {e.img}
        Edesc = {e.Edesc}
        Registration = {e.Registration}
         hash1={e.hash1}
        hash2={e.hash2}
        Elink = {e.Elink}
        
         />
  )

}

const Tech = () => {
    return (
      <>
     
      <Carousel/>
        <div className=" text-center p-10">
        <h1 className="text-6xl text-gray-900 ">Technical Events</h1>
        <p className="text-gray-500 font-sans ">With great power comes a great responsblity</p>
      </div>
      <div
       className="
       grid grid-cols-1  
       lg:gap-3 
       lg:grid-cols-3
      justify-items-center">
          {Tdata.map(nCard)} 
      
      </div>
      
      

        </>
    )
}

export default Tech;
