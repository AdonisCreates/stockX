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
    res.render('New');
})

// Delete/DESTROY
router.delete("/:id", (req, res)=> {
    Shoes.findByIdAndRemove(req.params.id, (error, shoe)=>{
        res.redirect("/shoes");
    });
});


// Update
router.put("/:id", (req, res)=> {
    req.body.areShoesInStock = req.body.areShoesInStock === "on" ? `true` : `false`;

    // Update shoe document
    Shoes.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (error, updatedModel) => {
            res.redirect("/shoes");
        }
    )
})

// Create
router.post("/", (req, res)=> {
    if(req.body.areShoesInStock === "on") {
        req.body.areShoesInStock = true;
    } else {
        req.body.areShoesInStock = false;
    }
    // Use model to create Shoe Document
    Shoes.create(req.body, (error, createdShoes)=>{
        res.redirect("/shoes")
    });
});

// Edit
router.get("/:id/edit", (req, res)=> {
    Shoes.findById(req.params.id, (error, foundShoes)=>{
        res.render("Edit")
    });
});

// Show
router.get("/:id", (req, res)=>{
    Shoes.findById(req.params.id, (error, foundShoes)=>{
        res.render("Show", {
            shoe: foundShoes,
        });
    });
});

module.exports = router;