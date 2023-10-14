import React, { useEffect, useState } from 'react'
import './css/Profile.css'
import { Button } from '@tremor/react';
const Profile = () => {
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [datenaiss, setDatenaiss] = useState('');
    const [matricule, setMatricule ] = useState('');
    const [departement, setDepartement] = useState('');
    const [chef, setchef] = useState('');
    const [userval,setUserval]=useState({})
    const [username, setUsername] = useState('');
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
          const response = await fetch(`http://localhost:4002/api/employee/employeprofile/${username}`);
          const jso = await response.json();
console.log(jso.data)
      if (response.ok) {
        setAdmins(jso.data);
        
      }
    };

    affadmin();
  },[username]);
const handleUpdate =()=>{
  window.location.href=`/ModifierProfile/${username}`
}
  return (
    <div className='big'>
        <div className='warpper'>
          {Array.isArray(admins) && admins.map((admin) =>(
            <div>
          <h1 className='name'>{admin.nom} {admin.prenom} 's Profile</h1>
         <div className='ch' >
      
      {/* <img src={props.profilePicUrl} alt={`${props.username}'s profile picture`} /> */}
      <h5>date de naissance: {admin.datenaiss}</h5>
      <h5>email: {admin.email} </h5>
      <h5>matricule: {admin.matricule}</h5>
      <h5>departement: {admin.departement}</h5>
      <h5>username: {admin.username}</h5>
      <h5>Poste: {admin.poste}</h5>
      <h5>Password: {admin.password}</h5>
      <Button type='submit' onClick={handleUpdate}>Modifier</Button>
      {/* <h1>{firstName} {lastName}</h1>
      <h3>{email}</h3>
      <p>{bio}</p>
      <form onSubmit={updateProfile}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Bio:
          <textarea value={bio} onChange={(event) => setBio(event.target.value)} />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    // </div> */}
      </div></div>))}
    </div>
</div>
  )
}

export default Profile
