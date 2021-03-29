import axios from "axios";
const KEY = "AIzaSyB3SHe3X2UdoB8rY4lSCBdb9VueD9uAe6g";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    type: "video",
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
