const path = require('path'),
  express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

import apiRouter from './routes';

let publicPath = path.join(__dirname, '../public');
console.log(publicPath);

app.use(express.static(publicPath));
app.use(apiRouter);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
