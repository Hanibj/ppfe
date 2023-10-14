import React, { useEffect, useState } from 'react'
import './css/Profile.css'
import { Button } from '@tremor/react';
import { useParams } from 'react-router-dom';
const Profile = () => {
  const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Flah');
    const [email, setEmail] = useState('johnFlah@gmail.com');
    const [datenaiss, setDatenaiss] = useState('17/7/2001');
    const [matricule, setMatricule ] = useState('12345678');
    const [departement, setDepartement] = useState('informatique');
    const [chef, setchef] = useState('false');
    const [username, setUsername] = useState('');
    const [userval, setUserval]=useState('')
    //const{ username} =useParams();
    
      const [admins, setAdmins] = useState([]);
      useEffect(() => {
        const token = localStorage.getItem('token');
        setUserval(token)
        const { username } = JSON.parse(token);
        setUsername(username);
        console.log(username)
      }, []);
      useEffect(() => {
       
        const affadmin = async () => {
          const response = await fetch(`http://localhost:4001/api/admin/adminprofile/${username}`);
          const jso = await response.json();
console.log(jso.data)
      if (response.ok) {
        setAdmins(jso.data);
        
      }
    }; 

    affadmin();
  },[username]);
  const handleUpdate =(admin)=>{
    window.location.href=`/Modifieradmin/${admin._id}`
  }
  return (
    <div className='big'>
        <div className='warpper'>
        {admins &&
        admins.map((admin,index) => (
          <div key={admin._id}>
          <h1 className='name'>{admin.nom} {admin.prenom} 's Profile</h1>
         <div className='ch' >
      
    
      <h5>date de naissance: {admin.datenaiss}</h5>
      <h5>email: {admin.email} </h5>
      <h5>matricule: {admin.matricule}</h5>
      <h5>departement: {admin.departement}</h5>
      <h5>username: {admin.username}</h5>
      <h5>Poste: {admin.type}</h5>
      <Button type='submit' onClick={()=>handleUpdate(admin)}>Modifier</Button>
    
      </div></div>))}
    </div>
</div>
  )
}

export default Profile