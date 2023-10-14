import React, { useEffect } from 'react'

import  { useState } from 'react'
import { useParams } from 'react-router-dom';

const Modifieradmin = () => {
    const [matricule,setMatricule]= useState('');
const [nom,setNom]= useState('');
const [prenom,setPrenom]= useState('');
const [datenaiss,setDatenaiss]= useState('');
const [usernames,setUsername]= useState('');
const [email,setEmail]= useState('');
const [departement,setDepartement]= useState('');
const [chef,setChef]= useState('');
const [poste,setPoste]= useState('');
const [password,setPassword]= useState('');
const [tel,setTel]= useState('');
const [error,setError]= useState(null);
const [admins,setAdmin]= useState([])
const { id }=useParams()

const [editingIndex, setEditingIndex] = useState(-1);
  useEffect(() => {
    const affEmp = async () => {
      const response = await fetch(`http://localhost:4001/api/admin/SingleAdmin/${id}`);
      const jso = await response.json();
     console.log(jso)
      if (response.ok) {
        setAdmin(jso.data)
        console.log(admins)
        setMatricule(jso.matricule)
        console.log(matricule)
        setNom(jso.nom)
        setPrenom(jso.prenom)
        setDatenaiss(jso.datenaiss)
        setEmail(jso.email)
        setUsername(jso.username)
        setPassword(jso.password)
        setDepartement(jso.departement)
        setPoste(jso.poste)
        setChef(jso.chef)
        setTel(jso.tel);
      }
    };

    affEmp();
  }, [id]);
  const handleChange = (e, index) => {
    const { name, value } = e.target;

    setAdmin((prevData) => {
      const updatedEmployees = [...prevData];
      updatedEmployees[index] = {
        ...updatedEmployees[index],
        [name]: value,
      };

      return updatedEmployees;
    });
  };
  const handleUpdate = async (admins) => {
    const response = await fetch(`http://localhost:4001/api/admin/adminprofile/modifier/${admins._id}`,{
      method: "PATCH",
      body: JSON.stringify(admins),
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
   } });
    const jso = await response.json();
  
    if (!response.ok){
      setError(jso.error)
  }
  if (response.ok){
      setError(null)
      alert("admin modifier")
      window.location.href=`/`
  }
  }
  return (
    <div className='Containe3'>
    <div className='Wrapper3'>
  <form className='Form2'  >
    <h3>Modifier un admin </h3>


          
          {admins &&
        admins.map((admin,index) => (
          <div key={admin.id}>
            <label ></label>
            <input className='Input3'  type='Number' name="matricule" value={admin.matricule} readOnly/>
             <label ></label>
            <input className='Input3'  type="text" name="nom" value={admin.nom } onChange={(e) => handleChange(e, index)}/>
            <label ></label>
            <input className='Input3'  type="text" name="prenom" value={admin.prenom} onChange={(e) => handleChange(e, index)} />
            <label ></label>
            <input className='Input3' type="date" name="datenaiss" value={admin.datenaiss} onChange={(e) => handleChange(e, index)} />
            <label ></label>
            <input className='Input3' type="text" name="username" value={admin.username} readOnly />
            <label ></label>
            <input className='Input3' type="text" name="email" value={admin.email} readOnly />
            <label > </label>
            <input className='Input3' type='number' name="tailleentr" value={admin.tailleentr}  onChange={(e) => handleChange(e, index)}/>
            <label ></label>
            <input className='Input3' type="text" name="type" value={admin.type}  onChange={(e) => handleChange(e, index)}/>
            <button className='But2' onClick={() => handleUpdate(admin)}>Valider</button>
         </div>
        ))}
    
            
            </form>
 </div>
 </div>
  )
}


export default Modifieradmin