import axios from "axios";
const YTKEY = process.env.REACT_APP_YT_KEY;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    type: "video",
    part: "snippet",
    maxResults: 5,
    key: YTKEY,
  },
});
