const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');


const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    console.log('here?');
    // res.send(`${Date.now()}`);
    res.render('index');
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.myApp = functions.https.onRequest(app);
