const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const mongoDb = require('../providers/mongodb');

const config = require('../config');

const login = async (req, res) => {
  const { username, password } = req.body;

  const db = mongoDb.getDB();
  const UserRepo = db.collection(config.collections.USER_COLLECTION);

  try {
    // Find the user in the MongoDB collection
    const user = await UserRepo.findOne({ username });

    // If user does not exist, return an error
    if (!user) {
      res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password is not valid, return an error
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, config.jwt.secret, { expiresIn: '1h' });

    // Return the token
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const register = async (req, res) => {
  const db = mongoDb.getDB();
  const UserRepo = await db.collection(config.collections.USER_COLLECTION);

  const { username, password } = req.body;

  try {
    // Check if the username already exists
    const user = await UserRepo.findOne({ username });
    console.log(user);
    if(user){
      res.status(409).json({ message: 'Username already exists' });
    }
    const newUser = await UserRepo.insertOne({ username, password: await bcrypt.hash(password, 10) });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}



module.exports = { login, register };