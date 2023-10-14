import React from 'react'
import { useEffect, useState } from 'react';
import './css/gen.css'
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
} from "@tremor/react";
import { useParams } from 'react-router-dom';
const Feedback = () => {

    
  
      const [data, setData] = useState([]);
      const [userval,setUserval]=useState({})
   
      //const {username}=useParams('')
    
      useEffect(() => {
        
        const affFeed = async () => {
          const response = await fetch(`http://localhost:4002/api/employee/Allfeedback`);
          const jso = await response.json();
          console.log(jso)
          if (response.ok) {
            setData(jso);
          }
        };
      
        affFeed();
      },[] );
      return (
        <div className='contg' >
          <div className='warpperg'>
            <Card>
            <Title>Liste Des Feedbacks</Title>
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
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
          </div>
        </div> 
      )
    }
  

export default Feedback