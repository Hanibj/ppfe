
   import React, { useEffect } from 'react'
    import { useState } from 'react';
    import './Modifier.css'
import { useParams } from 'react-router-dom';
const Modified = () => {
 
    
    
                const [data,setData]=useState({})
                const [matricule,setMatricule]= useState('');
                const [nom,setNom]= useState('');
                const [prenom,setPrenom]= useState('');
                const [datenaiss,setDatenaiss]= useState('');
                const [email,setEmail]= useState('');
                const [departement,setDepartement]= useState('');
                const [chef,setChef]= useState('');
                const [poste,setPoste]= useState('');
                const [password,setPassword]= useState('');
                const [tel,setTel]= useState('');
                const [error,setError]= useState(null);
                const {id} =useParams()
                useEffect(() => {
                    const affEmp = async () => {
                      const response = await fetch(`http://localhost:4002/api/employee/employee/${id}`);
                      const jso = await response.json();
                
                      if (response.ok) {
                        setData(jso.data);
                      }
                    };
                
                    affEmp();
                  }, [id]);
                  const handleUpdate = async (empl) => {
                    const response = await fetch(`http://localhost:4002/api/employee/updateEmp/${empl._id}`,{
                      method: "PATCH",
                      body: JSON.stringify(empl),
                      headers: {
                          "Content-Type": "application/json",
                          Accept: "application/json",
                   } });
                    const jso = await response.json();
                    if (response.ok){
                        setError(null)
                        alert("employee modifier")
                        window.location.href=`/AfficheEmployee`
                    }
                    if (!response.ok){
                      setError(jso.error)
                  }
               
                  }
            const handleChange = (e, index) => {
                const { name, value } = e.target;
            
                setData((prevData) => {
                  const updatedEmployees = [...prevData];
                  updatedEmployees[index] = {
                    ...updatedEmployees[index],
                    [name]: value,
                  };
            
                  return updatedEmployees;
                });
              };
              return (
                <div className='Containe3'>
                    <div className='Wrapper3'>
                 <form className='Form2'  >
                    <h3>Modifier Un employé </h3>
                    
                 
                           {Array.isArray(data) &&
        data.map((empl,index) => (
          <div key={empl.id}>
            <label ></label>
            <input className='Input3'  type='Number' name="matricule" value={empl.matricule} readOnly/>
             <label ></label>
            <input className='Input3'  type="text" name="nom" value={empl.nom } onChange={(e) => handleChange(e, index)}/>
            <label ></label>
            <input className='Input3'  type="text" name="prenom" value={empl.prenom} onChange={(e) => handleChange(e, index)} />
            <label ></label>
            <input className='Input3' type="text" name="datenaiss" value={empl.datenaiss} onChange={(e) => handleChange(e, index)} />
            <label ></label>
            <input className='Input3' type="text" name="username" value={empl.username} readOnly />
            <label ></label>
            <input className='Input3' type="text" name="email" value={empl.email} readOnly />
            <label ></label>
            <input className='Input3' type="text" name="departement" value={empl.departement} onChange={(e) => handleChange(e, index)} />
            <input className='Input3' type="text" name="chef" value={empl.chef} required onChange={(e) => handleChange(e, index)} />

              
            <label ></label>
            <input className='Input3' type="text" name="poste" value={empl.poste}  onChange={(e) => handleChange(e, index)}/>
            <label > </label>
            <input className='Input3' type='text' name="tel" value={empl.tel}  onChange={(e) => handleChange(e, index)}/>
            <button className='But2' onClick={() => handleUpdate(empl)}>Valider</button>
         </div>
        ))}
                   
            
                 </form>
                 </div>
                 </div>
              )
            }
        
    
    
    
    
  

export default Modified