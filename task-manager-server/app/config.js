module.exports = {
  port: process.env.PORT || 3000, // Port number for the Express server

  // MongoDB configuration
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost',
    dbName: 'tryhackme_taskManager', // MongoDB connection URI
     // MongoDB collection where tasks will be stored
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  collections: {
    USER_COLLECTION: 'users',
    TASK_COLLECTION: 'tasks',
  },
  // JWT configuration
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key', // JWT secret key for signing and verifying tokens
    expiresIn: '1d', // Token expiration time
  },
};