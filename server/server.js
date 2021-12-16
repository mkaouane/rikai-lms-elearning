import express from 'express'
import cors from 'cors'
import {readdirSync} from 'fs'
import mongoose from 'mongoose' 

// import morgan from 'morgan'
const morgan = require("morgan")
require("dotenv").config();


// create express app
const app = express();


// apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req,res,next)=> {
    console.log('this is my middleware')
    next();
})


// route
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)) )

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port : ${port}`))

// Database connection

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser : true,
}).then(() => console.log('database connected')).catch((e) => {console.log(e)})

mongoose.connection.on("error", err => {
    console.log('DB Connection error' + err.message)
})

// const Restaurants = mongoose.model('Restaurants', Schema({
//     name: String
//   }));
  
//   // Empty `filter` means "match all documents"
//   const filter = {};
//   const all =  Restaurants.find(filter);
//   console.log(all);