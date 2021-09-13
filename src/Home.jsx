import React from 'react'
import HeroSection from './HeroSection';
 import HomeBody from './HomeBody';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
           <HeroSection/>

           <HomeBody/>
        </div>
    )
}

export default Home
