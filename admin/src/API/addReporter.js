import axios from "axios";
const URL = "https://news-aggregator-qje3.onrender.com";
export const addReporterAPI = async (data) => {
  try {
    console.log(data);
    let res=await axios.post(`${URL}/addReporter`,data);
    return res;
  } catch (error) {
    return error;
  }
};