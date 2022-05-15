import axios from "axios";

let apiUrl = "https://haterbackend.herokuapp.com";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
