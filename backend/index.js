var express = require('express');
var app = express();
let cors = require('cors');

var bodyParser = require('body-parser')
require('./config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// View Engine Setup
app.set('view engine', 'ejs');
// View Engine Setup end

// app.use(express.static(__dirname+"./public"))
const path=require("path")

app.use(express.static(path.resolve(__dirname,'./public')))
 const userRoute=require("./routes/userRoute")
 const categoryRoute=require('./routes/categoryRoute')
 const productRoute=require('./routes/productRoute')

app.use(cors());
app.use("/users",userRoute)
app.use("/users",categoryRoute)
app.use("/users",productRoute)
// require("./nodemailer/nodemailer")


const server = app.listen(5000, () => console.log("server is running on port 5000"));
