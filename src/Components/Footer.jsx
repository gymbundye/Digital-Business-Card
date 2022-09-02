import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


function Footer() {
  return (
    <div className='footer'>
        <FaLinkedin/>
        <FaGithub/>
        <FaFacebook/>
        <FaInstagram/>
    </div>
  )
}

export default Footer