const Event =require('../models/event')
const Paiement=require('../models/paiement')
const mongoose=require('mongoose');
//const { enable } = require('../serveuradm');
require('dotenv').config();
const stripe=require('stripe')(process.env.STRIPE_SECRET_TEST|| "sk_test_51NLTWZJ2qTT5JGNDvXObTipMj3BAzTxUiFVfzmnN0fwIIHwHn77pcUQ7sa84vo5gwRrDHwFqxW46aih8dM0dpqUR00BOWRA0NW")
/*


const AddEvent =async (req,res) =>{
    console.log(req,16)
    const descevent=req.body.descevent;
    const titleevent=req.body.titleevent
    const prix=req.body.prix


     try{
        const evenem=await Event.create({imageevent,titleevent,descevent,prix})
        evenem.save()
        res.status(200).json(evenem)
    }catch(error){
        console.log(error)
        res.status(400).json({error:"defis invalide"})

 }
}

module.exports={
    AddEvent,
    
}*/
const AddEvent = async (req, res) => {
  const descevent = req.body.descevent;
  const titleevent = req.body.titleevent;
  const prix = req.body.prix;
  const imageevent = req.file.path; // Get the file path from the request
  console.log(imageevent)
  try {
    const evenem = await Event.create({ imageevent:imageevent, titleevent:titleevent, descevent:descevent,prix: prix });
    res.status(200).json(evenem);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Evenement invalide' });
  }
};
const AllEvenement= async (req,res) => {
  

    try{
     const event= await Event.find( {} )
  
     res.status(200).json(event)
     }catch (error) {
         console.log(error)
         res.status(500).send(err);
       } 
  }
  const updateEvent= async (req,res) => {
    const {id}=req.params
    const descevent = req.body.descevent;
  const titleevent = req.body.titleevent;
  const prix = req.body.prix;
  const imageevent = req.file.path; 
     console.log(id)
     console.log(req.body)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'evenement is invalide'})
    }
    const evenement= await Event.findOneAndUpdate({_id: id},{ imageevent:imageevent, titleevent:titleevent, descevent:descevent,prix: prix });
    console.log(evenement)
    if (!evenement){
    return res.status(400).json({error: 'evenement introvable'})
}
res.status(200).json(evenement)
}
//delete evenement

const deletEvent= async (req,res) => {
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'evenement is invalide'})
    }
    const evenement= await Event.findOneAndDelete({_id: id});
    console.log(evenement)
    if (!evenement){
    return res.status(400).json({error: 'evenement introvable'})
}
res.status(200).json(evenement)

}
const getEvent= async (req,res) => {
    const {id}=req.params
   //console.log(req.body)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'evenement is invalide'})
    }


    const evenement= await Event.findById(id);
    if (!evenement){
    return res.status(400).json({error: 'evenement introvable'})
}
    res.status(200).json(evenement)

}
const payer = async (req, res) => {
  const { idEvent, prix, titleevent } = req.body;
  const unitAmount = parseInt(prix)*100;

    const session = stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: titleevent,
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3002/success', // Remplacez par votre URL de succès
      cancel_url: 'http://localhost:3002/cancel', // Remplacez par votre URL d'annulation
    }).then((session) => {
      console.log("url: ", session.url)
      res.status(200).json({
        url: session.url
      });

    }).catch((error) => {
      console.log('Erreur de paiement :', error);
      res.status(500).json({
        error: 'Une erreur s\'est produite lors du paiement.',
      })})
//  res.redirect="https://checkout.stripe.com/c/pay/cs_test_a1SeAXBkzLHBB1d6OplWL5FzULkFONGkOrofvI9DQ29IGJFY1Fw125KI25#fidkdWxOYHwnPyd1blpxYHZxWjA0S0lRUl9PN3RRUTBPQktBM1NkM2lsS39iZj1CNlxgUX8wQG1TREx0NHxAMWFPUzROR1FgYTdRXDFtPXd3UTE1VGh0M3FibWNDbjFIVmYxSUlOMmI8f3RINTVTSUNpMjZLTCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl"
  
  // try{
  //   const session = await stripe.checkout.sessions.create({
  //     line_items: req.body,
  //     mode: 'payment',
  //     payment_methode_types: ['card'],
  //     success_url: 'http://localhost:3002/success', // Remplacez par votre URL de succès
  //     cancel_url: 'http://localhost:3002/cancel',
  //   })
  //   console.log(session)
  //   return res.status(200).json(session)
  // }catch(error){{
  //   return res.status(500).json(error)
  // }}
};

// const payer= async (req,res) => {


// const {idEvent,prix,titleevent}=req.body
// try {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     mode: 'payment',
//     line_items: [{
//       price_data: {
//         currency: 'eur',
//         product_data: {
//           name: titleevent, // Replace with the actual name of the event
          
//         },
//         unit_amount: parseInt(prix),
//       },
//       quantity: 1, // Update the quantity if needed
//     }],
//     success_url: 'http://localhost:4001/success', // Replace with your success URL
//     cancel_url: 'http://localhost:4001/cancel', // Replace with your cancel URL
//   });

//   res.json({
//     sessionId: session.id,
//   });
// } catch (error) {
//   console.log("erreur de paiement:", error);
//   res.status(500).json({
//     error: 'An error occurred during payment.',
//   });
// }
// // const { idEvent, prix, titleevent } = req.body;
// // // ...
// // try {
// //   const session = await stripe.checkout.sessions.create({
// //     payment_method_types: ["card"],
// //     mode: 'payment',
// //     line_items: [{
// //       price_data: {
// //         currency: 'eur',
// //         product_data: {
// //           name: titleevent, // Replace with the actual name of the event
// //         },
// //         unit_amount: parseInt(prix),
// //       },
// //       quantity: 1, // Update the quantity if needed
// //     }],
// //     success_url: 'http://localhost:4001/success', // Replace with your success URL
// //     cancel_url: 'http://localhost:4001/cancel', // Replace with your cancel URL
// //   });

// //   res.json({
// //     sessionId: session.id,
// //   });
// // } catch (error) {
// //   console.log("erreur de paiement:", error);
// //   res.status(500).json({
// //     error: 'An error occurred during payment.',
// //   });
// // }

// const { idEvent, prix, titleevent } = req.body;
// // ...
// try {
//   const product = await stripe.products.create({
//     name: titleevent, // Replace with the actual name of the event
//   });

//   const price = await stripe.prices.create({
//     currency: 'eur',
//     unit_amount: parseInt(prix),
//     product: product.id, // Use the product ID created above
//   });

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     mode: 'payment',
//     line_items: [
//       { 
//         price: price.id,
//         quantity: 1,
//       },
//     ],
//     success_url: 'http://localhost:4001/success',
//     cancel_url: 'http://localhost:4001/cancel',
//   });
// console.log(session)
//   res.json({
//     sessionId: session.id,
//   });
// } catch (error) {
//   console.log('erreur de paiement:', error);
//   res.status(500).json({
//     error: 'An error occurred during payment.',
//   });
// }


//}
const getpayer= async (req,res) => {
  console.log("amount :3000")
}
module.exports = {
  AddEvent,
  AllEvenement,
  updateEvent,
  deletEvent,
  getEvent,
  payer,
  getpayer

};
