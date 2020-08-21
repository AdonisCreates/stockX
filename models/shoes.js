const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating my Shoe Schema
const shoeSchema = new Schema ({
    name: { type: String, required: true},
    description: { type: String, required: true},
    img: {type: String, required: true},
    areShoesInStock: Boolean
});

//Creating a Model for the schema now

const Shoe = mongoose.model('Shoe', shoeSchema);

// Export Shoe Model

module.exports = Shoe;