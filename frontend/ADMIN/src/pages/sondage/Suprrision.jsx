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

const Suprrision = () => {
  const [data , setData ] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSondages = async () => {
      const response = await fetch('http://localhost:4003/api/sondage/sondage');
      const jso = await response.json();
       console.log(jso)
      if (response.ok) {
        setData(jso);
      }
    };

    fetchSondages();
  }, []);

  const handledel = async (sondage) => {
      const response = await fetch(`http://localhost:4003/api/sondage/sondage/${sondage._id}`, {
        method: 'DELETE',
      });
  
      const jso1 = await response.json();
  
      if (!response.ok) {
        setError(jso1.error);
      }
      if (response.ok) {
        setError(null);
        window.location.reload();
        alert('sondage supprimé')
        console.log('sondage supprimé');
      }
    };
    const handleupd = async (sondage) => {
   
      window.location.href=`/SondageUp/${sondage._id}`
    };

    return (

        <div className='contg'>
        <div className='warpperg'>
        <Card>
        <Title>Supprimier Les Sondages</Title>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Question</TableHeaderCell>
              <TableHeaderCell>Reponse1</TableHeaderCell>
              <TableHeaderCell>Reponse2</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.question}>
             <TableCell>{item.question}</TableCell>
        
                
                   <TableCell >
                     <Text>{item.option1}
                     </Text></TableCell>
                     <TableCell >
                     <Text>{item.option2}
                     </Text></TableCell>
                   
              
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

export default Suprrision