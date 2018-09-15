const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      methodOverride = require('method-override'),
      mongoose = require('mongoose'),
      User = require('./Models/User'),
      Posters = require('./Models/Posters');
      
      require('dotenv').config();
      app.use(bodyParser.urlencoded({extended: true}));
      app.use(bodyParser.json());
      app.use(express.static("public"));
      app.use(methodOverride("_method"));
      


app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', '*');
   next();
});

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});

app.get('/posters', (req, res) => {
    Posters.find({}, (err, posters) => {
        if(err) {
            console.log("There is an error yo", err);
            res.json({ err: "There is an error yo"});
        } else {
            res.json(posters);
        }
    });
});

app.post('/posters/new', (req, res) => {
    let posterObject = req.body;
    let newPoster = {name: posterObject.name, project: posterObject.project, rating: posterObject.rating, picture: posterObject.picture};
    Posters.create(newPoster, (err, created) => {
        if(err) {
            console.log(err);
        } else {
            res.json(newPoster)
            console.log("New poster added!");
        }
    });
});

app.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if(err) {
            console.log("There is an error yo", err);
            res.json({ err: "There is an error yo"});
        } else {
            res.json(users);
        }
    });
});

app.post('/users/new', (req, res) => {
    let userObject = req.body;
    let newUser = {username: userObject.username, password: userObject.password, rating: userObject.rating, github: userObject.github, picture: userObject.picture};
    User.create(newUser, (err, created) => {
       if(err) {
           console.log(err);
           res.json({ err: "There is an error yo"});
       } else {
           res.json(newUser);
           console.log("New user added!");
       }
    });
});

app.listen(process.env.PORT, process.env.IP, () => console.log(`running port on: ${process.env.PORT}`));