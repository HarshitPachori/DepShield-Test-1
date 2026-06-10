const axios = require('axios');
const express = require('express');

const router = express.Router();

const fetchExternal = (url, callback) => {
  axios.get(url)
    .then(response => {
      callback(null, response.data);
    })
    .catch(error => {
      callback(error);
    });
};

const fetchUser = (userId, callback) => {
  axios.get(`https://api.example.com/users/${userId}`)
    .then(response => {
      // axios automatically parses JSON responses if the Content-Type header is application/json
      callback(null, response.data);
    })
    .catch(error => {
      callback(error);
    });
};

router.get('/users/:id', (req, res) => {
  fetchUser(req.params.id, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(user);
  });
});

module.exports = router;