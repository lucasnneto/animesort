const axios = require("axios");
const http = axios.create({
  baseURL: "https://api.jikan.moe/v4",
});
export default http;
