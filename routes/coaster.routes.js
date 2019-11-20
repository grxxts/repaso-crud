const express = require('express')
const router = express.Router()
const Coaster = require('../models/coaster.model')

// Aquí los endpoints

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/new-coaster', (req, res, next) => {
    res.render('coasters/new-coaster');
});

router.get("/new", (req, res, next) => res.render("coaster/new"));
router.post("/new", (req, res, next) => {
    console.log(req.body)
  Park.create({

    name: req.body.name,
    description: req.body.description,
    active: true
  
   
  })
    .then(() => res.redirect("/"))
    .catch(err=>console.log(err))
});

router.get('/coasters/index', (req, res, next) => {
    res.render('coasters/coasters-index');
});




module.exports = router