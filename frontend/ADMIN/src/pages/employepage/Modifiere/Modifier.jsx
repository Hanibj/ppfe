import React, { useEffect } from 'react'
import { useState } from 'react';


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
import './Modifier.css'
const Modifier = () => {

    const [data,setData]=useState({})
    
    const [error,setError]=useState(null)
    
    
    useEffect(() => {
      const affEmp = async () => {
        const response = await fetch('http://localhost:4002/api/employee/allemp');
        const jso = await response.json();
    
        if (response.ok) {
          setData(jso);
        }
      };
    
      affEmp();
    }, []);
    const handleModifier =async (item)=>{
        window.location.href=`/ModifierEmp/${item._id}`
      }
      return (
        
        <div className='contg'>
        <div className='warpperg'>
        <Card>
        <Title>Supprimier Les Empolyées</Title>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Matricule</TableHeaderCell>
              <TableHeaderCell>Nom & Prenom</TableHeaderCell>
              <TableHeaderCell>Date De Naissance</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Departement</TableHeaderCell>
              <TableHeaderCell>Chef</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
              <TableHeaderCell>Tel</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(data)&&data.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.matricule}</TableCell>
                <TableCell>
                  <Text>{item.nom}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.datenaiss}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.email}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.departement}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.username}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.poste}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.tel}</Text>
                </TableCell>
                <TableCell>
                <Button size="xs" color='green'  onClick={() => handleModifier(item)}>
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
        );
      };
    
    



export default Modifier
