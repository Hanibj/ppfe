import React from 'react'
import './css/Creefed.css'
import { useState } from 'react'
import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
const Sondage = () => {


  const [errorResponse, setError] = useState("");
  const [answerss, setAnswers] = useState('');
  const [questions, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [sondages,setSondages]=useState([]);
  const [username, setUsername] = useState('');
  const [userval,setUserval]=useState('')
  //const {username,id}=useParams()
  useEffect(() => {
    const token = localStorage.getItem('token');
    setUserval(token)
    const { username } = JSON.parse(token);
    setUsername(username);
    console.log(username)
  }, []);
  useEffect(() => {
    const fetchSondages = async () => {
      const response = await fetch(`http://localhost:4003/api/sondage/sondage`);
      const jso = await response.json();
       console.log(jso)
      if (response.ok) {
        setQuestion(jso.question)
      
        setOption1(jso.option1)
        setOption2(jso.option2)
        setSondages(jso);
        console.log(sondages)
      }
    };

    fetchSondages();
  }, []);
const handleValide = async (sondage)=> {
   
   const data={questions,option1,option2,username,answerss}
   console.log(questions)
   console.log(option1)
   console.log(option2)
   console.log(username)
   console.log(typeof answerss)

   try {
    let result = await fetch(
        `http://localhost:4003/api/sondage/validerSondage/${sondage._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (result.ok) {
        alert('sondage valider');
       
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des sondages', error);
    }
      
}
const handleAff = async (sondage,id)=> {
    console.log(answerss)
}
  return (
    <div className='sondage'>
      <div className='warpper5'> 
        <h1>sondage</h1>
       {/* {sondages &&
      sondages.map((sondage) => (
        <div key={sondage._id}>
        <form className='form5' >
        <div className='input6'>{sondage.questions}</div>
        {Array.isArray(options) && options.map((op,index)=>(
                <div key={op.index}>
                   
                    <label className='Label5'>
          <input className='input' type="radio" name="q1" value={op} onChange={(e)=>setAnswers(e.target.value)} />
           <div className='input6'>{op}</div>
          </label >

                </div>
            ))}
          

          <button className='but5'onClick={()=>handleValide(sondage)}>Soumettre</button> 
        </form>
        </div> 
        
        ))}*/}

{Array.isArray(sondages) &&
              sondages.map((sondage) => (
                <div key={sondage._id}>
                <form className='form5'>
                    <div className='input6'>{sondage.question}</div>
                    <label className='Label5'>
                
                      
                      <input  type="radio" name="q1" value={sondage.option1 } onChange={(e)=>setAnswers(e.target.value)}/>
                      <div className='input6'> {sondage.option1}</div>
                      <input  type="radio" name="q1" value={sondage.option2 } onChange={(e)=>setAnswers(e.target.value)}/>
                      <div className='input6'> {sondage.option2}</div>
              
                 
             
             </label>
              <button className='but5'onClick={()=>handleValide(sondage)}>Soumettre</button> 
        
       
      
        </form>
        </div>  ))}
      </div>
    </div>
  );
}

export default Sondage