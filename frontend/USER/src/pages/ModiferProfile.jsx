

import React, { useEffect } from 'react'
import './css/ModProf.css'
import  { useState } from 'react'
import { useParams } from 'react-router-dom';

const ModiferProfile = () => {
    const [matricule,setMatricule]= useState('');
const [nom,setNom]= useState('');
const [prenom,setPrenom]= useState('');
const [datenaiss,setDatenaiss]= useState('');
const [usernames,setUsername]= useState('');
const [email,setEmail]= useState('');
const [departement,setDepartement]= useState('');
const [score,setScore]= useState('');
const [poste,setPoste]= useState('');
const [password,setPassword]= useState('');
const [tel,setTel]= useState('');
const [error,setError]= useState(null);
const [employee,setEmployee]= useState([])
const { username }=useParams()

const [editingIndex, setEditingIndex] = useState(-1);
  useEffect(() => {
    const affEmp = async () => {
      const response = await fetch(`http://localhost:4002/api/employee/employeprofile/${username}`);
      const jso = await response.json();
     console.log(jso)
      if (response.ok) {
        setEmployee(jso.data)
        console.log(employee)
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
        setScore(jso.score)
        setTel(jso.tel);
      }
    };

    affEmp();
  }, [username]);
  const handleChange = (e, index) => {
    const { name, value } = e.target;

    setEmployee((prevData) => {
      const updatedEmployees = [...prevData];
      updatedEmployees[index] = {
        ...updatedEmployees[index],
        [name]: value,
      };

      return updatedEmployees;
    });
  };
  const handleUpdate = async (employee) => {
    
    const response = await fetch(`http://localhost:4002/api/employee/employeprofile/modifier/${employee.username}`,{
      method: "PATCH",
      body: JSON.stringify(employee),
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
      alert("employee modifier")
      window.location.href=`/`
  }
  }
  return (
    <div className='Containe3'>
    <div className='Wrapper3'>
  <form className='Form2'  >
    <h3>Modifier Profile </h3>


          
          {employee &&
        employee.map((emp,index) => (
          <div key={emp.id}>
            <label ></label>
            <input className='Input3'  type='Number' name="matricule" value={emp.matricule} readOnly/>
             <label ></label>
            <input className='Input3'  type="text" name="nom" value={emp.nom } onChange={(e) => handleChange(e, index)}/>
            <label ></label>
            <input className='Input3'  type="text" name="prenom" value={emp.prenom} onChange={(e) => handleChange(e, index)} />
            <label ></label>
            <input className='Input3' type="text" name="datenaiss" value={emp.datenaiss} onChange={(e) => handleChange(e, index)} />
            <label ></label>
            <input className='Input3' type="text" name="username" value={emp.username} readOnly />
            <label ></label>
            <input className='Input3' type="text" name="email" value={emp.email} readOnly />
            <label > </label>
            <input className='Input3' type='text' name="departement" value={emp.departement}  onChange={(e) => handleChange(e, index)}/>
            <label ></label>
            <input className='Input3' type='text' name="password" value={emp.password}  onChange={(e) => handleChange(e, index)}/>
            <label ></label>
            <input className='Input3' type='text' name="chef" value={emp.chef}  onChange={(e) => handleChange(e, index)}/>
            <label ></label>
            <input className='Input3' type='text' name="tel" value={emp.tel}  onChange={(e) => handleChange(e, index)}/>
            <label ></label>
            <label ></label>
            <input className='Input3' type="text" name="score" value={emp.score} readOnly />
            <label > </label>
            <input className='Input3' type="text" name="type" value={emp.poste}  onChange={(e) => handleChange(e, index)}/>
            <button className='But2' onClick={() => handleUpdate(emp)}>Valider</button>
         </div>
        ))}
    
            
            </form>
 </div>
 </div>
  )
}


export default ModiferProfile