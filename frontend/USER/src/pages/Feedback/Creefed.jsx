import React from 'react'
import { useState } from 'react'
import { useFormik } from "formik";
import'../css/Creefed.css'
import { useEffect } from 'react';
const Creefed = () => {
    const [answers, setAnswers] = useState([]);
    const [sujet, setSujet] = useState('');
    const [reponse, setReponse] = useState('');
    const [token, setToken]= useState({})
    const [userval,setUserval]=useState('')
    const [username,setUsername]=useState('hanib')
    const [bonheur, setBonheur] = useState(50);
    useEffect(() => {
      const token = localStorage.getItem('token');
      setUserval(token)
      const { username } = JSON.parse(token);
      setUsername(username);
      console.log(username)
    }, []);
   
   
    const handleCreate= async (e) => {
     e.preventDefault()
      const values = { sujet, reponse, userval };
          
      const response= await fetch( 'http://localhost:4002/api/employee/ajouterFeedback',{
        method:'POST',
        body: JSON.stringify(values),
        headers: {
            "content-type": "application/json",
            Accept: "application/json",
          }})
    const jso =await response.json();
    if (response.ok){
      setError(null)
      alert("feedback ajouter")
      window.location.href =`/Affiche`;
      
  }
    if (!response.ok){
        setError(jso.error)
    }

    
    }
    const handleAnswer = (event) => {
      const newAnswers = [...answers];
      newAnswers[event.target.name] = event.target.value;
      setAnswers(newAnswers);
    };
  
   
  
  const handleSliderChange = (e) => {
    setBonheur((e.target.value));
  };

  const getEmoji = () => {
    if (bonheur <= 20) {
      return '😢';
    } else if (bonheur <= 40) {
      return '😔';
    } else if (bonheur <= 60) {
      return '😐';
    } else if (bonheur <= 80) {
      return '🙂';
    } else {
      return '😃';
    }
  };
    
  const handleSubmit = async () => {
    console.log(bonheur);
    const response = await fetch('http://localhost:4002/api/employee/ajouterbonheur', {
      method: 'POST',
      body: JSON.stringify({ bonheur }), // Wrap bonheur in an object
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const jso = await response.json(); // Await the response.json() promise
    if (response.ok) {
      setError(null);
      window.location.href =`/Affiche`;
      console.log("Bonheur ajouter");
    }
    if (!response.ok) {
      setError(jso.error);
      console.log(error);
    }

  };



    const [error, setError] = useState(null);


    return (
      <div className='sondage'>
        <div className='warpper7'>
          <h1>Mon Feedback</h1>
          <form className='form5' >
            <input className='input5'  type='text'name='sujet'onChange={(e)=>setSujet(e.target.value)} placeholder='Sujet de feedback' />
           
        
            <textarea cols="50" rows="5" name='reponse' onChange={(e)=>setReponse(e.target.value)} className='input5' placeholder='ecrire ton feedback'   />
        
               <button className='but5'   onClick={handleCreate}>Soumettre</button>
  
          </form>
          <form>
          <div>
        <h1 > Happiness Level</h1>
      <input
      className='input7'
        type="range"
        min="0"
        max="100"
        value={bonheur}
        onChange={handleSliderChange}
      />
      <div className='bon' >
        {getEmoji()}
        <span  >{bonheur}</span>
      </div>
      <button className='but5'onClick={handleSubmit}>valider</button> 
    </div>
          </form>
        </div>
      </div>
    );
}

export default Creefed