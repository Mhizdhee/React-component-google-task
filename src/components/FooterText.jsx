import React from 'react'
import Carbon from '../images/carbon.png';

export default function FooterText() {
  return (
    <div>
        <p>
        <img src={Carbon} alt="carbon" style={{height: "15px"}}/> 
        Carbon neutral since 2007
        </p>
    </div>
  )
}
