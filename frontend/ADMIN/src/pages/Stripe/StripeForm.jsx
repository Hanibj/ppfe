// import React from 'react'
// import CheckoutForm from './CheckoutForm'
// import {loadStripe} from '@stripe/stripe-js';
// import {Elements} from '@stripe/react-stripe-js';
// const PUBLIC_KEY="pk_test_51NLTWZJ2qTT5JGND6Va6liNzgc8G3YeTz5EhVAIq1yE4dJV1KBTed2TY4h8rrT40Qmq6tghfFk4MSc4LLK7g9zqM00VLFl73NI";
// const StripeTestPromise =loadStripe(PUBLIC_KEY)
// const StripeForm = () => {
//   return (
//     <Elements stripe={StripeTestPromise}>
//         <CheckoutForm/>
//     </Elements>
//   )
// }

// export default StripeForm
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const PUBLIC_KEY = 'pk_test_51NLTWZJ2qTT5JGND6Va6liNzgc8G3YeTz5EhVAIq1yE4dJV1KBTed2TY4h8rrT40Qmq6tghfFk4MSc4LLK7g9zqM00VLFl73NI';
const stripePromise = loadStripe(PUBLIC_KEY);

const StripeForm = () => {
  return (
    <Elements stripe={stripePromise} >
      <CheckoutForm />
    </Elements>
  );
};

export default StripeForm;
