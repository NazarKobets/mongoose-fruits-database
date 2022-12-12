const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit

// const insertDocuments = (db, callback) => {
//   const collection = db.collection('fruits');
//   const insertResult = collection.insertMany([
//     { name: 'Tangerine',
//       score: 9,
//       review: 'Simply the best!'
//     },
//     { name: 'Pear',
//       score: '7',
//       review: 'Better version of apple'
//     },
//     {
//       name: 'Banana',
//       score: '5',
//       review: 'A bit too basic'
//     }
//   ]);
//   console.log('Inserted documents =>', insertResult);
// };

mongoose.set('strictQuery', false);
