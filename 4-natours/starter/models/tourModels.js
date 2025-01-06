const mongoose = require('mongoose');

// Create schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour name is required'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour duration is required'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour max group size is required'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour difficulty is required'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour price is required'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour summary is required'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A tour image is required'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});
// Create model
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;

// // Create tour
// const testTour = new Tour({
//   name: 'The Park Camper',
//   price: 389,
// });
// // Send tour to DB
// testTour
//   .save()
//   .then(doc => {
//     console.log(doc);
//   })
//   .catch(err => {
//     console.log(`ERROR: ${err}`);
//   });
