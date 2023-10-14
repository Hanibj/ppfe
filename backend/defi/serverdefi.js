const express = require("express");
const morgan=require("morgan");
const mongoose = require('mongoose');
const cors =require("cors");
const bodyParser = require('body-parser');
const multer =require('multer')
//======swagger====
const swaggerUi=require("swagger-ui-express");
const swaggerDoc=require("swagger-jsdoc");

//============routes=============
const defiRouter=require("./routes/defiRouter");

require('dotenv').config();
const URL= `mongodb+srv://Dopee1234:Dopee1234@cluster0.aaabxng.mongodb.net/Dopee?retryWrites=true&w=majority`; 
    // =======================
    // configuration =========
    // =======================
const upload = multer({ dest: 'uploads/' })

const router =express.Router();
mongoose.connect(URL)
    .then(() => console.log( 'Database Connected' ))
    .catch (error => console.log(error));

//swagger api config
//sawgger api options
const options ={
    definition:{
        openapi:"3.0.0",
    info:{
        title:"Dopee",
        description:'Node expressjs Dopee',
      
    },
    servers:[
        {
            url:"http://localhost:4000"
        }
    ]

    },
    apis: [ './routes/*.js'],
    
}
const spec=swaggerDoc(options)

 const   app = express();
//home routes

 app.use(cors({ credentials: true, origin: '*' }));

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));
app.use((req,res,next)=>{
  console.log(req.path,req.method)
  next()
})

//routes



app.use('/api/defi',defiRouter);

app.use("/api-doc", swaggerUi.serve,swaggerUi.setup(spec));
 app.get("/",(req,res)=>{
    res.send({message:"wemcome to dopee"});
 });






const PORT=process.env.PORT ;
app.listen(PORT, ()=>{
    console.log(`Dopee Server running at ${PORT}`);
});
module.exports = app;
