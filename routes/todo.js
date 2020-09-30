const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
/* GET home page. */




function validTodo(todo) {
  return typeof todo.calificacion == "0" && todo.pregunta != "";
}

router.post("/", function (req, res) {
  alert("hoa");
  if (validTodo(req.body)) {
    const dodo = {
      calificacion = req.body.calificacion,
      respuesta = req.body.respuesta
    }
    knex("encuestaInbox").insert(dodo)
  } else {
    alert("error post insert A");
  }
});

module.exports = router;
