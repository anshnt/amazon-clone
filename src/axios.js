import axios from "axios";

const instance = axios.create({
  baseURL: "https://ansh-amazon-clone.herokuapp.com/",
});
// http://localhost:5001/fir-9080e/us-central1/api

export default instance;