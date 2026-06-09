const axios = require('axios');

const client = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
});

const get = (url) => client.get(url).then((r) => r.data);
const post = (url, data) => client.post(url, data).then((r) => r.data);

module.exports = { get, post };