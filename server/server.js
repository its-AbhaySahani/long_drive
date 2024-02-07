const express = require('express');
const { connect } = require('mongoose');
const connectDb = require('./database/conn');
const app = express();
const cors=require("cors");



app.use(cors())
app.use(express.json())
app.use(require('./router/auth'));


// Start the server
const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});

