const express = require('express')
const router = express.Router()
const Park = require('../models/park.model')
// Aquí los endpoints

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/new-park', (req, res, next) => {
    res.render('parks/new-park');
});

router.get("/new", (req, res, next) => res.render("parks/new"));
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


module.exports = router
