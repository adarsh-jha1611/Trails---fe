import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../pages/Home'
import Tours from './../pages/Tours'
import Tourdetails from '../pages/Tourdetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Searchresult from '../pages/Searchresult'


const Routers = () => {
  return (
      <Routes>
          <Route path='/' element={<Navigate to='/home'/>} />
          <Route path='/home'element={<Home/>}/>
          <Route path='/tour'element={<Tours/>}/>
          <Route path='/tour/:id'element={<Tourdetails/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/register'element={<Register/>}/>
          <Route path='/tour/search'element={<Searchresult/>}/>
      </Routes>
    )
}

export default Routers