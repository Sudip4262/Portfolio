import React, { useEffect } from 'react'

export default function Projects() {



  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  
  return (
    <div style={{marginTop:85}}>
      <div className='wholeContainer2' id='AboutMe'>
        <p className='PointHeading' >Projects</p>
        <div className='ProjectAboutBox' >
          <img src={`${process.env.PUBLIC_URL}/photos/Cravings.jpeg`} className='ProjectImg' />
          <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap'}} >
            <p className='ProjectCravingsName' >Cravings</p>
            <p className='ProjectCravingsDesignation' >(Online Food Shop)</p>
            <p className='ProjectCravingsDesc' >
              This is a testing website created with react and firebase database and authentication for smooth experience. I'm just a learner learning new things and applying them to my projects.This website is currently using free hosting support of git pages.
            </p>
            <p className='ProjectCravingsDesc' >
              using : React, Firestore_Database, Firebase_Authentication, JavaScript, Github
            </p>
            <div style={{display:'flex', flexDirection:'row'}} >
                <a href='https://sudip4262.github.io/Cravings/' target='_blank' className='VisitWebsiteText' >Visit This Site</a>
                <p className='KnowWebsiteText' >Know more about it?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
