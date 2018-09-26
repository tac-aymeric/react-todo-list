const mongoose = require('mongoose');

const db = mongoose.connect(`mongodb://${process.env.DB_HOST}`)
.then(() => {
  console.log('Successfully connected to DB');
})
.catch((err) => {
  console.error('Cannot connect to DB', err);
  process.exit(-1);
})

module.exports = db;
