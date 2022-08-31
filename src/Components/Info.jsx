import React from 'react'
import headshot from '/public/Images/headshot.jpg'
import About from './About'
import Interests from './Interests'

function Info() {
  return (
    
    <div>
      <div className='info'>
        <img src={headshot} className = 'headshot'/>  
        <h1 className='title'>James Bundy</h1>
        <h3 className='job'>Full Stack Devoloper</h3>
        <h4 className='contact'>jameshbundy@gmail.com</h4>
        
        <button className='button'> Email me!</button>
        <About/>
        <Interests/>
        </div>
    </div>
  )
}

export default Info