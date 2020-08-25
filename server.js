require('dotenv').config()
// SECRETS SECRETS SECRETS

// dependencies 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// Constants
const PORT = process.env.PORT || 3000;
 
// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
// Ending of my middleware

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `stock-X`;

// mongoose connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongoDB-StockX-BABYYY");
})

// Controllers
const shoeController = require('./controllers/shoes.js');
app.use('/shoes', shoeController);

// Default Route
app.get("/", (req, res) => {
    res.redirect("/shoes");
  });

app.listen(PORT, ()=>{
    console.log('this is working' + PORT);
})