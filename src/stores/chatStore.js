import { defineStore } from "pinia";
import { io } from "socket.io-client";
import { authStore } from "./authStore";


export const chatStore = defineStore("chat", {
  state: () => ({
    socket: null, // Socket instance
    isConnected: false, // Connection status
    auth:authStore()
  }),
  actions: {
   
    connectSocket(serverUrl) {
      if (this.socket) {
        console.warn("Already connected to the socket server.");
        return;
      }

      this.socket = io("http://localhost:5000" , {query:{userId:this.auth.User._id }});

      // Listen for connection events
      this.socket.on("connect", () => {
        this.isConnected = true;
        console.log("Connected to the socket server.");
      });

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

  

 
  },
});
