# Express server

Code along with [Getting Started with Express.js course on egghead.io](https://egghead.io/lessons/node-js-create-a-basic-server-with-express)

## Notes

- `npm init -y` to accept defaults

- `npm i -D nodemon` shorthand for `npm install --dev nodemon`

- Express uses [path-to-regexp](https://www.npmjs.com/package/path-to-regexp) for matching the route paths; see the path-to-regexp documentation for all the possibilities in defining route paths.

```js
// starting with mary
app.get(/^\/mary/, (req, res, next) => {
  console.log('starting with mary');
  next();
});

// wal anywhere in route
app.get(/wal/, (req, res, next) => {
  console.log('wal anywhere in route');
  next();
```
});

- To observe changes in hbs files using nodemon:
`"nodemon server.js -e js,hbs"`

- To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

Pass the name of the directory that contains the static assets to the express.static middleware function to start serving the files directly. For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:
```js
app.use(express.static('public'));
```
