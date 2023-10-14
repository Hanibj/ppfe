import'./css/Creefed.css'
import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
function Defi() {
  
  const [answers, setAnswers] = useState([]);
  const [defis, setDefis] = useState([]);
  const [reponse, setReponse] = useState('');
  const [username, setUsername] = useState('');
  const [userval,setUserval]=useState('')
  const [valeur,setValeur]=useState('')
  useEffect(() => {
    const token = localStorage.getItem('token');
    setUserval(token)
    const { username } = JSON.parse(token);
    setUsername(username);
    console.log(username)
  }, []);
  useEffect(() => {
    const fetchDefis = async () => {
      try {
        const response = await fetch(`http://localhost:4004/api/defi/Defi`);
        const data = await response.json();
        if (response.ok) {
          setDefis(data);
          // setValeur(data.valeur)
          // console.log(data.valeur)
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDefis();
  }, []);
  const handleValide =async (defi,reponses)=>{
    const {objet,valeur,date_fin,date_debut}=defi;
    const reponse=reponses
    console.log(valeur)
    console.log(reponse)
    const id=defi._id
    
   const defis = { objet, reponse, valeur, date_fin, date_debut, username } 
   console.log(defis.reponse)
   if (reponse.localeCompare(valeur)===0) {
    alert("Réponse correcte");
    let response = await fetch(`http://localhost:4004/api/defi/participerdefis/${id}`,{
         
    method: 'POST',
    body: JSON.stringify(defis),
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
    },
  });
const jso = await response.json();

if (!response.ok){
setError(jso.error)
}
if (response.ok){
setError(null)
alert("defis valider")
const score=1
let responses = await fetch(`http://localhost:4002/api/employee/updateScore/${username}`,{
         
method: 'PATCH',
body: JSON.stringify({score}),
headers: {
  'content-type': 'application/json',
  Accept: 'application/json',
},
});
if (!responses.ok){
  setError(jso.error)
  }
  if (responses.ok){
  setError(null)
  alert("update score valider")
  window.location.reload();}

}
  } else {
    alert("Réponse incorrecte");
    window.location.reload();
  }
 
     }


  const [errorResponse, setError] = useState("");
    function validate(defi) {
      const errors = {};
  
      if (!defi.reponse) {
        errors.reponse =
          "*Le champ reponse est obligatoire";
      }
  
      setError("");
      return errors;
    }
    /*const { handleSubmit, handleChange, touched, errors } =
    useFormik({
      initialValues: {
        reponse: "",
      },
      validate,
      onSubmit: (defi) => {
        handleValide(defi);
      },
    });
*/
const handleReponseChange = (e) => {
  const value = e.target.value;
  console.log('New reponse value:', value);
  setReponse(value);
};
  return (
    <div className='sondage' >
      <div className='warpper6'>
      <h2>Liste des Défis</h2>
      <form className='form5' >
    {defis &&
      defis.map((defi) => (
        <div key={defi._id}>
         
       {/*  <h3 className='input5' >
         date de debut du defi:  {  defi.date_debut}
          </h3>
          <h3 className='input5' >date de fin du defi: {defi.date_fin}</h3>
         <h3 className='input5' >{defi.objet}</h3>
         
          <textarea cols="50" rows="3" className='input5' name='reponse'onChange={(e)=>setReponse(e.target.value)} placeholder='ecrire le reponse'  />
      
         
          <button className='but5'onClick={() => handleValide(defi,defi._id)}>Soumettre</button> 
      
          */} 
         

                  <h3 className='input5'>date de debut du defi:{defi.date_debut}</h3>
                  <h3 className='input5'>date de fin du defi: {defi.date_fin} </h3>
                  <h3 className='input5'>{defi.objet}   </h3>
                 {/* {setValeur(defi.valeur)}
                     */}
                    <textarea name='reponse' cols="50" rows="3" className='input5'
                    placeholder='ecrire le reponse' required 
                    title="Veuillez entrer uniquement des caractères et des espaces"  
                    // onChange={(e)=>setReponse(e.target.value)}
                    onChange={handleReponseChange}
                    
                    />
                    <button className='but5' onClick={()=>handleValide(defi,reponse)}>validier</button>
          </div> 
        
      ))}
      </form>
    </div>
    </div>
  )
}


export default Defi;
