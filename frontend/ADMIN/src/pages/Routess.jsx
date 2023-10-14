// import React, { useEffect, useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Even from './Even';
// import Home from './Home';
// import Defi from './Defi';
// import Objetif from './Objetif';
// import Pageadmins from './Pageadmins';
// import Sidebar from '../components/Sidebar'
// import Ajout from './employepage/Ajoutee/Ajout';
// import Modifier from './employepage/Modifiere/Modifier';
// import Supprime from './emp/Supprime';
// import Affiche from './emp/Affiche';
// import Profile from './Profile'
// import Creersand from './sondagepage/creation/Creersand';
// import Affichesond from './sondage/Affichesond';
// import Suprrision from './sondage/Suprrision';
// import Modifierson from './sondage/Modifierson';
// import Afichdefi from './defi/Afichdefi';
// import Creedefi from './defipage/creationdefi/Creedefi';
// import Modifierdefi from './defi/Modifierdefi';
// import Supprimedefi from './defi/Supprimedefi';
// import Creeobj from './Creeobj';
// import Ajoutadmin from './Ajoutadmin';
// import Signin from './Signin';
// import Signup from './Signup';
// import { useNavigate } from 'react-router-dom';
// const Routess = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('login');
//     setIsLogin(token);
//   }, []);
//   return (
//     <div>
//       {isLogin === true ?( <> <Sidebar />
//       <Routes>
//         <Route path='/' exact element={<Home/>} />
      
//         <Route path='/Even' element={<Even />} />
//         <Route path='/Creeobj' element={<Creeobj />} />
//         <Route path='/ajoutadmin' element={<Ajoutadmin />} />
//         <Route path='/objetif' element={<Objetif />} />
//         <Route path='/Creationsond' element={<Creersand />} />
//         <Route path='/Affichersond' element={<Affichesond/>} />
//         <Route path='/Suprrision' element={<Suprrision/>} />
//         <Route path='/Modifierson' element={<Modifierson/>} />
//         <Route path='/defi' element={<Defi/>} />
//         <Route path='/pageadmins' element={<Pageadmins/>} />
//         <Route path='/profile' element={<Profile />} />
//         <Route path='/Affiche' element={<Affiche />} />
//         <Route path='/Ajout' element={<Ajout />} />
//         <Route path='/Modifier' element={<Modifier />} />
//         <Route path='/Supprime' element={<Supprime />} />
//         <Route path='/Modifierdefi' element={<Modifierdefi/>} />
//         <Route path='/Supprimedefi' element={<Supprimedefi/>} />
//         <Route path='/Afichdefi' element={<Afichdefi/>} />
//         <Route path='/Creedefi' element={<Creedefi/>} />
//       </Routes> </> ):
//       <Routes>  
//         <Route path='/' exact element={<Signin/>} />
//         <Route path='/Signup' element={<Signup/>}/>
//       </Routes>
//       }
   
//     </div>
//   )
// }

// export default Routess
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Even from './Even';
import Home from './Home';
import Defi from './Defi';
import Objetif from './Objetif';
import Pageadmins from './Pageadmins';
import Sidebar from '../components/Sidebar'
import Ajout from './employepage/Ajoutee/Ajout';
import Modifier from './employepage/Modifiere/Modifier';
import Supprime from './emp/Supprime';
import Affiche from './emp/Affiche';
import Profile from './Profile'
import Creersand from './sondagepage/creation/Creersand';
import Affichesond from './sondage/Affichesond';
import Suprrision from './sondage/Suprrision';
import Modifierson from './sondage/Modifierson';
import Afichdefi from './defi/Afichdefi';
import Creedefi from './defipage/creationdefi/Creedefi';
import Modifierdefi from './defi/Modifierdefi';
import Supprimedefi from './defi/Supprimedefi';
import Creeobj from './Creeobj';
import Ajoutadmin from './Ajoutadmin';
import Signin from './Signin';
import Signup from './Signup';
import Modifierdefis from './defi/Modifierdefis';
import Modifiers from './sondage/Modifiers';
import Modifieradmin from './Modifieradmin';
import Modified from './employepage/Modifiere/Modified';
import Logout from './Logout';
import Signingoogle from './Signingoogle';
import Feedback from './Feedback';
import ForgetPass from '../ForgetPass';
import StripeForm from './Stripe/StripeForm';
import Cancel from './Stripe/Cancel';
import Succes from './Stripe/Succes';

const Routess = () => {
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
            <Route path='/' element={<Home />} />
            <Route path='/Even' element={<Even />} />
            <Route path='/Creeobj' element={<Creeobj />} />
            <Route path='/ajoutadmin' element={<Ajoutadmin />} />
            <Route path='/Modifieradmin/:id' element={<Modifieradmin />} />
            <Route path='/objetif' element={<Objetif />} />
            <Route path='/Creationsond' element={<Creersand />} />
            <Route path='/Affichersond' element={<Affichesond />} />
            <Route path='/Suprrision' element={<Suprrision />} />
            <Route path='/Modifierson' element={<Modifierson />} />
            <Route path='/Modifierd/:id' element={<Modifiers/>} />
            <Route path='/defi' element={<Defi />} />
            <Route path='/pageadmins' element={<Pageadmins />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/AfficheEmployee' element={<Affiche />} />
            <Route path='/Ajout' element={<Ajout />} />
            <Route path='/Modifier' element={<Modifier />} />
            <Route path='/ModifierEmp/:id' element={<Modified />} />
            <Route path='/Supprime' element={<Supprime />} />
            <Route path='/Modifierdefi' element={<Modifierdefi />} />
            <Route path='/Modifierdefis/:id' element={<Modifierdefis/>} />
            <Route path='/Supprimedefi' element={<Supprimedefi />} />
            <Route path='/Afichdefi' element={<Afichdefi />} />
            <Route path='/Creedefi' element={<Creedefi />} />
            <Route path='/Feedback' element={<Feedback />} />
            <Route path='/Payment/:id' element={<StripeForm />} />
            <Route path='/cancel' element={<Cancel />} />
            <Route path='/success' element={<Succes />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/Signingoogle' element={<Signingoogle />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/ResetPassword' element={<ForgetPass />} />
        </Routes>
      )}
    </div>
  );
}

export default Routess;
