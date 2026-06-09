const request = require('request');
const uuid = require('node-uuid');
const moment = require('moment');

// User API
const getUser = (userId, callback) => {
  request(`https://api.example.com/users/${userId}`, (err, res, body) => {
    if (err) return callback(err);
    callback(null, JSON.parse(body));
  });
};

const createSession = () => {
  return uuid.v4();
};

const formatDate = (date) => {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
};

const isExpired = (date) => {
  return moment().isAfter(moment(date).add(7, 'days'));
};

module.exports = { getUser, createSession, formatDate, isExpired };