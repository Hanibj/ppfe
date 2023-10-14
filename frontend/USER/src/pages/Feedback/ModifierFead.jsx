import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ModifierFead = () => {
    const [error,setError]= useState(null);
const [data,setData]= useState({})
const [sujet,setSujet]= useState('')
const [reponse,setReponse]= useState('')
const { id }=useParams()

const [editingIndex, setEditingIndex] = useState(-1);
  useEffect(() => {
    const affEmp = async () => {
      const response = await fetch(`http://localhost:4002/api/employee/feedback/Single/${id}`);
      const jso = await response.json();
     console.log(jso)
      if (response.ok) {
        setData(jso)
        setSujet(jso.sujet)
        setReponse(jso.reponse)
        console.log(data)
    }
 
    };

    affEmp();
  },[id]);
  const handleUpdate = async (e) => {
    e.preventDefault()
    const response = await fetch(`http://localhost:4002/api/employee/feedback/${id}`,{
      method: "PATCH",
      body: JSON.stringify({sujet,reponse}),
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
      alert("feadback modifier")
      window.location.href=`/Affiche`
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
    <div>
  <div className='sondage'>
    <div className='warpper7'>
      <h1>Mon Feedback</h1>
      <form className='form5' >
        {/* {Array.isArray(data) && data.map((item,index)=>{
            <div key={index}> */}
                    <input className='input5'  type='text'name='sujet' value={sujet}onChange={(e) => setSujet(e.target.value)} placeholder='Sujet de feedback' />
       
    
                    <textarea cols="50" rows="5" name='reponse' value={reponse} onChange={(e) => setReponse(e.target.value)} className='input5' placeholder='ecrire ton feedback'   />
                
                       <button className='but5'   onClick={(e)=>handleUpdate(e)}>Soumettre</button>
         {/*              </div>
         })} */}

      </form></div>
      </div>
      </div>
  )
}

export default ModifierFead