var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    
    matricule : { type: Number, required: true, unique:true },
    nom : { type: String, required: true },

    prenom : { type: String, required: true },
    datenaiss : { type: String, required: true },
    username:{type: String, required: true,unique:true},

    email : { type: String, required: true, unique: true },
    password : { type: String, required: true },
    tailleentr : { type: Number },
    type : { type: String },
    departement: { type: String},
    poste: { type: String},
    chef: { type: Boolean },
    score:{type:Number},
    typeus: { type: String, required: true },
    tel: { type: Number},
  
  


});
userSchema.statics.Signin= async function(username,password){
        

    if(!username || !password){
        throw Error('les champs sont vides');
    }
    const user =await this.findOne({username})
    
    if (!user){
      throw error ('incorrect email');
    }
    
    //const match = await bcrypt.compare(password, user.password)
    
    if (!(password=== user.password)){
        throw Error('incorrect mdp')
    }
    ts=user.typeus
    
    return (user);
}
module.exports = mongoose.model('User', userSchema);