const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/route', (req, res) => {
    res.send(`${Date.now()}`);
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest(app);
