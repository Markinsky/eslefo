// Update with your config settings.

const { Connection } = require("pg");

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "eslefodb",
      user: "postgres",
      password: "7734",
    },
  },
};
