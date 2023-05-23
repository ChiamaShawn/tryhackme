const { MongoClient } = require('mongodb');
const bcrypt = requirie('bcrypt');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'tryhackme_taskManager';

// User document to be inserted
const user = {
  username: 'admin',
  password: await bcrypt.hash('admin@tryhackme', 10),
};

// Function to seed the database with a user
async function seedDatabase() {
  try {
    const client = new MongoClient(url);

    // Connect to the MongoDB server
    await client.connect();
    const db = client.db(dbName);

    // Insert the user document into the 'users' collection
    await db.collection('users').insertOne(user);

    console.log('User seeded successfully.');

    // Close the client connection
    client.close();
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
}

seedDatabase();