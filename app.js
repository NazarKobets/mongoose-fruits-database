const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB');

mongoose.set('strictQuery', true);

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const tangerine = new Fruit ({
      name: 'Tangerine',
      score: 9,
      review: 'Simply the best'
    });

tangerine.save();

const kiwi = new Fruit ({
  name: 'Kiwi',
  score: '7',
  rewiev: 'Solid for a fruit'
});

const orange = new Fruit ({
  name: 'Orange',
  score: '8',
  rewiev: 'Pretty awesome fruit'
});

const banana = new Fruit ({
  name: 'Banana',
  score: '4',
  rewiev: 'I don\'t like the texture'
});

Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});



kiwi.save();

// Fruit.insertMany([kiwi, orange, banana, tangerine], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Succesfully saved all the fruits to fruitsDB');
//   }
// });


const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

const Person = mongoose.model('Person', personSchema);

const person = new Person ({
name: 'John',
age: 37
});

person.save();