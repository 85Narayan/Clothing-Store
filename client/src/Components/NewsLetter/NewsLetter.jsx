import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div>
        <input type="email" placeholder='Your email id' id='newsLetter'/>
        <button onClick={()=>{
          alert("You have subscribed for our Newsletter");
        
      }}>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
