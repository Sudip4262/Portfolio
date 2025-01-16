import React, { useEffect } from 'react'

export default function AboutMe() {



  useEffect(() => {
    window.scrollTo(0, 0)
  },[])


  return (
    <div style={{marginTop:70}}>
      <div style={{display:'flex', justifyContent:'center', alignItems: 'center', height:200, width:300, backgroundColor:'#ff1'}}>
        <p>Lund</p>
      </div>
    </div>
  )
}
