import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import HomePage from './components/HomePage'
import NavtabBar from './components/NavtabBar'
import Footer from './components/Footer'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'


export default function () {
  return (
    <div>
      <BrowserRouter>
        <NavtabBar/>
        <Routes>
          <Route exact path='/' element={<HomePage/>} ></Route>
          <Route exact path='/Projects' element={<Projects/>} ></Route>
          <Route exact path='/AboutMe' element={<AboutMe/>} ></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
