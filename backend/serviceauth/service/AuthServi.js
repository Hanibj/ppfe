
const User =require('../models/user')
const jwt =require('jsonwebtoken');
const bcrypt =require('bcrypt');



const createToken =(_id) =>{
   return jwt.sign({_id},process.env.SECRET,{expiresIn:'2d'})
}


//Sign-in 
const SigninUser = async (req,res) =>{
    const {username,password}= req.body;
    
    try{
        const user =await User.Signin(username,password);
        console.log(user.typeus)
        // create token
        const token = createToken(user._id)
        res.status(200).json({username ,typeus:user.typeus, success: true, message: 'Signin successful' })
       }catch(error){
           res.status(400).json({error:error.message})

    }





};

const SigninUsergoole = async (req,res) =>{
    const {email}= req.body;
    console.log(email)
    
    try{
        const user =await User.Signingoogle(email);
        console.log(user.typeus)
        // create token
        const token = createToken(user._id)
        res.status(200).json({username:user.username ,typeus:user.typeus, success: true, message: 'Signin successful' })
       }catch(error){
           res.status(400).json({error:error.message})

    }





};

const SigninUserFacebook = async (req,res) =>{
    const {email}= req.body;
    console.log(email)
    
    try{
        const user =await User.Signinfacebook(email);
        console.log(user.typeus)
        // create token
        const token = createToken(user._id)
        res.status(200).json({username:user.username ,typeus:user.typeus, success: true, message: 'Signin successful' })
       }catch(error){
           res.status(400).json({error:error.message})

    }





};


//Sign-up
const SignupUser = async (req,res) =>{
    const {matricule,nom,prenom,datenaiss,username,email,password,tailleentr,type,typeus}= req.body;
      
     try{
        const exists =await User.findOne({username})
        if (exists){
           throw error ('Email used')
        }
       const salt= await bcrypt.genSalt(10);
       const hash =await bcrypt.hash(password, salt);
     
         const user =await User.create({matricule,nom,prenom,datenaiss,username,email,password,tailleentr,type,typeus});
         console.log(user);
         // create token
         const token = createToken(user._id)
         res.status(200).json({username,token, success: true, message: 'Signup successful' })
        }catch(error){
            console.log(error)
            res.status(400).json({error:error.message})

     }


};

const GetProf= async (req,res) => {
    const {username}=req.params
console.log(username)
   
   


    const user= await User.findOne({username});
    
    if (!user){
    return res.status(400).json({error: 'user introvable'})
}
    res.json({status:'200',data:user})

}
const ResetPassword= async (req,res) => {
 
   console.log(req.body)
   const email=req.body.email
   
  const user= await User.findOneAndUpdate({email: email},{...req.body});
  console.log(user)
  if (!user){
  return res.status(400).json({error: 'user introvable'})
}
res.status(200).json(user)
}
/*
const AddEmpl =async (req,res)=>{

        const {matricule,nom,prenom,datenaiss,email,password,departement,chef,poste,tel}= req.body;
         try{
             const employee =await Employee.AddEmp(matricule,nom,prenom,datenaiss,email,password,departement,chef,poste,tel);
             
             // create token
             const token = createToken(employee._id)
             res.status(200).json({matricule,token})
            }catch(error){
                res.status(400).json({error:error.message})
    
         }

};*/



// const sendmail =async (req,res)=>{
//  const {recipient,subject,content}=req.body
//  let test =await nodemailer.createTestAccount()
//  var transporter = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "044c25789a2b35",
//       pass: "974ab215c03301"
//     }
//   });
//   message = {
//     from: "d0214e3109-c35343@inbox.mailtrap.io",
//     to: recipient,
//     subject: subject,
//     text: content
// }
// transporter.sendMail(message, function(err, info) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(info);
//     }})
// }

module.exports={
    SigninUser,
    SignupUser,
    GetProf,
    SigninUsergoole,
    ResetPassword,
    SigninUserFacebook
   // Redirc,
    //AddEmpl
}

