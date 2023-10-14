import React, { useState } from 'react'
import './css/Profile.css'
const Profile = () => {
  const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Flah');
    const [email, setEmail] = useState('johnFlah@gmail.com');
    const [datenaiss, setDatenaiss] = useState('17/7/2001');
    const [matricule, setMatricule ] = useState('12345678');
    const [departement, setDepartement] = useState('informatique');
    const [chef, setchef] = useState('false');
  return (
    <div className='big'>
        <div className='warpper'>
          <h1 className='name'>{firstName} {lastName} 's Profile</h1>
         <div className='ch' >
      
      {/* <img src={props.profilePicUrl} alt={`${props.username}'s profile picture`} /> */}
      <h5>date de naissance: {datenaiss}</h5>
      <h5>email: {email} </h5>
      <h5>matricule: {matricule}</h5>
      <h5>departement: {departement}</h5>
      <h5>chef: {chef}</h5>
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
      </div>
    </div>
</div>
  )
}

export default Profile
