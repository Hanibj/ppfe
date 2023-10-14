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

const Modifed = () => {
 
  const [data, setData] = useState([]);
  const [userval,setUserval]=useState({})
  const [error,setError]=useState({})
  const [username,setUsername]=useState('')
  //const {username}=useParams('')
  useEffect(() => {
    const token = localStorage.getItem('token');
    setUserval(token)
    const { username } = JSON.parse(token);
    setUsername(username);
    console.log(username)
  }, []);
  useEffect(() => {
    
    const affFeed = async () => {
      const response = await fetch(`http://localhost:4002/api/employee/feedback/${username}`);
      const jso = await response.json();
      console.log(jso)
      if (response.ok) {
        setData(jso);
      }
    };
  
    affFeed();
  }, [username]);

  const handleupdate = async (item) => {
   window.location.href=`/ModifierFeadback/${item._id}`

    };
return (

    <div className='contg' >
    <div className='warpperg'>
      <Card>
      <Title>Supprimier Les Feedbacks</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Sujet de feedback</TableHeaderCell>
            <TableHeaderCell>Feedbacks</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item.sujet}</TableCell>
              <TableCell>
                <Text>{item.reponse}</Text>
              </TableCell>
              <TableCell>
                <Button size="xs" color='green' onClick={() => handleupdate(item)}>
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

export default Modifed