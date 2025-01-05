const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<db_password>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log('Database Connected');
  });

// Create schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour name is required'],
    unique: true,
    trim: true,
  },
  // rating: Number,
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour price is required'],
  },
});
// Create model
const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
  name: 'The Park Camper',
  price: 389,
});

testTour
  .save()
  .then(doc => {
    console.log(doc);
  })
  .catch(err => {
    console.log(`ERROR: ${err}`);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
