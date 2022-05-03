import axios from "axios";

let apiUrl = "";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
