import '../css/gen.css'
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
import { useEffect, useState } from 'react';

const Modifierdefi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDefis = async () => {
      try {
        const response = await fetch(`http://localhost:4004/api/defi/Defi`);
        const jso = await response.json();
        if (response.ok) {
          setData(jso);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDefis();
  }, []);
  const handleModifier =async (item)=>{
    window.location.href=`/Modifierdefis/${item._id}`
  }
    return (

        <div className='contg'>
        <div className='warpperg'>
        <Card>
        <Title>Modifier Les Defis</Title>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
            <TableHeaderCell>Question</TableHeaderCell>
              <TableHeaderCell>Valeur</TableHeaderCell>

              <TableHeaderCell>Date du Debut</TableHeaderCell>
              <TableHeaderCell>Date du Fin</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.objet}>
                                <TableCell>{item.objet}</TableCell>
                <TableCell>
                  <Text>{item.valeur}</Text>
                </TableCell>

                <TableCell>
                  <Text>{item.date_debut}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.date_fin}</Text>
                </TableCell>
                <TableCell>
                
<Button size="xs" color='green' onClick={()=>handleModifier(item)}>
                Modifier
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

export default Modifierdefi;