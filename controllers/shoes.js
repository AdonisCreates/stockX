const express = require('express');
const router = express.Router();
const Shoes = require('../models/shoes.js');

// Index Route
router.get('/', (req, res)=>{
    Shoes.find({}, (error, allShoes)=> {
        res.render('Index', {
            shoes: allShoes
        });
    });
});

// New

router.get('/new', (req, res)=>{
    res.render('/shoes/New');
})

module.exports = router;