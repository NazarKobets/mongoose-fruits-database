const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, {useNewUrlParser: true});

// Database Name
const dbName = 'fruitsDB';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

  const collection = db.collection('fruits');
  const insertResult = await collection.insertMany([
    { name: 'Tangerine',
      score: 9,
      review: 'Simply the best!'
    },
    { name: 'Pear',
      score: '7',
      review: 'Better version of apple'
    },
    {
      name: 'Banana',
      score: '5',
      review: 'A bit too basic'
    }
  ]);
  console.log('Inserted documents =>', insertResult);