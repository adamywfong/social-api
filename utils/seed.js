const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomText} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
      await connection.dropCollection('thoughts');
    }


  // Create empty array to hold the students
  const users = [];

  // Loop 20 times -- add users to the user array
  for (let i = 0; i < 20; i++) {
  
    const username = getRandomName();
    const email = `${username}${Math.floor(Math.random() * (100))}@gmail.com`;

    users.push({
      username,
      email
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
