exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("preguntasIbox")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("upreguntasIbox").insert([
        {
          pregunta: "¿Hola buenas tardes",
          correo: "hola@hotmail.com",
          estado: "prendiente",
          nombre: "Miguel Hernandez",
        },
      ]);
    });
};
