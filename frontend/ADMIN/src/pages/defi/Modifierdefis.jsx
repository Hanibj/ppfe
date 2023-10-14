import React from 'react'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
const Modifierdefis = () => {
    
    
        const [answers, setAnswers] = useState([]);
        const [doublc,setDoublec]=useState(false)
        const { id } =useParams()
        const [data, setData] = useState([]);
        const [objet, setObjet] = useState('');
        const [valeur, setValeur] = useState('');
        const [date_deb, setDatedeb] = useState('');
        const [date_fin, setDatefin] = useState('');
        useEffect(() => {
          const fetchDefis = async () => {
            try {
              const response = await fetch(`http://localhost:4004/api/defi/Defi/${id}`);
              const jso = await response.json();
              if (response.ok) {
                setData(jso);
                console.log(jso)
                setDatedeb(jso.date_debut)
                setDatefin(jso.date_fin)
                setObjet(jso.objet)
                setValeur(jso.valeur)
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
      const response = await fetch(`http://localhost:4004/api/defi/Defi/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ objet,valeur, date_deb,date_fin }),
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        alert('defis updated!');
        window.location.href = `/Afichdefi`;
      }
    } catch (error) {
      console.error(error);
    }
  };
     
      return (
        <div className='sondage'>
            <div className='warpper5'>
              <h1>Modifier un défi</h1>
              <form className='form5'>
                <textarea cols="50" rows="2" className='input5' name='objet' value={objet}   onChange={(e)=>setObjet(e.target.value)}/>
                
                <textarea cols="50" rows="3" className='input5'name='value' value={valeur}  onChange={(e)=>setValeur(e.target.value)} />
                <label>date deb  
                <input type='text' className='input5'name='date_deb' value={date_deb} onChange={(e)=>setDatedeb(e.target.value)}/>
    
  
                
                </label>
                <label>date fin
                
                <input type='text' className='input5'name='date_fin'  value={date_fin}  onChange={(e)=>setDatefin(e.target.value)} />
                </label>
                <button className='but5' type="submit" onClick={handleSubmit}>Soumettre</button>
                
              </form>
            </div>
          </div>
      )
    }
   

export default Modifierdefis;