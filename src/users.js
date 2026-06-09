const request = require('request');
const uuid = require('node-uuid');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchUsers = (callback) => {
  request({ url: `${BASE_URL}/users`, json: true }, (err, res, body) => {
    if (err) return callback(err);
    callback(null, body);
  });
};

const fetchUserById = (id, callback) => {
  request({ url: `${BASE_URL}/users/${id}`, json: true }, (err, res, body) => {
    if (err) return callback(err);
    callback(null, body);
  });
};

const generateUserId = () => uuid.v4();

module.exports = { fetchUsers, fetchUserById, generateUserId };