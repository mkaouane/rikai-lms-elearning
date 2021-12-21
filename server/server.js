import express from 'express'
import cors from 'cors'
import {readdirSync} from 'fs'
import mongoose from 'mongoose' 
import csrf from 'csurf'
import cookieParser from 'cookie-parser'

// import morgan from 'morgan'
const morgan = require("morgan")
require("dotenv").config();

const csrfProtection = csrf({cookie: true});

// create express app
const app = express();


// apply middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use(morgan("dev"));
app.use((req,res,next)=> {
    console.log('this is my middleware')
    next();
})


// route
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)) )

// csrf
app.use(csrfProtection);
app.get('/api/csrf-token', (req, res) => {
    res.json({csrfToken: req.csrfToken()});
})

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