import React from 'react'
import img1 from './images/code.svg'
import img2 from './images/music2.svg'
import img3 from './images/social.svg'
import img4 from './images/Talks.svg'
import { Link } from 'react-router-dom';

const HomeBody = () => {
  return (
    <div>
       <div className="grid place-items-center bg-gray-50"> 

       <div className="grid place-items-center lg:w-10/12 "> 

       {/* Technical */}

        <div className="">
       <div className="
      
       text-center
        lg:text-left
         lg:flex space-x-4
         border-y
         " >
       <div className=" p-10 md:p-20">
        <img className="h-52 lg:h-5/6" src={img1} alt="..."/> 
        </div>
        <div className=" grid place-items-center p-10 ">
        <Link className="" to='/tech'>
  
          <div className="w-full"> 
        
         <h1 className="text-gray-800 text-7xl "> Technical Events</h1>
         </div>
         </Link>
         <div className=" w-5/6 lg:w-full px-5 py-5">
         
         <p className=" my-5 text-gray-400 font-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has View More....</p>
         
           <div className=" h-52 py-10 flex justify-center">
           <img className="rounded-full mx-5 " src="https://media-exp1.licdn.com/dms/image/C4D22AQHEayQLmKCHQg/feedshare-shrink_800/0/1625913142239?e=1634169600&v=beta&t=lWtYdU2ILAcQXxmuce6nUg61hWWSfClCpA-Pjl6JtdA" alt=" "/>
           <img  className="rounded-full mx-5 " src="https://picsum.photos/100/100?random=2" alt=" "/>
            <img  className="rounded-full mx-5 " src="https://picsum.photos/100/100?random=3" alt=" "/>
           </div>
          
         </div>
        
        
        </div>
         </div>
         
        
       </div>
        
        {/* Cultural Events */}

         <div className="">
       <div className="
      
       text-center
        lg:text-left
         lg:flex space-x-4
         border-y
         bg-gray-200
         " >
      
        <div className=" grid place-items-center p-10 ">
        <Link className="" to='/tech'>
  
          <div className="w-full"> 
        
         <h1 className="text-gray-800 text-7xl "> Cultural Events</h1>
         </div>
         </Link>
         <div className=" w-5/6 lg:w-full px-5 py-5">
         
         <p className=" my-5 text-gray-400 font-sans text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has View More....</p>
         
           <div className=" h-52 py-10 flex justify-center">
           <img className="rounded-full mx-5 " src="https://picsum.photos/100/100?random=1" alt=" "/>
           <img  className="rounded-full mx-5 " src="https://picsum.photos/100/100?random=2" alt=" "/>
            <img  className="rounded-full mx-5 " src="https://picsum.photos/100/100?random=3" alt=" "/>
           </div>
          
         </div>

          <div className=" p-10 md:p-20">
        <img className="h-52 lg:h-72" src={img2} alt="..."/> 
        </div>
        
        
        </div>
         </div>
         
        
       </div>
        
      
       {/* Social */}
 <div className="">
       <div className="
      
       text-center
        lg:text-left
         lg:flex space-x-4
         border-y
         " >
       <div className=" p-10 md:p-20">
        <img className="h-52 lg:h-5/6" src={img3} alt="..."/> 
        </div>
        <div className=" grid place-items-center p-10 ">
        <Link className="" to='/tech'>
  
          <div className="w-full"> 
        
         <h1 className="text-gray-800 text-7xl "> Social  Events</h1>
         </div>
         </Link>
         <div className=" w-5/6 lg:w-full px-5 py-5">
         
         <p className=" my-5 text-gray-400 font-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has View More....</p>
         
           <div className=" h-52 py-10 flex justify-center">
           <img className="rounded-full mx-5 " src="https://picsum.photos/100/100?random=1" alt=" "/>
           <img  className="rounded-full mx-5 " src="https://picsum.photos/100/100?random=2" alt=" "/>
            <img  className="rounded-full mx-5 " src="https://picsum.photos/100/100?random=3" alt=" "/>
           </div>
          
         </div>
        
        
        </div>
         </div>
         
        
       </div>

        {/* Khoj Talks */}

         <div className="">
       <div className="
      
       text-center
        lg:text-right
         lg:flex space-x-4
         border-y
         bg-gray-100
         " >
         
        
      
        <div className="p-10 inline lg:flex">
        <div className="">
        <Link className="" to='/talks'>
  
          <div className="w-full px-20 "> 
        
         <h1 className="text-gray-800 text-7xl "> Khoj Talks</h1>
         </div>
         </Link>
         <div className="w-full px-20 py-5 ">
         
         <p className=" my-5 text-gray-400 font-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has View More....</p>
         
           <div className=" h-52 py-10 flex justify-center">
           <img className="rounded-full mx-5 " src="https://picsum.photos/100/100?random=1" alt=" "/>
           <img  className="rounded-full mx-5 " src="https://picsum.photos/100/100?random=2" alt=" "/>
            <img  className="rounded-full mx-5 " src="https://picsum.photos/100/100?random=3" alt=" "/>
           </div>
          
         </div>
         </div>
           <div className="">
        <img className="" src={img4} alt="..."/> 
        </div>

        
        
        </div>
         </div>
         
        
       </div>
        
       
       </div>
        </div>
    </div>
  )
}

export default HomeBody
