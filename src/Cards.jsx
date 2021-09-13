import React from 'react';
import './Cards.css';

import ContentModal from './ContentModal';


const Cards = ({

   id,
   key,
        cardPoster,
        title,
        date,
        instImg,
        instName,
        insDesc,
        img,
        Edesc,
        Registration,
         hash1,
        hash2,
        Elink

}) => {
  return (
    <ContentModal 
        id={id} 
        key={id}
        cardPoster = {cardPoster}
        title = {title}
        date = {date }
        instImg = {instImg}
        instName = {instName}
        insDesc = {insDesc}
        img = {img}
        Edesc = {Edesc}
        Registration= {Registration}
        Elink = {Elink}
        >
     
       
       <div className="py-10">
       <div className="rounded overflow-hidden shadow-lg max-w-sm text-center">
       <img src={cardPoster} alt="" className="w-full h-96"/>
       <div className="px=6 py-4">

       <div className="font-bold text-xl mb-2 font-sans " >{title}</div>
       <p className="text-gray-500 font-thin ">{date}</p>
         </div>
         <div className="grid grid-flow-col gap-5 pb-2 px-6">
         <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">{hash1}</span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">{hash2}</span>
           <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">{Registration}</span>

         </div>
    
        </div>
        </div>
        
     
    
    </ContentModal>


    
  );
}

export default Cards;