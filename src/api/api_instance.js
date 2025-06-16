import axios from "axios";
const instance = axios.create({
  baseURL: "https://www.ehlcrm.theskyroute.com/api",

  headers: { 
    "Content-Type": "application/json",
    timeout: 1000,
  },
});

export default instance;
