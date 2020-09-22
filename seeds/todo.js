exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("preguntasIbox")
    .del()
    .then(function () {
      const pregunta = [
        {
          pregunta: "¿Hola buenas tardes",
          correo: "hola@hotmail.com",
          estado: "prendiente",
          nombre: "Miguel Hernandez",
        },
      ];
    });
};
