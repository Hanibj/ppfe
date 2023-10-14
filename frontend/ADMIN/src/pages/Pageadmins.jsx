import './css/gen.css'
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

const Pageadmins = () => {
  const [data,setData]= useState([])
  const [error,setError]= useState(null)
  const [editingIndex, setEditingIndex] = useState(-1);
    useEffect(() => {
      const affEmp = async () => {
        const response = await fetch('http://localhost:4001/api/admin/allAdmin');
        const jso = await response.json();
  
        if (response.ok) {
          setData(jso);
        }
      };
  
      affEmp();
    }, []);
    const handleSupp = async (admins) => {
      const response = await fetch('http://localhost:4001/api/admin/adminprofile/'+admins._id,{
        method: "DELETE",
      });
      const jso = await response.json();
    
      if (!response.ok){
        setError(jso.error)
    }
    if (response.ok){
        setError(null)
        console.log("admin suppremier")
    }
    window.location.reload();
    };
    const handleModifier =async (item)=>{
      window.location.href=`/Modifieradmin/${item._id}`
    }
      return (
        
        <div className='contg'>
        <div className='warpperg'>
        <Card>
        <Title>Liste des admins</Title>
        <Table className="mt-5">
          <TableHead>
          <TableRow>
         <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell>
      <Button size="xs" color='blue'>
          <Link to='/ajoutadmin'> creation</Link>
             </Button>
             </TableCell>
        </TableRow>
            <TableRow>
              <TableHeaderCell>Nom & Prenom</TableHeaderCell>
              <TableHeaderCell>type</TableHeaderCell>
              <TableHeaderCell>modification</TableHeaderCell>
              <TableHeaderCell>suppression</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.nom}>
                <TableCell>{item.nom}{item.prenom}</TableCell>
                <TableCell>
                  <Text>{item.type}</Text>
                </TableCell>
                <TableCell>
                <Button size="xs" color='green'onClick={() => handleModifier(item)} >
                 Modifier
                 </Button>
                 </TableCell>
                 <TableCell>
                <Button size="xs" color='red' onClick={() => handleSupp(item)}>
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
        );
}

export default Pageadmins