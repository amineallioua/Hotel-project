import { defineStore } from "pinia";
import { io } from "socket.io-client";
import { authStore } from "./authStore";
import axios from "../services/axios";


export const chatStore = defineStore("chat", {
  state: () => ({
    socket: null, // Socket instance
    isConnected: false, // Connection status
    auth:authStore(),
    chats:[],
    messages:[],
    currentRoom:null,
  }),
  actions: {
   
    connectSocket() {
      if (this.socket) {
        console.warn("Already connected to the socket server.");
        return;
      }
      const userId = this.auth.User._id || this.auth.User.userId;
      this.socket = io("http://localhost:5000" , {query:{ userId }});

      // Listen for connection events
      this.socket.on("connect", () => {
        this.isConnected = true;
        console.log("Connected to the socket server.");
      });

      this.socket.on("newMessage" , (message)=>{
        this.messages = [...this.messages, message];
        console.log(message)
      } )

      // Listen for disconnection events
      this.socket.on("disconnect", () => {
        this.isConnected = false;
        console.log("Disconnected from the socket server.");
      });

    },

   
    disconnectSocket() {
      if (!this.socket) {
        console.warn("No active socket connection to disconnect.");
        return;
      }

      this.socket.disconnect();
      this.socket = null;
      this.isConnected = false;
      console.log("Socket connection closed.");
    },

  async  createRoom( customer , owner ){
      try{
        const response = await axios.post( 'chat/create' , { customer , owner  } )
        const result = response.data
        console.log(result)
      }catch(error){
        console.log(error)
      }
    },

    async  getChats(){
      try{
        let userId = ''
        this.auth.User._id ?  userId = this.auth.User._id : userId = this.auth.User.userId  
        console.log(userId)
        const response = await axios.post( 'chat/all' ,  { userId }   )
        const result = response.data
        this.chats = result
        console.log(result)
      }catch(error){
        console.log(error)
      }
    },

    async  getmessages(id){
      try{
   
        const response = await axios.get( `chat/${id}/messages` , {}   )
        const result = response.data
        this.messages = result.messages
        console.log(result)
      }catch(error){
        console.log(error)
      }
    },

    async sendMessage(message){
      
      const chatId = this.currentRoom._id
      const receiverId = this.auth.User._id == this.currentRoom.customer ? this.currentRoom.owner : this.currentRoom.customer 
      try{
        const response = await axios.post('chat/send' , { chatId , receiverId , message } )
        const result = response.data
        this.messages.push({ 'content':message , 'senderId':this.auth.User._id })
        console.log(result)
      }catch(error){
        console.log(error)
      }
    }

    
  

 
  },
});
