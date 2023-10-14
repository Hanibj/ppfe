import { useState } from 'react'
import { useFormik } from "formik";
const Creedefi = () => {
    const [answers, setAnswers] = useState([]);
    const [objet, setObjet] = useState('');
    const [date_debut, setDatedeb] = useState('');
    const [date_fin, setDatefin] = useState('');
    const [valeur, setValeur] = useState('');
    const [reponse, setReponse] = useState('');
  
  
    async function ajout  (values) {
    // Prevent the form from submitting and refreshing the page
    
      
      let response = await fetch('http://localhost:4004/api/defi/ajouterDefi', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
        },
      });
  
      const jso = await response.json();
  
      if (!response.ok) {
        setError(jso.error);
      } else {
        setError(null);
        window.location.href = '/Afichdefi';
        console.log('defis ajouter');
      }
    };
  
    const [errorResponse, setError] = useState("");
    function validate(values) {
      const errors = {};
  
      if (!values.objet) {
        errors.objet =
          "*Le champ defi est obligatoire";
      }
      if (!values.valeur) {
        errors.valeur =
          "*Le champ reponse est obligatoire";
      }
      
      if (!values.date_debut) {
        errors.date_debut =
          "*Le champ date est obligatoire";
      }
      if (!values.date_fin) {
        errors.date_fin =
          "*Le champ date est obligatoire";
      }
      setError("");
      return errors;
    }
    const { handleSubmit, handleChange, touched, errors } =
    useFormik({
      initialValues: {
        objet: "",
        valeur:"",
        date_debut:"",
        date_fin:"",
      },
      validate,
      onSubmit: (values) => {
       ajout(values);
      },
    });
  
    return (
      <div className='sondage'>
        <div className='warpper5'>
          <h1>Créer un défi</h1>
          <form className='form5'>
            <textarea cols="50" rows="2" className='input5' name='objet'onChange={handleChange} placeholder='ecrire ton probleme' />
            {touched.objet && errors.objet ? (
            <p className="input5">{errors.objet}</p>
          ) : null}
            <textarea cols="50" rows="3" className='input5'name='valeur'onChange={handleChange}placeholder='ecrire la valeur correct' />
            {touched.valeur && errors.valeur ? (
            <p className="input5">{errors.valeur}</p>
          ) : null}
            <input type='date' className='input5'name='date_debut'onChange={handleChange}  />
            {touched.date_debut&& errors.date_debut ? (
            <p className="input5">{errors.date_debut}</p>
          ) : null}
            <input type='date' className='input5'name='date_fin'onChange={handleChange}   />
            {touched.date_fin && errors.date_fin ? (
            <p className="input5">{errors.date_fin}</p>
          ) : null}
            <input className='but5' type='button' value='Soumettre' onClick={handleSubmit}/>
        
          </form>
        </div>
      </div>
    );
    }
export default Creedefi