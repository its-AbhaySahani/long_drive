const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcryptjs');



require('../database/conn');
// const User = require('../models/userSchema');
// const Admin = require('../models/adminSchema');



router.get('/', (req, res) =>{
    res.send('home page router')
});


// Client Side Modules ---for-- SignIn, SignUp, SignOut, Contactform
router.use(require('../clientSideModules/signup'))
router.use(require('../clientSideModules/signin'))
router.use(require('../clientSideModules/signout'))
router.use(require('../clientSideModules/getdata'))
router.use(require('../clientSideModules/contactform'))