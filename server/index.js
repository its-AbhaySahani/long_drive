const express = require('express');
const { connect } = require('mongoose');
const connectDb = require('./database/conn');
const app = express();

app.use(require('./router/auth'));


// Start the server
const PORT = 5000;

connectDb().then(() => {


  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});

