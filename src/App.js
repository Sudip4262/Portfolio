import React from 'react'
import {Routes, Route, HashRouter } from 'react-router-dom'


import HomePage from './components/HomePage'
import NavtabBar from './components/NavtabBar'
import Footer from './components/Footer'
import Projects from './components/Projects'


export default function () {
  return (
    <div>
      <HashRouter>
        <NavtabBar/>
        <Routes>
          <Route exact path='/' element={<HomePage/>} ></Route>
          <Route exact path='/Projects' element={<Projects/>} ></Route>
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  )
}
