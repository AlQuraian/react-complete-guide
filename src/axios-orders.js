import axios from "axios";

const instance = axios.create({
  baseURL: 'https://react-my-burger-c5587.firebaseio.com/'
});

export default instance;
