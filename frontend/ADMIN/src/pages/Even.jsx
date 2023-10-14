// import { Grid, Col, Card, Text, Metric, Flex } from "@tremor/react";
// import './css/gen.css'
// import { useEffect, useState } from "react";

// const Even = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchEventDetails();
//   }, []);

//   const fetchEventDetails = async () => {
//     try {
//       const response = await fetch('http://localhost:4001/api/admin/AllEvenement'); // Replace with your actual API endpoint
//       const data = await response.json();

//       if (response.ok) {
//         setData(data);
//       } else {
//         setError(data.error);
//       }
//     } catch (error) {
//       setError('Error occurred while fetching event details.');
//     } finally {
//       setLoading(false);
//     }
//   };
//   const payment = async (item) => {

//     window.location.href=`/Payment/${item._id}`
//   };
//   return (
//     <div className='contg' >
//       <div className='warpperg'>
//     <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2">
//     {Array.isArray(data)&&data.map((item) => (
//             <Card key={item._id}>
             
//               <Text >Titre de l'evenement :{item.titleevent}</Text>
//               <img className='event-image' src={`http://localhost:4001/${item.imageevent}`} sizes='30px' alt="Event" />
//               <Metric >Description:{item.descevent}</Metric>
//               <Metric>Prix:{item.prix}TDN</Metric>
//               <button type="submit" onClick={()=>payment(item)}>Payer</button>
//             </Card>
//             ))}
//     </Grid>
//     </div>
//     </div>
//   )
// }

// export default Even
import { Grid, Button, Card, Text, Metric, Flex } from "@tremor/react";
import './css/gen.css'
import { useEffect, useState } from "react";

const Even = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEventDetails();
  }, []);

  const fetchEventDetails = async () => {
    try {
      const response = await fetch('http://localhost:4001/api/admin/AllEvenement'); // Replace with your actual API endpoint
      const data = await response.json();

      if (response.ok) {
        setData(data);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('Error occurred while fetching event details.');
    } finally {
      setLoading(false);
    }
  };
  const payment = async (item) => {

    window.location.href=`/Payment/${item._id}`
  };
  return (
    <div className='contg' >
      <div className='warpperg'>
    <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2">
    {Array.isArray(data)&&data.map((item) => (
            <Card key={item._id}>
             
              <Text >Titre de l'evenement :{item.titleevent}</Text>
              <img className='event-image' src={`http://localhost:4001/${item.imageevent}`} sizes='30px' alt="Event" />
              <Metric className="text-xs" >Description:{item.descevent}</Metric>
              <Metric>Prix:{item.prix}TDN</Metric>
              <Button size="xs" color='blue' type="submit" onClick={()=>payment(item)}>Payer</Button>
            </Card>
            ))}
    </Grid>
    </div>
    </div>
  )
}

export default Even
