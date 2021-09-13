import React from 'react'
import Cards from './Cards';
import Sdata from './Sdata';
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
        
         />
  )

}
const Social = () => {
    return (
        <>

       <Carousel/> 
     <div className=" text-center p-10">
        <h1 className="text-6xl text-gray-900 ">Social Events</h1>
        <p className="text-gray-500 font-sans ">No one is useless in this world who lightens the burdens of another</p>
      </div>
      <div
       className="
       grid grid-cols-1  
       lg:gap-3 
       lg:grid-cols-3
      justify-items-center">
          {Sdata.map(nCard)} 
      </div>
      
      
      

    

            
        </>
    )
}

export default Social
