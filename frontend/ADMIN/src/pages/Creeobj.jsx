
import { useState } from 'react'
import { useFormik } from "formik";

const Creeobj = () => {
    const [answers, setAnswers] = useState([]);

    const [objectif, setObjectif] = useState('');
  
    
  
   
  
   
    async function Ajouter (values) {
     
          
      let response= await fetch( 'http://localhost:4001/api/admin/ajouterObjectif',{
        method:'POST',
        body: JSON.stringify(values),
        headers: {
            "content-type": "application/json",
            Accept: "application/json",
          }})
    const jso =response.json();
  
    if (!response.ok){
        setError(jso.error)
    }
    if (response.ok){
        setError(null)
         window.location.href='/objetif'
        alert("Objectif ajouter")
    }
    
    }
  const handleAnswer = (event) => {
    const newAnswers = [...answers];
    newAnswers[event.target.name] = event.target.value;
    setAnswers(newAnswers);
  };

  const [errorResponse, setError] = useState("");
    function validate(values) {
      const errors = {};
  
      if (!values.objectif) {
        errors.objectif =
          "*Le champ objectif est obligatoire";
      }
      setError("");
      return errors;
    }
    const { handleSubmit, handleChange, touched, errors } =
    useFormik({
      initialValues: {
        objectif: "",
        statue:false
      },
      validate,
      onSubmit: (values) => {
        Ajouter(values);
      },
    });
  return (
    <div className='sondage'>
      <div className='warpper5'>
        <h1>Créer un objectif</h1>
        <form className='form5' >
          <input className='input5' type='text'name='objectif'onChange={handleChange} placeholder='entre le objectif' />
          {touched.objectif && errors.objectif ? (
            <p className="input5">{errors.objectif}</p>
          ) : null}
          <input className='but5' type='button' value='Soumettre' onClick={handleSubmit}/>
        </form>
      </div>
    </div>
  )
}

export default Creeobj