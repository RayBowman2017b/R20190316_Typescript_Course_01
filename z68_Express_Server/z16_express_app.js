
//  node_app.js
//  K:\A01_Udemy\C026_TypeScript_01\Preliminary\a08_Course_Workspace\Course-Workspace\Course Workspace\z68_Express_Server\node_app.js

//  node node_app.js
//  http://localhost:3000/

const express = require('express')
const app = express()
const port = 3000

var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});


//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => {
    console.log(req.query);
    //res.sendFile(__dirname + '/SEC010/index.html');
    res.sendFile(__dirname + '/SEC006/index.html');
} );

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))

requirejs(['app'], function (app) {
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
} )
        } )
