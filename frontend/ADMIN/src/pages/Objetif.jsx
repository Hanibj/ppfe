import './css/gen.css'
import React, { useEffect, useState } from 'react'
import { AiOutlineClockCircle } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Button,
} from "@tremor/react";

const Objetif = () => {
  const [data, setData] = useState([]);
  const [error,setError] =useState(null)
  const [statue,setStatue] =useState(false)
  const [objectif,setObjectif]=useState('')
  const [editingIndex, setEditingIndex] = useState(-1);
  const[idd,setIdd]=useState('')

  useEffect(() => {
    
    const affFeed = async () => {
      const response = await fetch(`http://localhost:4001/api/admin/Objectif`);
      const jso = await response.json();
      console.log(jso)
      if (response.ok) {
        setData(jso);
  
      }
    };
  
    affFeed();
  }, []);

  const handledel = async (objec) => {
    alert(objec._id)
      const response = await fetch(`http://localhost:4001/api/admin/Objectif/${objec._id}`, {
        method: 'DELETE',
      });
      
      const jso1 = await response.json();
  
      if (!response.ok) {
        setError(jso1.error);
      }
      if (response.ok) {
        setError(null);
        window.location.reload();
        alert('feedback supprimé');
      }
    };
    const handleEditClick = (index) => {
      setEditingIndex(index);
      setObjectif(data[index].objectif);
      setStatue(data[index].statue);
    };
    const handleupd = async (index) => {
      alert(index._id)
      const response = await fetch(`http://localhost:4001/api/admin/Objectif/${data[index]._id}`, {
        method: 'PATCH',
        body: JSON.stringify({objectif, statue}),
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
        },
      });
        const jso1 = await response.json();
    
        if (!response.ok) {
          setError(jso1.error);
        }
        if (response.ok) {
          setError(null);
          window.location.reload();
          alert('objectifs modifier');
        }
      };
     
  const handleclick = async (item) => {
          const objectif=item.objectif
          const statue=item.statue
          try {
            const response = await fetch(`http://localhost:4001/api/admin/Objectif/valide/${item._id}`, {
              method: 'PATCH',
              body: JSON.stringify({ objectif, statue: true }),
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            });
      
            const jso1 = await response.json();
      
            if (!response.ok) {
              setError(jso1.error);
            }
            if (response.ok) {
              setError(null);
              window.location.reload();
              console.log('objectif terminer');
            }
          } catch (error) {
            // Handle any error that occurred during the request
            console.error(error);
          }
        };
      
    
  return (
    <div className='contg'>
    <div className='warpperg'>
    <Card>
    <Title>Liste des objectifs</Title>
    
    <Table className="mt-5">
      <TableHead>
        <TableRow>
         <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell>
      <Button size="xs" color='blue'>
          <Link to='/Creeobj'> creation</Link>
             </Button>
             </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>les objectifs</TableHeaderCell>
          <TableHeaderCell>Etat</TableHeaderCell>
          <TableHeaderCell>modification</TableHeaderCell>

          <TableHeaderCell>suppression</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item,index) => (
          <TableRow key={item.objectif}>
            <TableCell>
            {editingIndex === index ? (
                  <input
                    type="text"
                    value={objectif}
                    onChange={(e) => setObjectif(e.target.value)}
                  />
                ) : (
                  item.objectif
                )}
              </TableCell>
              <TableCell>
              {item.statue ===false ? <button type='submit' onClick={() =>handleclick(item)}><AiOutlineClockCircle size={32} color='red' /></button>:<TiTickOutline size={32} color='green'/>}
             </TableCell>
            <TableCell>
            {editingIndex === index ? (
                  <Button size="xs" color='green' onClick={() => handleupd(index)}>Enregistrer</Button>
                ) : (
                  <Button size="xs" color='green' onClick={() => handleEditClick(index)}>Modifier</Button>
                )}
       
             </TableCell>
             <TableCell>
            <Button size="xs" color='red' onClick={() => handledel(item)}>
           supprimier
             </Button>
             </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
  </div>
  </div>
  )
}

export default Objetif