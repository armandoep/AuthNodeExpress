const mongoose = require('mongoose')

const dbName = "Auth-db";

module.exports = {
  connect: () => mongoose.connect("mongodb://localhost/" + dbName),
  dbName,
  connection: () => {
    if (mongoose.connection) return mongoose.connection;

    console.log('Connected to database')
    return this.connect();
  },
};