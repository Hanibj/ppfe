import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './Home';
import Defi from './Defi';
import Songade from './Sondage';
import Even from './Even';
import Profile from './Profile';
import Navbar from '../components/Navbar';
import Feedback from './Feedback';

const Routee = () => {
  return (
    <div>
      
        <Navbar/>
    <Routes>
    <Route path='/' exact element={<Home/>} />
    <Route path='/sondage'element={<Songade/>} />
    <Route path='/defi' element={<Defi/>} />
    <Route path='/even' element={<Even/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/Feedback' element={<Feedback/>} />
   
    </Routes>
  </div>
  )
}

export default Routee