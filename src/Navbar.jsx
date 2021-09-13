import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Buttons } from './Buttons';
import './Navbar.css';

const Navbar = () => {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick= () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
          if(window.innerWidth <= 960)
          setButton(false)
          else 
          setButton(true)
    };
    
    const backtoTop=()=>{
        window.scroll(0,0);
    };

   
    window.addEventListener('resize',showButton)

    return (
        <>
        <nav className="navbar">
        <div className="navbar-container ">

        <Link to="/" className="navbar-logo" onClick={backtoTop}>
      KHOJ 
        </Link>
         <div className="menu-icon" onClick={handleClick}>
                 <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           
            <li className="nav-item">
                <Link to="/tech" className='nav-links' onClick={closeMobileMenu}>
                    TECH
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/cultural" className='nav-links' onClick={closeMobileMenu}>
                    CULTURAL
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/social" className='nav-links' onClick={closeMobileMenu}>
                    SOCIAL
                </Link>
            </li>
             <li className="nav-item">
                <Link to="/talks" className='nav-links' onClick={closeMobileMenu}>
                 KHOJ TALKS
                </Link>
            </li>
        </ul>

        </div>

        </nav>
            
        </>
    )
}

export default Navbar
