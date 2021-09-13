import React from 'react'
import video from './videos/Home.mp4';
import {  Buttons } from './Buttons';
import './HeroSection.css';
// import '../../App.css';
function HeroSection() {
    return (
        <div className="hero-container">
            <video src= {video} autoPlay loop muted />
            <h1>KHOJ EVENTS</h1>
            <p>find ur real u</p>
            {/* <p>With great power comes a great responsiblity</p> */}
            <div className="hero-btns">
                <Buttons 
                className="btns" 
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                > 
                TECHNICAL
                </Buttons>
                <Buttons 
                className="btns" 
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                > 
                CULTURAL
                </Buttons>
               
            </div>

        </div>
    )
}

export default HeroSection;
