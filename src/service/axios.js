const axios = require('axios');
const http = axios.create({
  baseURL: 'https://api.jikan.moe/v3',
});
export default http;