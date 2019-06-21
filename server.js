const express = require('express');
const db = require('./models');

const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/mariners', function(req,res) {
    db.mariner.findAll().then(function(mariners) {
        res.json(mariners);
    });
});

app.get('/mariners/:id', function(req,res) {
    db.mariner.findOne({
        where: {id: parseInt(req.params.id)}
    }).then(function(mariner) {
        res.json(mariner);
    });
});

app.post('/mariners', function(req, res) {
    db.mariner.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: parseInt(req.body.age),
        position: req.body.position
    }).then(function(data) {
        console.log(data);
        res.json(data);
    })
});

app.put('/mariners/:id', function(req,res) {
    db.mariner.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: parseInt(req.body.age),
        position: req.body.position
    }, {
        where: {id: parseInt(req.params.id)}
    }).then(function(count) {
        res.json(count);
    });
});


app.delete('/mariners/:id', function(req,res) {
    db.mariner.destroy({
        where: {id: parseInt(req.params.id)}
    }).then(function(data) {
        res.json(data);
    });
});

app.listen(3000, function () {
    console.log("ooooo yaaaaaaa");
});