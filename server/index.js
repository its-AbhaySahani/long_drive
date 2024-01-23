const express = require('express')
const app = express();

app.use(require('./router/auth'));


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
