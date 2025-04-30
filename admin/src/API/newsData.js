import axios from "axios";
const URL = "https://news-aggregator-qje3.onrender.com";
export const getNewsData = async (data) => {
  try {
    let res = await axios.post(`${URL}/getNewsData`, data);
    return res;
  } catch (error) {
    return error;
  }
};
