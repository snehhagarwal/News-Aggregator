  import axios from "axios";
  const URL = "http://localhost:8000";
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