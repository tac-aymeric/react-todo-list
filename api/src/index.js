const express = require('express');
const showRoutes = require('express-routemap');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const todoRouter = require('./todo-router.js');

const app = express()
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const db = require('./db.js');

const { 
  PORT = 8080
} = process.env;

app.use('/todos', todoRouter);

app.use((err, req, res, next) => {
  console.error('Error :', err);
  const { statusCode, message } = err;
  if (statusCode) {
    res.status(statusCode);
    res.json({
      error: message,
    });
  } else {
    res.status(500);
    res.json({
      error: "An internal error occured",
    })
  }
})

app.listen(PORT, function () {
  console.log(`Server running and listening on port ${PORT}.`);
  console.log('Available routes are :');
  showRoutes(app);
})
