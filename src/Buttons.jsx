import React from 'react';
import "./Buttons.css";
import {Link} from 'react-router-dom';

const STYLES = ['btn-primary','btn--outline']

const SIZE = ['btn--medium','btn--large'];

export const Buttons = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize

}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle:STYLES[0];

    const checkButtonSize = SIZE.includes(buttonStyle) 
    ? buttonStyle:SIZE[0]
    
    return(
        <Link to='/tech' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type = {type}
            >
                {children}
            </button>
        </Link>
    )

};