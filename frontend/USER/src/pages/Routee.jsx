

import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Defi from './Defi';
import Songade from './Sondage';
import Even from './Even';
import Profile from './Profile';
import Sidebar from '../components/Sidebar';
import Jeux from './Jeux';
import Snakey from './Games/Snakey/Snakey';
import Puzled from './Games/Puzzled/Puzled';
import Tetris from './Games/Tetris/components/Tetris';
import Creefed from './Feedback/Creefed';
import Affichfed from './Feedback/Affichfed';
import Modifed from './Feedback/Modifed';
import Suppfed from './Feedback/Suppfed';
import Sign from './Sign';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';
import ModiferProfile from './ModiferProfile';
import ModifierFead from './Feedback/ModifierFead';
import ForgetPassword from './ForgetPassword';

const Routee = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('login');
    setIsLogin(token === 'true');
  }, []);

  return (
    <div>
      {isLogin ? (
        <>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sondage" element={<Songade />} />
            <Route path="/defi" element={<Defi />} />
            <Route path="/even" element={<Even />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Ajout" element={<Creefed />} />
            <Route path="/Modifier" element={<Modifed />} />
            <Route path="/ModifierFeadback/:id" element={<ModifierFead />} />
            <Route path="/ModifierProfile/:username" element={<ModiferProfile />} />
            <Route path="/Affiche" element={<Affichfed />} />
            <Route path="/Supprime" element={<Suppfed />} />
            <Route path="/Jeux" element={<Jeux />} />
            <Route path="/Snakey" element={<Snakey />} />
            <Route path="/Puzled" element={<Puzled />} />
            <Route path="/Tetris" element={<Tetris />} />
            <Route path="/Logout" element={<Logout />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Sign />} />
            <Route path='/ResetPassword' element={<ForgetPassword />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default Routee;
