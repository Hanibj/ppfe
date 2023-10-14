import React from 'react'
import Navbar from './Navbar'
import Signin from '../auth/Signin'
import Signup from '../auth/Signup'
import {Route,Routes} from 'react-router-dom'
import Info from './Info'
import ProfilePage from './ProfilePage'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Info/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/ProfilePage' element={<ProfilePage/>}/>
        </Routes>
    </div>
  )
}

export default Home