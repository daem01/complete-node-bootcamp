const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//// MIDDLEWARES
// Third party middleware
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

// Creating our own middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware 🥳');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//// ROUTES
// Mounting router
app.use('/api/v1/tours', tourRouter); // almost like creating small sub app for individual resource, hence why tourRoute.route(/) points to root /api/v1/tours/
app.use('/api/v1/users', userRouter);

// START SERVER
module.exports = app;
