const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!!!');
});

app.get('/users', (req, res) => {
  res.send();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
