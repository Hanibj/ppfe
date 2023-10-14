// import React, { useEffect, useState } from 'react'
// import {useStripe, CardElement,useElements} from '@stripe/react-stripe-js';
// import { useParams } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios';


//     const CheckoutForm = () => {
//         const stripe = useStripe();
//         const elements = useElements();
//         const [titleevent, setTitleevent] = useState('');
//         const [imageevent, setImageevent] = useState(null);
//         const [prix, setPrix] = useState('');
        
//         const [imagePreview, setImagePreview] = useState('');
//         const {id}= useParams()
//  const stripePromise =loadStripe("pk_test_51NLTWZJ2qTT5JGND6Va6liNzgc8G3YeTz5EhVAIq1yE4dJV1KBTed2TY4h8rrT40Qmq6tghfFk4MSc4LLK7g9zqM00VLFl73NI")
//   useEffect(() => {
//     console.log(typeof id)
//     const affFeed = async () => {
//       const response = await fetch(`http://localhost:4001/api/admin/Event/${id}`);
//       const jso = await response.json();
//        console.log(jso)
//       if (response.ok) {
//         setTitleevent(jso.titleevent );
//         setPrix(jso.prix ); 
//         //setImagePreview(`http://localhost:4000/${jso.imageevent}`);
//         setImagePreview(jso.imageevent)
//       }
//       if (!(response.ok)) {
//           console.log("pronfk,poreg")
//       }
//     };

//     affFeed();
//   }, [id]);   
//   const handlesubmit = (e) => {
//     e.preventDefault()
//     console.log("Here1!")
//      axios.post('http://localhost:4001/api/admin/checkout', {
//        id: id, // Utilize the event ID extracted from useParams()
//        prix,
//        titleevent,
//      }, {
//        headers: {
//          'Content-Type': 'application/json',
//          Accept: 'application/json',
//        },
//      }).then(async (response) => {
//        window.location.href = response.data.url;
//      })
   

// // const unitAmount = parseInt(prix)*100;
// // const lineItems=[
// //   {
// //     price_data: {
// //       currency: 'eur',
// //       product_data: {
// //         name: titleevent,
// //       },
// //       unit_amount: unitAmount,
// //     },
// //     quantity: 1,
// //   },
// // ]
// // const {data}=await axios.post("http://localhost:4001/api/admin/checkout",lineItems)
// // const stripe= await stripePromise
// // await stripe.redirectToCheckout({sessionId: data.id})
// };
//           return (
//             <form >
//               {/* <CardElement
//                     options={{
//                         hidePostalCode: true,
                        
//                     }}
//                 /> */}
//                <input type="text" value={titleevent} onChange={(e) => setTitleevent(e.target.value)} />
     
//                {imagePreview && <img className="event-image" src={`http://localhost:4001/${imagePreview}`} sizes='30px' alt="Event" />}
//         <input type="text" value={prix} onChange={(e) => setPrix(e.target.value)} />
//               <button type='submit' onClick={handlesubmit}>Payer {prix}</button>
//             </form>
//           );
//         };
        
    
//     export default CheckoutForm;


import React, { useEffect, useState } from 'react'
import {useStripe, CardElement,useElements} from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {Button } from "@tremor/react";
import axios from 'axios';


    const CheckoutForm = () => {
        const stripe = useStripe();
        const elements = useElements();
        const [titleevent, setTitleevent] = useState('');
        const [imageevent, setImageevent] = useState(null);
        const [prix, setPrix] = useState('');
        
        const [imagePreview, setImagePreview] = useState('');
        const {id}= useParams()
 const stripePromise =loadStripe("pk_test_51NLTWZJ2qTT5JGND6Va6liNzgc8G3YeTz5EhVAIq1yE4dJV1KBTed2TY4h8rrT40Qmq6tghfFk4MSc4LLK7g9zqM00VLFl73NI")
  useEffect(() => {
    console.log(typeof id)
    const affFeed = async () => {
      const response = await fetch(`http://localhost:4001/api/admin/Event/${id}`);
      const jso = await response.json();
       console.log(jso)
      if (response.ok) {
        setTitleevent(jso.titleevent );
        setPrix(jso.prix ); 
        //setImagePreview(http://localhost:4000/${jso.imageevent});
        setImagePreview(jso.imageevent)
      }
      if (!(response.ok)) {
          console.log("pronfk,poreg")
      }
    };

    affFeed();
  }, [id]);   
  const handlesubmit = (e) => {
    e.preventDefault()
    console.log("Here1!")
     axios.post('http://localhost:4001/api/admin/checkout', {
       id: id, // Utilize the event ID extracted from useParams()
       prix,
       titleevent,
     }, {
       headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json',
       },
     }).then(async (response) => {
       window.location.href = response.data.url;
     })
   

// const unitAmount = parseInt(prix)*100;
// const lineItems=[
//   {
//     price_data: {
//       currency: 'eur',
//       product_data: {
//         name: titleevent,
//       },
//       unit_amount: unitAmount,
//     },
//     quantity: 1,
//   },
// ]
// const {data}=await axios.post("http://localhost:4001/api/admin/checkout",lineItems)
// const stripe= await stripePromise
// await stripe.redirectToCheckout({sessionId: data.id})
};
          return (
            <div className='contg'>
            <form >
              {/* <CardElement
                    options={{
                        hidePostalCode: true,
                        
                    }}
                /> */}
              <div className='t'> <input type="text"   value={titleevent} onChange={(e) => setTitleevent(e.target.value)} /></div>
     
               {imagePreview && <img className="event-image" src={`http://localhost:4001/${imagePreview}`} sizes='30px' alt="Event" />}
        <div className='xx'>
        <input type="text" value={prix} onChange={(e) => setPrix(e.target.value)}  />
              <Button size="xs" color='blue' type='submit' onClick={handlesubmit}>Payer</Button>
              </div>
            </form>
            </div>
          );
        };
        
    
    export default CheckoutForm;