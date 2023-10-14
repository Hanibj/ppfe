// import { useEffect, useState } from 'react';
// import '../css/gen.css'
// import {
//   Card,
//   Table,
//   TableHead,
//   TableRow,
//   TableHeaderCell,
//   TableBody,
//   TableCell,
//   Text,
//   Title,
//   Badge,
// } from "@tremor/react";

// const Affichesond = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSondages = async () => {
//       const response = await fetch('http://localhost:4003/api/sondage/sondage');
//       const jso = await response.json();
//        console.log(jso)
//       if (response.ok) {
//         setData(jso);
//       }
//     };

//     fetchSondages();
//   }, []);


//     const handleupd = async (sondage) => {

//       window.location.href=`/SondageUp/${sondage._id}`
//     };
//     const handlestat= async (sondage) => {
//       alert('zerjrjjzoj')
//       window.location.href=`/SondageStat/${sondage._id}`
//     }
//   return (
// <div className='contg'>
//         <div className='warpperg'>
//         <Card>
//         <Title>Liste Des Sondages</Title>
//         <Table className="mt-5">
//           <TableHead>
//             <TableRow>
//               <TableHeaderCell>Question</TableHeaderCell>
//               <TableHeaderCell>Reponse1</TableHeaderCell>
//               <TableHeaderCell>Reponse2</TableHeaderCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((item) => (
//               <TableRow key={item.question}>
//                 <TableCell>{item.question}</TableCell>
               
                   
//                       <TableCell >
//                         <Text>{item.option1}
//                         </Text></TableCell>
//                         <TableCell >
//                         <Text>{item.option2}
//                         </Text></TableCell>
                      
               
               
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Card>
//       </div>
//       </div> 
//   )
// }

// export default Affichesond
// import { useEffect, useState } from 'react';
// import '../css/gen.css'
// import {
//   Card,
//   Table,
//   TableHead,
//   TableRow,
//   TableHeaderCell,
//   TableBody,
//   TableCell,
//   Text,
//   Title,
//   DonutChart,
// } from "@tremor/react";

// const valueFormatter = (number) => ` ${Intl.NumberFormat('us').format(number).toString()}`;
// const Affichesond = () => {
//   const [yesPercentage, setYesPercentage] = useState(0);
// const [noPercentage, setNoPercentage] = useState(0);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSondages = async () => {
//       const response = await fetch('http://localhost:4003/api/sondage/sondage');
//       const jso = await response.json();
//        console.log(jso)
//       if (response.ok) {
//         setData(jso);
      
//       }
//     };
//     console.log(data.pourcentageYes)
//     fetchSondages();
//   }, []);
//   const poucentage = [
//     {
//       name: 'yesSondage',
//       sales: yesPercentage || 0,
//     },
//     {
//       name: 'noSondage',
//       sales: noPercentage || 0,
//     },
//   ];
  

//     const handleupd = async (sondage) => {

//       window.location.href=`/SondageUp/${sondage._id}`
//     };
//     const handlestat= async (sondage) => {
//       alert('zerjrjjzoj')
//       window.location.href=`/SondageStat/${sondage._id}`
//     }
//   return (
// <div className='contg'>
//         <div className='warpperg'>
//         <Card>
//         <Title>Liste Des Sondages</Title>
//         <Table className="mt-5">
//           <TableHead>
//             <TableRow>
//               <TableHeaderCell>Question</TableHeaderCell>
//               <TableHeaderCell>Reponse1</TableHeaderCell>
//               <TableHeaderCell>Reponse2</TableHeaderCell>
//               <TableHeaderCell>Resultat</TableHeaderCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {Array.isArray(data) && data.map((item) => (
//               <TableRow key={item.question}>
//                 <TableCell>{item.question}</TableCell>
               
                   
//                       <TableCell >
//                         <Text>{item.option1}
//                         </Text></TableCell>
//                         <TableCell >
//                         <Text>{item.option2}
//                         </Text></TableCell>
//                       <TableCell>
//                       {    setYesPercentage(item.pourcentageYes);
//         setNoPercentage(item.pourcentageNo);}
//                       {/* <Card className="max-w-lg">
//           <Title>Pourcentage</Title>
//           <DonutChart
//   className="mt-6"
//   data={item.pourcentageYes  }
//  // category="sales"
//  // index="name"
//   //valueFormatter={valueFormatter}
//   colors={['violet', 'indigo', 'rose']}
// />

//         </Card> */}
        
//                       </TableCell>
               
               
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Card>
//       </div>
//       </div> 
//   )
// }

// export default Affichesond
// import { useEffect, useState } from 'react';
// import '../css/gen.css';
// import {
//   Card,
//   Table,
//   TableHead,
//   TableRow,
//   TableHeaderCell,
//   TableBody,
//   TableCell,
//   Text,
//   Title,
//   DonutChart,
// } from "@tremor/react";

// const valueFormatter = (number) => ` ${Intl.NumberFormat('us').format(number).toString()}`;
// const Affichesond = () => {
//   const [yesPercentage, setYesPercentage] = useState(0);
//   const [noPercentage, setNoPercentage] = useState(0);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [percentageValues, setPercentageValues] = useState({});


//   // useEffect(() => {
//   //   const fetchSondages = async () => {
//   //     const response = await fetch('http://localhost:4003/api/sondage/sondage');
//   //     const jso = await response.json();
//   //     console.log(jso); // Log the value of `jso` here
//   //     if (response.ok) {
//   //       setData(jso);
//   //       if (Array.isArray(jso) && jso.length > 0) {
//   //         setYesPercentage(jso[0].pourcentageYes);
//   //         setNoPercentage(jso[0].pourcentageNo);
//   //       }
//   //     } else {
//   //       setError('Failed to fetch sondages');
//   //     }
//   //   };
  
//   //   fetchSondages();
//   // }, []);
//   useEffect(() => {
//     const fetchSondages = async () => {
//       const response = await fetch('http://localhost:4003/api/sondage/sondage');
//       const jso = await response.json();
//       console.log(jso);
  
//       if (response.ok) {
//         setData(jso);
//         if (Array.isArray(jso) && jso.length > 0) {
//           const percentages = jso.map(item => ({
//             pourcentageYes: item.pourcentageYes,
//             pourcentageNo: item.pourcentageNo,
//           }));
//          // setYesPercentage(percentages[0].pourcentageYes);
//          // setNoPercentage(percentages[0].pourcentageNo);
//          console.log('sdzfssdsdqddsdf',percentages)
//           setPercentageValues(percentages);
//         }
//       } else {
//         setError('Failed to fetch sondages');
//       }
//     };
//     console.log('sdzfsdf',percentageValues)
//     fetchSondages();
//   }, []);
  

//   const poucentage(index) = [
//     // {
//     //   name: 'yesSondage',
//     //   sales: yesPercentage || 0,
//     // },
//     // {
//     //   name: 'noSondage',
//     //   sales: noPercentage || 0,
//     // },
//     {
//       name: 'yesSondage',
//       sales: percentageValues.yesPercentage || 0,
//     },
//     {
//       name: 'noSondage',
//       sales: percentageValues.noPercentage || 0,
//     },
//   ];

//   const handleupd = async (sondage) => {
//     window.location.href = `/SondageUp/${sondage._id}`;
//   };

//   const handlestat = async (sondage) => {
//     alert('zerjrjjzoj');
//     window.location.href = `/SondageStat/${sondage._id}`;
//   };

//   return (
//     <div className='contg'>
//       <div className='warpperg'>
//         <Card>
//           <Title>Liste Des Sondages</Title>
//           <Table className="mt-5">
//             <TableHead>
//               <TableRow>
//                 <TableHeaderCell>Question</TableHeaderCell>
//                 <TableHeaderCell>Reponse1</TableHeaderCell>
//                 <TableHeaderCell>Reponse2</TableHeaderCell>
//                 <TableHeaderCell>Resultat</TableHeaderCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {Array.isArray(data) ? (
//                 data.map((item,index) => (
//                   <TableRow key={item.question}>
//                     <TableCell>{item.question}</TableCell>
//                     <TableCell>
//                       <Text>{item.option1}</Text>
//                     </TableCell>
//                     <TableCell>
//                       <Text>{item.option2}</Text>
//                     </TableCell>
//                     <TableCell>
//                       <Card className="max-w-lg">
//                         <Title>Pourcentage</Title>
//                         <DonutChart
//   className="mt-6"
//   data={poucentage(index)} // Wrap in an array using spread operator
//    category="sales"
//    index="name"
//    valueFormatter={valueFormatter}
//   colors={['violet', 'indigo', 'rose']}
// />

//                       </Card>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={4}>No data available</TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Affichesond;
import { useEffect, useState } from 'react';
import '../css/gen.css';
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
  DonutChart,
} from "@tremor/react";

const valueFormatter = (number) => ` ${Intl.NumberFormat('us').format(number).toString()}`;
const Affichesond = () => {
  const [yesPercentage, setYesPercentage] = useState(0);
  const [noPercentage, setNoPercentage] = useState(0);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [percentageValues, setPercentageValues] = useState([]);

  useEffect(() => {
    const fetchSondages = async () => {
      const response = await fetch('http://localhost:4003/api/sondage/sondage');
      const jso = await response.json();
      console.log(jso);

      if (response.ok) {
        setData(jso);
        if (Array.isArray(jso) && jso.length > 0) {
          const percentages = jso.map(item => ({
            pourcentageYes: item.pourcentageYes,
            pourcentageNo: item.pourcentageNo,
          }));
          setPercentageValues(percentages);
        }
      } else {
        setError('Failed to fetch sondages');
      }
    };

    fetchSondages();
  }, []);

  const getPoucentage = (index) => [
    {
      name: 'yesSondage',
      sales: percentageValues[index]?.pourcentageYes || 0,
    },
    {
      name: 'noSondage',
      sales: percentageValues[index]?.pourcentageNo || 0,
    },
  ];

  const handleupd = async (sondage) => {
    window.location.href = `/SondageUp/${sondage._id}`;
  };

  const handlestat = async (sondage) => {
    alert('zerjrjjzoj');
    window.location.href = `/SondageStat/${sondage._id}`;
  };

  return (
    <div className='contg'>
      <div className='warpperg'>
        <Card>
          <Title>Liste Des Sondages</Title>
          <Table className="mt-5">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Question</TableHeaderCell>
                <TableHeaderCell>Reponse1</TableHeaderCell>
                <TableHeaderCell>Reponse2</TableHeaderCell>
                <TableHeaderCell>Resultat</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(data) ? (
                data.map((item, index) => (
                  <TableRow key={item.question}>
                    <TableCell>{item.question}</TableCell>
                    <TableCell>
                      <Text>{item.option1}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{item.option2}</Text>
                    </TableCell>
                    <TableCell>
                      <Card className="max-w-lg">
                        <Title>Pourcentage</Title>
                        <DonutChart
                          className="mt-6"
                          data={getPoucentage(index)} // Wrap in an array using spread operator
                          category="sales"
                          index="name"
                          valueFormatter={valueFormatter}
                          colors={['violet', 'indigo', 'rose']}
                        />
                      </Card>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4}>No data available</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Affichesond;
