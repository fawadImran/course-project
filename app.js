const express = require('express');
const morgan = require('morgan');

const app = express();

const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');
// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
// 2) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
module.exports = app;
