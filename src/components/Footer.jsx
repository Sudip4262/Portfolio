import React from 'react'
import {Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='WholeFooter' >
      <div style={{display:'flex', flex:1, flexDirection:'column',}}>
        <div style={{display:'flex', flex:1, marginLeft:20}} >
          <Link className='SocialLinks' to='https://www.linkedin.com/in/sudip4262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank' ><FaLinkedin/></Link>
          <a className='SocialLinks' href='https://github.com/Sudip4262' target='_blank'><FaGithubSquare/></a>
          <a className='SocialLinks' href='https://www.instagram.com/_finding_errors?igsh=Ymh1ZzYzN3dtYXBz&utm_source=qr' target='_blank'><FaSquareInstagram /></a>
          <a className='SocialLinks' href='https://www.facebook.com/sudip.paul.75286?mibextid=LQQJ4d' target='_blank'><FaFacebookSquare /></a>
        </div>
        <div style={{display:'flex', flex:2}} >
          <p className='emailLink' onClick={() => window.location = 'mailto:paul.sudip.ind@gmail.com'}><IoMdMail/> paul.sudip.ind@gmail.com</p>
        </div>
      </div>
      <div style={{display:'flex', flex:1,flexDirection:'column'}}>
        <div style={{display:'flex', flex:5, justifyContent:'flex-end', alignItems:'flex-end'}}>
          <Link to='/'><img src='photos/NameLogoWhite.png' className='bottomLogo' ></img></Link>
        </div>
        <div style={{display:'flex', flex:1, justifyContent:'flex-end', alignItems:'flex-end'}}>
          <p className='bottomHey'>* Heyy, This website is created using React</p>
        </div>
      </div>
    </div>
  )
}
