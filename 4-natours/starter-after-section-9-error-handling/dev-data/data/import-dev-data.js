const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModels');

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

//Read JSON file

const tours = fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf8');

// Import data into db
const importData = async () => {
  try {
    await Tour.create(JSON.parse(tours));
    console.log('Tours created');
  } catch (e) {
    console.error(e);
  }
  process.exit();
};

// Delete all data from Collection/DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Tours deleted');
  } catch (e) {
    console.error(e);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
