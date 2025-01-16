import React, { useState } from 'react'
import {Link } from "react-router-dom";
import { FaList } from "react-icons/fa6";
import { GiCrossedSabres } from "react-icons/gi";


export default function NavtabBar() {
    const[menu, setMenu] = useState(false)
  return (
    <>
      <div style={{ display:'flex', flexDirection:'row', padding:10 , backgroundColor:'#000', justifyContent:'space-between', alignItems:'center', position:'fixed',top:0,width:'100%'}}>
        <Link to='/'><img src='photos/NameLogoWhite.png' className='logoImage' /></Link>
        <p className='menuToggle' onClick={() => {setMenu(!menu)}} >MENU <FaList size={14}/></p>
        <div className={`dropdown-menu ${menu? 'active' : 'inactive'}`} style={{display:'flex', flexDirection:'row', }}>
            <div style={{display:'flex'}}>
              <div className='menuCross' onClick={() => setMenu(false) } ><GiCrossedSabres color='#fff' /></div>
            </div>
            <div style={{display:'flex', flexDirection:'column', backgroundColor:'#fff', borderRadius:10}}>
              <DropdownItem link={'/'} text={"Home Page"} />
              <DropdownItem link={'/Projects'} text={"Projects"} />
            </div>
        </div>
      </div>   
    </>
  )
}

function DropdownItem(props) {
    return(
            <Link to={props.link} className='dropdownItem'><FaList className='toggleIcon'/> {props.text}</Link>
    );
}
