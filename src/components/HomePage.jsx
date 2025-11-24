import React, { useEffect } from 'react'
import { GrUnderline } from 'react-icons/gr';
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {Link } from "react-router-dom";
import { SiDjango } from "react-icons/si";

export default function HomePage() {
  
  const time = new Date()
  let hour = time.getHours()
  console.log(time)


  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // },[])

  const hello = () => {
    if (hour>=6 && hour<12) {
      return(
        <h1 className='heading' >Good morning, I'm</h1>
      )
    }
    else if (hour>=12 && hour<17) {
      return(
        <h1 className='heading' >Good afternoon, I'm</h1>
      )
    }
    else if (hour>=17 && hour<22) {
      return(
        <h1 className='heading' >Good evening, I'm</h1>
      )
    }
    else if (hour>=22 && hour<25 || hour>=0 && hour<6  ) {
      return(
        <h1 className='heading' >Hello Night Owl, I'm</h1>
      )
    }
  }


  return (
    <div className='HomeWholeContainer'>
      <div className='wholeContainer1' style={{backgroundImage:`url(${process.env.PUBLIC_URL}/photos/background1.jpg)`}}>
        <div className='container1'>
          {hello()}
          <h1 className='heading' style={{marginTop:-40}} >SUDIP PAUL</h1>
          <p className='DownText'>React and ReactNative developer with a bit of </p>
          <p className='DownText'> knowledge in MERN (MongoDB, Express, React, NodeJs)</p>

          <p className='alternateText'>React and ReactNative developer </p>
          <p className='alternateText'>with a bit knowledge in MERN </p>
        </div>
        <div className='container2'>
          <Link to='/Projects' className='sideLink' >
            <p className='NewPage' >PROJECTSssss</p>
          </Link>
          <Link to='/Projects' className='sideLink' >
            <p className='NewPage' >ABOUT ME</p>
          </Link>
        </div>
      </div>

      <div className='wholeContainerphone'>
        <div className='container1'>
          {hello()}
          <h1 className='namePlate' style={{marginTop:-40}} >Sudip Paul</h1>

          <p className='alternateText'>React and ReactNative developer </p>
          <p className='alternateText'>with a bit of knowledge in MERN </p>

          <div className='newButtons' >
            <Link to='/Projects' className='newbuttonsLink'>
              <p className='newButtonText' >Projects</p>
            </Link>
            <Link to='/Projects' className='newbuttonsLink' >
              <p className='newButtonText' >About Me</p>
            </Link>
          </div>
        </div>
      </div>

      <div className='wholeContainer2' id='AboutMe'>
        <p className='PointHeading' >About</p>
        <div className='AboutBox' >
          <p className='AboutDownText'>React and ReactNative developer with a bit of knowledge in MERN (MongoDB, Express, React, NodeJs), getting more knowledge day by day with new projects</p>
        </div>
      </div>

      <div className='wholeContainer2' >
        <p className='PointHeading' >Skills</p>
        <div className='skillsFlex' >
          <div className='skillsFlexItem' >
            <IoLogoJavascript className='skillsLogo' />
            <p className='SkillsName' >JavaScript</p>
          </div>
          <div className='skillsFlexItem' >
            <FaReact className='skillsLogo' />
            <p className='SkillsName' >React Native</p>
          </div>
          <div className='skillsFlexItem' >
            <FaReact className='skillsLogo' />
            <p className='SkillsName' >React</p>
          </div>
          <div className='skillsFlexItem'>
            <IoLogoHtml5 className='skillsLogo' />
            <p className='SkillsName' >HTML</p>
          </div>
          <div className='skillsFlexItem'>
            <FaCss3Alt className='skillsLogo' />
            <p className='SkillsName' >CSS</p>
          </div>
          <div className='skillsFlexItem' >
            <IoLogoFirebase className='skillsLogo' />
            <p className='SkillsName' >Firebase</p>
          </div>
          <div className='skillsFlexItem' >
            <SiMongodb className='skillsLogo' />
            <p className='SkillsName' >MongoDB</p>
          </div>
          <div className='skillsFlexItem' >
            <SiAdobexd className='skillsLogo' />
            <p className='SkillsName' >AdobeXD</p>
          </div>
        </div>
      </div>

      <div className='wholeContainer2' >
        <p className='PointHeading' >Experience</p>
        <div className='expFlex'>
          <p className='expHeading' ><FaLocationArrow /> Internship at Ardent Computech PVT. LTD. </p>
          <div className='expBox' >
            <p className='expText'>Topic : MERN Stack</p>
            <p className='expText' style={{marginTop:-10}}>Duration : 2 Months</p>
            <p className='expText' style={{marginTop:-10}}>learnings -- </p>
            <p className='learnText' style={{marginTop:-15, marginLeft:30}}> Here I have learned many things about web , from frontend to the backend. Here I have learned to create a React website from scratch to a live, practical and responsive website. Here We had a group project of making a Online Pizza Shop, here I have learned  connecting frontEnd to backEnd and backEnd to MongoDB Database using ExpressJs. </p>
          </div>
        </div>
      </div>

      <div className='wholeContainer2' >
        <p className='PointHeading' >Education</p>
        <div className='expFlex'>
          <p className='expHeading' ><FaLocationArrow /> Amity University Kolkata <FaGraduationCap size={30} /> </p>
          <div className='expBox' >
            <p className='expText'>Course : MCA (Master of Computer Applications)</p>
            <p className='expText' style={{marginTop:-10}}>PassOut Year : 2025</p>
            <p className='expText' style={{marginTop:-10}}>learnings -- </p>
            <p className='learnText' style={{marginTop:-15, marginLeft:30}}> Still pursuing and holding a CGPA of 7.14 </p>
          </div>
        </div>
          <p className='expHeading' style={{marginTop:40}} ><FaLocationArrow /> Gour Mahavidyalaya <FaGraduationCap size={30} /> </p>
          <div className='expBox' >
            <p className='expText'>Course : B.Sc Computer Science</p>
            <p className='expText' style={{marginTop:-10}}>PassOut Year : 2023</p>
            <p className='expText' style={{marginTop:-10}}>learnings -- </p>
            <p className='learnText' style={{marginTop:-15, marginLeft:30}}> completed my graduation with CGPA of 7.63 </p>
          </div>
      </div>

      <div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#000', paddingTop:50}} >
        <Link to='/Projects' className='lastProjTeam' >you have some free time ? </Link>
      </div>

      <div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#000', paddingTop:50}} >
        <p className='ThankYou' >--- Thank You for scrolling ---</p>
      </div>

    </div>
  )
}



