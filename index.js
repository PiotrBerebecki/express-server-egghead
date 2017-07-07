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
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
hbs.registerHelper('uppercase', uppercase);
hbs.registerHelper('propercase', propercase);

app.get('/', (req, res) => {
  // const html = users
  //   .map(user => {
  //     return `<a href="/${user.email}">${user.name.full}</a></br>`;
  //   })
  //   .join('');

  res.render('home', {
    pageTitle: 'Handlebars',
    siteHeading: 'Welcome to Handlebars',
    pageHeading: 'List of users',
    users: users,
    siteFooter: 'Contact us @UsersPage',
  });
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
