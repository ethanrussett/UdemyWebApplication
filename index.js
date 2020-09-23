/*
On the server side we will be importing libraries "const express = require('express');" 
This is beacuse node does not support ES2015 Module that look like "import express from 'express';" 
*/
const express = require('express');

//Calling express likes a function we can generate multiple apps
const app = express();

/*Route Handler

app - Express App to register the route handle with
get - Watch for incoming requests with this method
'/' - Watch for incoming request trying to reach "/" (the slash is the impiled root route)
req - Object representing the incoming request
res - Object representing the outgoing response
*/
app.get('/', (req, res) => {
    res.send({hi: 'there'});
})

//This checks the underlying enviroment by Heroku (or whatever cloud) or use 5000
const PORT = process.env.PORT || 5000

// Instructs NODE to listen to PORT
app.listen(PORT);



