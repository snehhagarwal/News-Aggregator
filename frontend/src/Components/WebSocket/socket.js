import {io} from "socket.io-client";
const socket_url="http://localhost:8000";
let socket;
export const initSocket=()=>{
    if(!socket){
        socket= io(socket_url);
    }
    return socket;
}
export const listenToNewNews = (callback) => {
    if (socket) {
      socket.on('newNews', (newNewsItem) => {
        callback(newNewsItem);
      });
    }
  };
  
  export const disconnectSocket = () => {
    if (socket) {
      socket.disconnect();
      socket = null;
    }
  };
