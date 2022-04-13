var express = require('express');
const multer = require('multer');

const path = require("path")
const jwt=require("jsonwebtoken")
var app = express();
var bodyParser = require('body-parser')
const bcrypt = require("bcrypt")
const User = require('../models/User');


const router = express.Router()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Post method for posting data from body to database(mongodb)

router.post('/add', function (req, res) {

    const bcryptpassword = bcrypt.hashSync(req.body.password, 4)
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone:req.body.phone,
        password: bcryptpassword,
        

    });
    // save new user in db
    user.save().then((docs) => {


        return res.status(200).json({
            message: 'Data inserted successfully',
            success: true,
            data: docs
        })

        // redirecting page after successfull data insertion
        // res.redirect("/users")

    }).catch((err) => {
        return res.status(401).json({
            message: 'Error in adding new user',
            success: false,
            error: err.message
        })
    });
});








// login using frontend---------
router.post("/login", async (req, res) => {
    try {
        const name=req.body.name
        const email = req.body.email;
        const password = req.body.password;
        const userfind = await User.findOne({ email: email });

        const bcryptpassword = bcrypt.compareSync(password, userfind.password);
        if (bcryptpassword === true) {
            const token=jwt.sign({
                name,
                email,

            },"secret123")
            res.status(200).json({
                message: "login successfull",
                success: token,
            })
        } else {
            res.status(401).json({
                message: "invalid password",
                success: false
            })
        }

    } catch (error) {
        res.status(401).json({
            message: "invalid login details",
            success: false
        })

    }

})

// ===============================================================================









module.exports = router
