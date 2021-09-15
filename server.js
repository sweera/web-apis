const express = require('express');
//import express from 'express';
//Start up an instance of the app
const app = express();
app.use(express.static('website'));
//Dependencies
const bodyParser = require('body-parser');
//Middleware
//Configuring express to use body-parser as middleware
//app.use(bodyParser.urlencoded({extended:false}));
//app.use(bodyParser.json());
//cors for cross origin allowance
// const cors = require('cors');
// app.use(cors());
const port = 8000;
const server = app.listen(port,listening);
function listening(){
    console.log("Server running");
    console.log(`running on localhost: ${port}`);
}

//Dummy API Endpoint
const fakeData = {
    animal: 'lion',
    fact: 'lions are fun'
}
app.get('/fakeAnimalData', getFakeData)

function getFakeData(req, res){
    res.send(fakeData)
}

const animalData = [];

app.get('/all', getData)

function getData(req,res){
    res.send(animalData)
    console.log(animalData)
}

//POST ROUTE

app.post('/addAnimal', addAnimal);

function addAnimal(req,res){
    newEntry = {
        animal: req.body.animal,
        facts: req.body.fact,
        fav: req.body.fav
    }

    animalData.push(newEntry)
    res.send(animalData)
    console.log(animalData)
}