// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "7734",
      database: "eslefodb",
      charset: "utf8",
    },
    migrations: {
      directory: "/migrations/",
    },
    seeds: {
      directory: "/seeds/todo.js",
    },
  },
};
