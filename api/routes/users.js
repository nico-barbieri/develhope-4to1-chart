const express = require('express');
const app = express.Router();

const jwt = require('jsonwebtoken');
const { User, Config } = require('../data');

/**
 * @path /user/login
 */
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = User.login(email, password);

  // if (!user) return res.status(403).json({ message: "Forbidden" })

  const token = jwt.sign(user, Config.SECRET_KEY);

  // delete user.password;

  return res.status(200).json({ token, user });
});

module.exports = app;
