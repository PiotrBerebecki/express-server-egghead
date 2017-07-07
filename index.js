const express = require('express');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const users = [];
fs.readFile(path.join(__dirname, 'users.json'), 'utf8', (err, data) => {
  if (err) throw err;
  JSON.parse(data).forEach(user => {
    user.name.full = _.startCase(user.name.first + ' ' + user.name.last);
    users.push(user);
  });
});

const app = express();

app.get('/', (req, res) => {
  const html = users
    .map(user => {
      return `<a href="/${user.email}">${user.name.full}</a></br>`;
    })
    .join('');

  res.send(html);
});

// starting with mary
app.get(/^\/mary/, (req, res, next) => {
  console.log('starting with mary');
  next();
});

// wal anywhere in route
app.get(/wal/, (req, res, next) => {
  console.log('wal anywhere in route');
  next();
});

app.get('/:email', (req, res) => {
  const { email } = req.params;
  res.send(email);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
