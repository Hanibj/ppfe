import React, { useEffect } from 'react'

import { useState } from 'react'
import '../sondagepage/creation/Creationsond.css'
import { useParams } from 'react-router-dom';


const Modifiers = () => {
    
    const [error, setError] = useState(null);
      
    const [answers, setAnswers] = useState([]);
    const [doublc,setDoublec]=useState(false)
    const { id } =useParams()
    const [data, setData] = useState([]);
    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setoption2] = useState('');
   
    useEffect(() => {
      const fetchDefis = async () => {
        try {
          const response = await fetch(`http://localhost:4003/api/sondage/sondage/${id}`);
          const jso = await response.json();
          if (response.ok) {
            setData(jso);
            
            setOption1(jso.option1)
            setQuestion(jso.question)
            setoption2(jso.option2)
            console.log (jso)
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchDefis();
    }, [id]);
    
const handleSubmit = async (e) => {
e.preventDefault();

try {
  const response = await fetch(`http://localhost:4003/api/sondage/updatesondage/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ question, option1,option2 }),
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
    },
  });
  if (response.ok) {
    alert('Sondage updated!');
    window.location.href = `/Modifierson`;
  }
} catch (error) {
  console.error(error);
}
};

  return (
    <div className='sondage'>
    <div className='warpper5'>
      <h1>Modifier un sondage</h1>
      <form className='form5' >
        <input className='input5' type='text'name='question' value={question} onChange={(e)=>setQuestion(e.target.value)}/>
        <label >
        <input className='input' type="radio" name="q1" value={option1} />
          <input className='input6' type='text' value={option1}  onChange={(e)=>setOption1(e.target.value)}/>
        </label >
        <label >
        <input className='input' type="radio" name="q1" value={option2}  />
          <input className='input6' type='text' value={option2}  onChange={(e)=>setoption2(e.target.value)} />
        </label>
        <button className='but5' type="submit" onClick={handleSubmit}>Soumettre</button>
      </form>
    </div>
  </div>
);
  
}


export default Modifiers