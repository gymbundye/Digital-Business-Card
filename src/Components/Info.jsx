import React from 'react'
import headshot from '../Images/headshot.jpg'
import About from './About'
import Interests from './Interests'
import { FaEnvelope } from 'react-icons/fa'

function Info() {
  return (
    
    <div>
      <div className='info'>
        <img src={headshot} className = 'headshot'/>  
        <h1 className='title'>James Bundy</h1>
        <h3 className='job'>Software Engineer/Web Developer</h3>
        <h4 className='contact'>jameshbundy@gmail.com</h4>
        
        <center><button className='button'> <FaEnvelope className='mail'/>  </button></center>
        <About/>
        <Interests/>
        </div>
    </div>
  )
}

export default Info