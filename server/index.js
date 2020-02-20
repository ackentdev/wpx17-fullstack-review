// Dependencies
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
// Import variables
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const {login, register, logout, userSession} = require('./controller/authCtrl')
// top-level middleware
const app = express();
app.use(express.json());

// set up session
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));

// connect to db via massive
massive(CONNECTION_STRING).then( db => {
    console.log('connected to db')
    app.set('db', db)
}).catch( err => console.log(err))

// endpoints
// AUTH
app.post('/auth/login', login);
app.post('/auth/register', register);
app.get('/auth/userSession', userSession);
app.get('/api/logout', logout);
// MEMES


// run server on our port
app.listen(SERVER_PORT, () => console.log(`Say hello to my little ${SERVER_PORT}`))