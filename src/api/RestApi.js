import Axios from "axios";

export default Axios.create({
  baseURL: "http://localhost:8000/",
  // baseURL: "https://miniblogs-s2iy.onrender.com",
});
