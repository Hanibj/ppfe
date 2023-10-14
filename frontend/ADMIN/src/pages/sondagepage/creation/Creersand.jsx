import { useEffect, useState } from 'react'
import { useFormik } from "formik";
import '../creation/Creationsond.css'
const Creersand = () => {
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [sondage, setSondage] = useState(false);
  const [valide, setValide] = useState('');
  const [error ,setError]= useState(null)
  





const  handleSubmit =async ()=> {
    const values = { question, option1, option2, valide };

  let response = await fetch('http://localhost:4003/api/sondage/ajouterSondage', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const jso = await response.json();

    if (!response.ok) {
      setError(jso.error);
    }
    if (response.ok) {
      setError(null);
      window.location.href = '/Affichersond';
      console.log('Sondage ajouter');
    }
  };
  /*const handleOptionChange = (index, e) => {
    const newOptions = [...option];
    newOptions[index] = e.target.value;
    setOption(newOptions);
  };*/
  /*const [errorResponse, setError] = useState("");
    function validate(values) {
      const errors = {};
  
      if (!values.question) {
        errors.question =
          "*Le champ question est obligatoire";
      }
      if (!values.option) {
        errors.option =
          "*Le champ reponse est obligatoire";
      }
   
      setError("");
      return errors;
    }
    const { handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        question: "",
        option:"",
        
      },
      validate,
      onSubmit: (values) => {
        
        AjouterSondage(values);
      },
    });*/
  return (
    <div className='sondage'>
      <div className='warpper5'>
        <h1>Créer un sondage</h1>
        <form className='form5' >
          <input className='input5' type='text'name='question'onChange={(e)=>setQuestion(e.target.value)} placeholder='entre le question' required />
         
        
            
          {/* <label className='Label5'>
          <input className='input' type="radio" name="q1"  value={option1} />
            <input className='input6' type='text' value={option1} placeholder={option1} name='option'onChange={(e)=>setOption1(e.target.value)} required /></label >
            <label className='Label5'>
            <input className='input' type="radio" name="q1"  value={option2} />
            <input className='input6' type='text' value={option2} placeholder={option2} name='option'onChange={(e)=>setOption2(e.target.value)} required />
          
          </label>
       
           */}
                   
            
          <label >
          <input className='input' type="radio" name="q1"  value={option1} />
            <input className='input6' type='text' value={option1} placeholder={option1} name='option'onChange={(e)=>setOption1(e.target.value)} required /></label >
            <label >
            <input className='input' type="radio" name="q1"  value={option2} />
            <input className='input6' type='text' value={option2} placeholder={option2} name='option'onChange={(e)=>setOption2(e.target.value)} required />
          
          </label>
          <input className='but5' type='button' value='Soumettre' onClick={handleSubmit}/>
        </form>
      </div>
    </div>
  );

}

export default Creersand