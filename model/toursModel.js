const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour should have a name.'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour should have a price.'],
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration,'],
  },
  difficulty: {
    type: String,
    required: [
      true,
      'A tour must have a difficulty level.',
    ],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour should have a group size.'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a description.'],
  },
  imageCover: {
    type: String,
    requried: [true, 'A tour must have a cover image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  startDates: [Date],
});
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
