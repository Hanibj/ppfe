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
import { Link } from 'react-router-dom';

const Modifierson = () => {
  const [data, setData] = useState([]);
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

  const handleModifier =async (item)=>{
    window.location.href=`/Modifierd/${item._id}`
  }
    return (

        <div className='contg'>
        <div className='warpperg'>
        <Card>
        <Title>Modifier Les Sondages</Title>
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

export default Modifierson