const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
/* GET home page. */


router.get("/new", function (req, res){
  res.render("new");
});



function validTodo(todo) {
  return typeof todo.calificacion == "0" && todo.pregunta != "";
}
router.post("/", function (req, res) {
  if (validTodo(req.body)) {
    const dodo = {
      calificacion = req.body.calificacion,
      respuesta = req.body.respuesta
    }
    knex("encuestaInbox").insert(todo)
  } else {
    alert("error post insert A");
  }
});

module.exports = router;
