const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      methodOverride = require('method-override'),
      mongoose = require('mongoose'),
      User = require('./Models/User'),
      Posters = require('.Models/Posters');
      
      app.use(bodyParser.urlencoded({extended: true}));
      app.use(express.static("public"));
      app.use(methodOverride("_method"));
      

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', '*');
   next();
});

app.get('/', (req, res) => {
    Posters.find({}, (err, posters) => {
        if(err) {
            console.log("There is an error yo", err);
            res.json({ err: "There is an error yo"});
        } else {
            res.json(posters);
        }
    });
});

app.post('/posters', (req, res) => {
    let posterObject = JSON.parse(req);
    let newPoster = {name: posterObject.name, project: posterObject.project, rating: posterObject.rating, picture: posterObject.picture};
    Posters.create(newPoster, (err, created) => {
        if(err) {
            console.log(err);
        } else {
            console.log("New poster added!");
        }
    });
});

app.post('/user', (req, res) => {
    let userObject = JSON.parse(req);
    let newUser = {username: userObject.username, password: userObject.password, rating: userObject.rating, github: userObject.github, picture: userObject.picture};
    User.create(newUser, (err, created) => {
       if(err) {
           console.log(err);
       } else {
           console.log("New user added!");
       }
    });
});