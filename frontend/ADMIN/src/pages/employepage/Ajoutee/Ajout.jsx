import React from 'react'
import { useState } from 'react';
import './Ajoute.css'

const Ajout = () => {
     
            const [matricule,setMatricule]= useState('');
            const [nom,setNom]= useState('');
            const [prenom,setPrenom]= useState('');
            const [datenaiss,setDatenaiss]= useState('');
            const [email,setEmail]= useState('');
            const [departement,setDepartement]= useState('');
            const [chef,setChef]= useState('');
            const [poste,setPoste]= useState('');
            const [password,setPassword]= useState(null);
            const [tel,setTel]= useState('');
            const [username,setUsername]= useState('')
            const [score,setScore]= useState('0');
            const [typeus,setTypeus]= useState('Employe');
            const [error,setError]= useState(null);

        const handleSubmit=async (e)=>{
          e.preventDefault()
          const employee= {matricule,nom,prenom,datenaiss,username,email,password,departement,chef,poste,tel,typeus,score};
         
         const response= await fetch( 'http://localhost:4002/api/employee/addemp',{
                method:'POST',
                body: JSON.stringify(employee),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  }})
            const jso =response.json();
    
            if (!response.ok){
                setError(jso.error)
            }
            if (response.ok){
                setError(null)
                console.log("employée ajouter")
                setMatricule('')
                setNom('')
                setPrenom('')
                setEmail('')
                setUsername('')
                setPassword('')
                setDepartement('')
                setChef('')
                setPoste('')
                setTel('')
                 setTel('')
                 window.location.href='/AfficheEmployee';
            }
            
            //console.log(matricule,nom,prenom,dateNaiss, email,departement,chef,poste,password,tel)
        }
        
    
    
          return (
            <div className='Containe2'>
                <div className='Wrapper2'>
             <form className='Form1' >
                <h3>Ajouter un employé </h3>
                <label></label>
                <input
                placeholder='Matricule'
                className='Input2' 
                    type='number'
                    required
                    onChange={(e) => setMatricule(e.target.value)} 
                    value={matricule} 
                />
                <label></label>
                <input 
                placeholder='Nom'
                className='Input2' 
                    type='text'
                    required
                    onChange={(e) => setNom(e.target.value)}
                    value={nom}
                />
                <label></label>
                <input 
                placeholder='Prenom'
                className='Input2' 
                    type='text'
                    required
                    onChange={(e) => setPrenom(e.target.value)}
                    value={prenom}
                />
                
                <label></label>
                <input 
                placeholder='Date De Naissance'
                className='Input2' 
                    type='date'
                    required
                    onChange={(e) => setDatenaiss(e.target.value)}
                    value={datenaiss}/>
                <label></label>
                <input
                placeholder='Email'
                className='Input2' 
                    type='email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
           
                                <label></label>
                <input
                placeholder='username' 
                className='Input2' 
                    type='text'
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <label></label>
                <input
                placeholder='Mot De Passe' 
                className='Input2' 
                    type='password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <label></label>
                <input 
                placeholder='Departement'
                className='Input2' 
                    type='text'
                    required
                    onChange={(e) => setDepartement(e.target.value)}
                    value={departement}
                />
                <label></label>
                <select 
                className='Input2' 
              
                required
                onChange={(e) => setChef(e.target.value)}
                value={chef}>
                    <option placeholder='chef'value="">chef</option>
                    <option  value="true">oui</option>
                    <option value="false">non</option>
                </select>
                <label></label>
                <input 
                placeholder='Type'
                className='Input2' 
                    type='text'
                    required
                    onChange={(e) => setPoste(e.target.value)}
                    value={poste}
                />

                <input 
                placeholder='Tel'
                className='Input2' 
                    type='text'
                    required
                    onChange={(e) => setTel(e.target.value)}
                    value={tel}
                />
               <input className='But1' type='button' value='Ajouter' onClick={(e)=>handleSubmit(e)} />
        
             </form>
             </div>
             </div>
          )
        }
    

export default Ajout