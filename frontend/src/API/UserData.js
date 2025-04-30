  import axios from "axios";
  const URL = "https://news-aggregator-qje3.onrender.com";
  export const getUser = async (data) => {
    try {
      let res = await axios.post(`${URL}/UserLogin`, data);
      return res;
    } catch (error) {
      return error;
    }
  };
  export const AddUser = async (data) => {
    try {
      console.log(data);
      let res = await axios.post(`${URL}/UserSignup`, data);
      return res;
    } catch (error) {
      return error;
    }
  };