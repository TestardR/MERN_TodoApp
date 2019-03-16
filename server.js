const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const path = require('path');
// require('dotenv').config();

// Launch server
const app = express();
const port = process.env.PORT || 5000;

// Connect to DB
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

// Set up middleware
app.use(bodyParser.json());

// Set up path
app.use('/api', routes);

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

app.use((req, res, next) => {
  res.send('Welcome to Express');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
