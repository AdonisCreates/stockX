require('dotenv').config()
// SECRETS SECRETS SECRETS

// dependencies 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
// Constants
const PORT = process.env.PORT || 3000;
// auth
const session = require('express-session')

 
// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
// Auth
app.use(
    session({
      secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
      resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
      saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
    })
  )
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
// Auth
const userController = require('./controllers/users_controllers.js')
app.use('/users', userController);

const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController);


// Auth
app.get('/sessions/new', (req, res) => {
    res.render('sessions/New', { currentUser: req.session.currentUser });
  });
// Default Route
app.get("/", (req, res) => {
    res.redirect("/shoes");
  });

app.listen(PORT, ()=>{
    console.log('this is working' + PORT);
})