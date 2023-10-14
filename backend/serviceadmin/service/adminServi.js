//const Employee =require('../models/employee')
//const admin = require('../models/admin');
//const Admin = require ('../models/admin')
const mongoose=require('mongoose')
const User =require('../models/user')
const jwt =require('jsonwebtoken');
const bcrypt =require('bcrypt');
//const employee = require('../models/employee');


const createToken =(_id) =>{
   return jwt.sign({_id},process.env.SECRET,{expiresIn:'2d'})
}


//Sign-in 
const SigninAdmin = async (req,res) =>{
    const {username,password}= req.body;
    
    try{
        const user =await User.Signin(username,password);
        console.log(user)
        // create token
        const token = createToken(user._id)
        res.status(200).json({username,token})
       }catch(error){
           res.status(400).json({error:error.message})

    }





};

  


//Sign-up
const SignupAdmin = async (req,res) =>{
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
         res.status(200).json({username,token})
        }catch(error){
            console.log(error)
            res.status(400).json({error:error.message})

     }


};
const GetAdmin= async (req,res) => {
    const {id}=req.params
 
   


    const user= await User.find({_id:id});
    
    if (!user){
    return res.status(400).json({error: 'user introvable'})
}
    res.json({status:200,data:user})

}

const GetProf= async (req,res) => {
    const {username}=req.params
 
   


    const user= await User.find({username:username});
    
    if (!user){
    return res.status(400).json({error: 'user introvable'})
}
    res.json({status:200,data:user})

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
const updateAdmin= async (req,res) => {
    const {id}=req.params
     
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Admin is invalide'})
    }
    const Admin= await User.findOneAndUpdate({_id: id},{...req.body});
    if (!Admin){
    return res.status(400).json({error: 'Admin introvable'})
}
res.status(200).json(Admin)
}

//delete employée

const deletAdmin= async (req,res) => {
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Admin is invalide'})
    }
    const adm= await User.findOneAndDelete({_id: id});
    console.log(adm)
    if (!adm){
    return res.status(400).json({error: 'Admin introvable'})
}
res.status(200).json(adm)

}
const AddAdmin =async (req,res)=>{

    const {matricule,nom,prenom,datenaiss,email,username,password,type,typeus}= req.body;
   
      try{
          const admin=await User.create({matricule,nom,prenom,datenaiss,email,username,password,type,typeus});
          console.log(admin);
          // create token
         const token = createToken(admin._id)
          res.status(200).json({username,token})
         }catch(error){
             console.log(error)
             res.status(400).json({error:"invalide"})
 
      }

};
const GetAllAdmin= async (req,res) => {
    try{
     const admin= await User.find({typeus:'Admin'})
       console.log(admin)
     res.status(200).json(admin)
     }catch (error) {
         console.log(error)
         res.status(500).send(err);
       }
 }
module.exports={
    SigninAdmin,
    SignupAdmin,
    GetProf,
    updateAdmin,
    deletAdmin,
    AddAdmin,
    GetAllAdmin,
    GetAdmin
    //AddEmpl
}

