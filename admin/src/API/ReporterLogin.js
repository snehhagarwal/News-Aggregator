import axios from "axios";
const URL = "https://news-aggregator-qje3.onrender.com";
export const loginReporter = async (data) => {
  try {
    console.log(data);
    let res = await axios.post(`${URL}/loginReporter`, data);
    return res;
  } catch (error) {
    return error;
  }
};
export const RepPostAdd=async (data)=>{
  try{
    console.log(data);
    let res=await axios.post(`${URL}/RepPostAdd`,data);
    return res;
  }catch(error){
    return error;
  }
}
