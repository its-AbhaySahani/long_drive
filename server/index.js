import express from "express";
const app = express();
const port = 3000;

app.use(require('./router/auth'));


// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
