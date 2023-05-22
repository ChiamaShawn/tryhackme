const express = require('express');
const cors = require('cors');
const mongoDB = require('./providers/mongodb');
// Configuration imports
const { port, mongo } = require('./config');

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

async function startServer(){
  await mongoDB.connect();

  app.use(express.json());

  app.use(cors());

  // Set up routes
  app.use('/auth', authRoutes);
  app.use('/tasks', taskRoutes);

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error('Error starting the server:', error);
});

process.on('SIGINT', async () => {
  // Disconnect from MongoDB
  await mongoDB.disconnect();
  process.exit(0);
});
