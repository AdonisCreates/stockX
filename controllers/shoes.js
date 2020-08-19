const express = require('express');
const router = express.Router();
const Shoes = require('../models/shoes.js');

// Index Route

router.get('/', (res, res)=> {
    res.send('shoes/Index')
});

// New

router.get('/new', (req, res)=>{
    res.render('/shoes/New');
})

module.exports = router;