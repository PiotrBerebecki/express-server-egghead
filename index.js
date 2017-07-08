const express = require('express');
const fs = require('fs');
const path = require('path');
const hbs = require('hbs');
const uppercase = require('./views/helpers/uppercase');
const propercase = require('./views/helpers/propercase');

let users;
fs.readFile(path.join(__dirname, 'users.json'), 'utf8', (err, data) => {
  if (err) throw err;
  users = JSON.parse(data);
});

const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
hbs.registerHelper('uppercase', uppercase);
hbs.registerHelper('propercase', propercase);

app.get('/', (req, res) => {
  res.render('home', {
    pageTitle: 'List of users',
    pageHeading: 'List of users',
    users,
  });
});

app.get('/:username', (req, res) => {
  const { username } = req.params;
  res.render('user', {
    pageTitle: 'User pages',
    pageHeading: 'User page',
    username,
    layout: false,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
