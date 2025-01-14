<template>

    <div class=" w-full h-full relative justify-between  px-[50px] pt-[51px] flex  ">
        <div
            class="  overflow-scroll px-1 py-4 min-w-[20%] h-[86%] bg-[#FDFDFD] border-[1px] border-[#CDE2E7] mt-[51px] rounded-[29px] ">
            <div class="flex flex-col gap-2" > <button @click="selectroom(room._id , room)" class=" h-[38px] w-full rounded-[13px]  bg-[#4796A9] bg-opacity-10 " v-for="(room, index) in  this.chat.chats.chats "
                    :key="index"> {{ room._id }} </button>
            </div>
        </div>

        <div
            class="  overflow-hidden  lg:w-[75%]  md:w-[90%]  w-[95%] left-[2%] bg-white h-[87%] top-5 mt-[51px] rounded-[28px] shadow-chatRoom border-[1px] border-[#CDE2E7] ">
            <div class=" w-full h-[90%] p-3 ">
                <message v-for="(message, index) in this.chat.messages" :key="index" :message="message"  />

            </div>


            <div class=" w-full h-[10%]  bottom-5 relative  flex justify-center ">
                <div class=" relative md:w-[60%]  w-[80%] "> <input v-model="messageText" type="text"
                        class=" text-[16px] text-[#4796A9] pl-3 pr-5 outline-none border-[1px] border-[#4796A94F] border-opacity-30  w-full rounded-[15px] h-full  "
                        placeholder="Type a message here">
                    <button @click="sendMessage"
                        class=" absolute flex justify-center items-center h-[70%] right-[-23px] top-[15%] w-10 bg-custom-gradient rounded-[20px] "><svg
                            width="13" height="13" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.76004 9.09497L4.24651 8.25712C1.6144 7.37975 0.29834 6.94107 0.29834 6.13488C0.29834 5.3287 1.6144 4.89002 4.24651 4.01265L13.7686 0.838605C15.6207 0.221261 16.5467 -0.0874113 17.0355 0.401399C17.5243 0.890209 17.2156 1.81622 16.5983 3.66825L13.4242 13.1904C12.5469 15.8225 12.1082 17.1385 11.302 17.1385C10.4958 17.1385 10.0571 15.8225 9.17977 13.1904L8.34189 10.6768L13.2114 5.80722C13.6482 5.37041 13.6482 4.66221 13.2114 4.2254C12.7746 3.78859 12.0664 3.78859 11.6296 4.2254L6.76004 9.09497Z"
                                fill="white" />
                        </svg>
                    </button>

                </div>
            </div>




        </div>

    </div>


</template>
<script>
import { chatStore } from '../stores/chatStore';
import message from '../components/message.vue';

export default {
    data() {
        return {
            chat: chatStore(),
            messageText:'',
        }
    },
    methods:{
        selectroom(id , room ){
            this.chat.getmessages(id)
            this.chat.currentRoom = room
            console.log(this.chat.currentRoom)
        },
      async  sendMessage(){
            this.chat.sendMessage(this.messageText)
            await   this.chat.getChats()
        }
    },
    components:{
        message
    },
  async  mounted() {
        this.chat.connectSocket()
     await   this.chat.getChats()
    }
}

</script>