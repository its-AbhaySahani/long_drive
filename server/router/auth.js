const express = require('express');
// const jwt = require('jsonwebtoken');
const router = express.Router();
// const bcrypt = require('bcryptjs');



require('../database/conn');
// const User = require('../models/userSchema');
// const Admin = require('../models/adminSchema');
// const Salecar = require('../models/salecarSchema');
// const Cart = require('../models/cartSchema');
// const Rentcar = require('../models/rentcarSchema');
// const Rentcart = require('../models/rentcartSchema');
// const Salecarincomes = require('../models/saleCarIncomeSchema');
// const Rentcarincomes = require('../models/rentCarIncomeSchema');
// const Salecarreviews = require('../models/carreviewSchema');
// const Rentcarreviews = require('../models/rentcarreviewSchema');




router.get('/', (req, res) =>{
    res.send('home page router')
});


// Client Side Modules ---for-- SignIn, SignUp, SignOut, Contactform

router.use(require('../routes/signin'))
router.use(require('../routes/signup'))
router.use(require('../routes/signout'))
router.use(require('../routes/getdata'))



module.exports = router;
