import React from 'react'
import headshot from '/public/Images/headshot.jpg'

function About() {
  return (
    <div>
        <img src={headshot} className = 'headshot'/>
        <h1>James Bundy</h1>
    </div>
  )
}

export default About