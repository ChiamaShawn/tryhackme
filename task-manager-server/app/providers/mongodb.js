const { MongoClient } = require('mongodb');
const config = require('../config'); // Path to your config.js file

class MongoDB {
  constructor() {
    this.client = null;
    this.db = null;
  }

  async connect() {
    try {
      this.client = await MongoClient.connect(config.mongo.uri);
      this.db = this.client.db(config.mongo.dbName);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  getDB() {
    return this.db;
  }

  async disconnect() {
    try {
      await this.client.close();
      console.log('Disconnected from MongoDB');
    } catch (error) {
      console.error('Error disconnecting from MongoDB:', error);
    }
  }
}

module.exports = new MongoDB();