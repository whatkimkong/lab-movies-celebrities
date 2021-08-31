// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const CelebrityModel = require ("../models/Celebrity.model")
// all your routes here

/* GET home page */
router.get("/celebrities/create", (req, res, next) => {
    res.render("celebrities/create");
  });

router.post("/celebrities/create", (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    CelebrityModel.create({ name, occupation, catchPhrase })
        .then((celeb) => {
            console.log(celeb)
            res.redirect("/celebrities");
        })
    .catch((err) => {
        console.log(err)
    })
  });


module.exports = router;