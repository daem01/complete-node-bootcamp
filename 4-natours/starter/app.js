const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
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

app.use((req, res, next) => {
  next();
});

//// ROUTES
// Mounting router
app.use('/api/v1/tours', tourRouter); // almost like creating small sub app for individual resource, hence why tourRoute.route(/) points to root /api/v1/tours/
app.use('/api/v1/users', userRouter);

// Error Handling Routes
app.all('*', (req, res, next) => {
  // const err = new Error(`Can't find ${req.originalUrl} on this server! 💥`);
  // err.status = 'fail';
  // err.statusCode = 404;

  next(new AppError(`Can't find ${req.originalUrl} on this server! 💥`, 404));
});

// Error Handling Middleware
app.use(globalErrorHandler);

// START SERVER
module.exports = app;
