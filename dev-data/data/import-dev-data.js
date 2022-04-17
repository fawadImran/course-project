const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const Tour = require('../../model/toursModel');

dotenv.config({ path: '../../config.env' });
mongoose
  .connect(process.env.DATABASE_URL, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: false,
  })
  .then(() =>
    console.log(
      'Connection established successfully with Database.'
    )
  );
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// IMPORT JSON DATA IN JSON
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data imported successfully.');
    process.exit();
  } catch (err) {
    console.log(err.message);
  }
};

// DELETE DATA FROM COLLECTION / DATABASE
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data deleted successfully.');
    process.exit();
  } catch (err) {
    console.log(err.message);
  }
};
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
