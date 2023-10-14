import React, { useEffect, useState } from 'react';
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
  Badge,
} from "@tremor/react";


// const Afichdefi = () => {
//   const [data, setData] = useState([]);
//   const [user, setUser] = useState([]);

//   useEffect(() => {
//     const fetchDefis = async () => {
//       try {
//         const response = await fetch(`http://localhost:4004/api/defi/Defi`);
//         const jso = await response.json();
//         if (response.ok) {
//           setData(jso);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDefis();
//   }, []);
//   const getUserParticipant =async (item) =>{
//     const response = await fetch(`http://localhost:4004/api/defi/GetParticpant/${item._id}`);
//     const jso = await response.json();
//     if (response.ok) {
//       setUser(jso);
//     }else {
//       alert('erreur')
//     }
//   }
//   return (
//     <div className='contg'>
//         <div className='warpperg'>
//         <Card>
//         <Title>Liste des defis</Title>
//         <Table className="mt-5">
//           <TableHead>
//             <TableRow>
//               <TableHeaderCell>Question</TableHeaderCell>
//               <TableHeaderCell>Valeur</TableHeaderCell>

//               <TableHeaderCell>Date du Debut</TableHeaderCell>
//               <TableHeaderCell>Date du Fin</TableHeaderCell>
//               <TableHeaderCell>Reponse</TableHeaderCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((item) => (
//               <TableRow key={item.objet}>
//                 <TableCell>{item.objet}</TableCell>
//                 <TableCell>
//                   <Text>{item.valeur}</Text>
//                 </TableCell>

//                 <TableCell>
//                   <Text>{item.date_debut}</Text>
//                 </TableCell>
//                 <TableCell>
//                   <Text>{item.date_fin}</Text>
//                 </TableCell>
//                 <TableCell>
//                   <Text>{getUserParticipant(item)}</Text>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Card>
//       </div>
//       </div> 
//   )
// }



// export default Afichdefi
// const Afichdefi = () => {
//   const [data, setData] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchDefis = async () => {
//       try {
//         const response = await fetch(`http://localhost:4004/api/defi/Defi`);
//         const jso = await response.json();
//         if (response.ok) {
//           setData(jso);
          
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDefis();
//   }, []);

//   // const getUserParticipant = async (item,index) => {
   
//   //     console.log(item[index]._id);
//   //     const response = await fetch(`http://localhost:4004/api/defi/GetParticpant/${item[index]._id}`);
//   //     const jso = await response.json();
//   //     if (response.ok) {
//   //       setUsers(jso.Emp);
//   //       console.log(jso.Emp);
//   //     } else {
//   //       alert('erreur');
//   //     }
   
//   // };
//   const getUserParticipant = async (item, index) => {
//     if (item && item._id) { // Add a null check for item and _id property
//       console.log(item._id);
//       const response = await fetch(`http://localhost:4004/api/defi/GetParticpant/${item._id}`);
//       const jso = await response.json();
//       if (response.ok) {
//         setUsers(jso.Emp);
//         console.log(jso.Emp);
//       } else {
//         alert('erreur');
//       }
//     }
//   };
  
//   useEffect(() => {
//     data.forEach((item,index) => {
//       getUserParticipant(item,index);
//     });
//   }, [data]);

//   return (
//     <div className='contg'>
//       <div className='warpperg'>
//         <Card>
//           <Title>Liste des defis</Title>
//           <Table className="mt-5">
//             <TableHead>
//               <TableRow>
//                 <TableHeaderCell>Question</TableHeaderCell>
//                 <TableHeaderCell>Valeur</TableHeaderCell>
//                 <TableHeaderCell>Date du Debut</TableHeaderCell>
//                 <TableHeaderCell>Date du Fin</TableHeaderCell>
//                 <TableHeaderCell>Reponse</TableHeaderCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data.map((item,index) => (
//                 <TableRow key={index}>
//                   <TableCell>{item.objet}</TableCell>
//                   <TableCell>
//                     <Text>{item.valeur}</Text>
//                   </TableCell>
//                   <TableCell>
//                     <Text>{item.date_debut}</Text>
//                   </TableCell>
//                   <TableCell>
//                     <Text>{item.date_fin}</Text>
//                   </TableCell>
//                   {Array.isArray(users)&&users.map((userss,index) => (
//                   <TableCell key={userss._id} >
//                     <Text>{userss.user}</Text>
//                   </TableCell>))}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Afichdefi;
const Afichdefi = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
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

  const getUserParticipant = async (item, index) => {
    if (item && item._id) {
      console.log(item._id);
      const response = await fetch(`http://localhost:4004/api/defi/GetParticpant/${item._id}`);
      const jso = await response.json();
      if (response.ok) {
        // Merge the new users with the existing ones
        setUsers((prevUsers) => [...prevUsers, ...jso.Emp]);
        console.log(jso.Emp);
      } else {
        alert('erreur');
      }
    }
  };

  useEffect(() => {
    data.forEach((item, index) => {
      getUserParticipant(item, index);
    });
  }, [data]);

  return (
    <div className='contg'>
      <div className='warpperg'>
        <Card>
          <Title>Liste des defis</Title>
          <Table className='mt-5'>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Question</TableHeaderCell>
                <TableHeaderCell>Valeur</TableHeaderCell>
                <TableHeaderCell>Date du Debut</TableHeaderCell>
                <TableHeaderCell>Date du Fin</TableHeaderCell>
                <TableHeaderCell>Reponse</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
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
                  {Array.isArray(users) &&
                    users.filter((user) => user.idDef === item._id) // Filter the users based on idDef
                      .map((user, index) => (
                        <TableCell key={user._id}>
                          <Text >{user.user}</Text>
                        </TableCell>
                      ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Afichdefi;
