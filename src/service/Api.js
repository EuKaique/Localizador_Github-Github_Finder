import axios from "axios";

// SERVIDOR DA API: http://localhost:3000/ 

const Api = axios.create({
  baseURL: "https://api.github.com",
});

export default Api;