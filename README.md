# Express server

Code along with [Getting Started with Express.js course on egghead.io](https://egghead.io/lessons/node-js-create-a-basic-server-with-express)

## Notes

- `npm init -y` to accept defaults
- `npm i -D nodemon` shorthand for `npm install --dev nodemon`
- Express uses [path-to-regexp](https://www.npmjs.com/package/path-to-regexp) for matching the route paths; see the path-to-regexp documentation for all the possibilities in defining route paths.

## Steps

1. Basic setup

  ```js
  const express = require('express');

  // create instance of an express app
  const app = express();

  // when you get an http get request, execute the callback
  app.get('/', (req, res) => {
    res.send('Hello world');
  });

  app.listen(3000);
  ```

1. Add feedback

  ```js
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  ```

1. Create `start` command in `packege.json` and install `nodemon` as dev dependency

  ```js
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```

1.

  ```js

  ```
