import { useEffect, useState } from 'react';
import '../css/gen.css'
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
  Button
} from "@tremor/react";

const Supprimedefi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
 
  useEffect(() => {
      const affFeed = async () => {
          const response = await fetch(`http://localhost:4004/api/defi/Defi`);
          const jso = await response.json();
           console.log(jso)
          if (response.ok) {
            setData(jso);
          }
        };
    
        affFeed();
      },[] );

  const handledel = async (defi) => {
    console.log(defi._id)
      const response = await fetch(`http://localhost:4004/api/defi/Defi/${defi._id}`, {
        method: 'DELETE',
      });
      
      const jso1 = await response.json();
  
      if (!response.ok) {
        setError(jso1.error);
      }
      if (response.ok) {
        setError(null);
        window.location.reload();
        console.log('defi supprimé');
      }
    };
 
    return (

        <div className='contg'>
        <div className='warpperg'>
        <Card>
        <Title>Supprimier les Defis</Title>
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

export default Supprimedefi