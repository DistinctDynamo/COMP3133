const express = require('express');
const userModel = require('../models/users.js');
const app = express();

app.post('/user', async (req, res) => {
  
    console.log(req.body)
    const user = new userModel(req.body);
    
    try {
      await user.save();
      res.status(201).send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = app