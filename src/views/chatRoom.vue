<template>

    <div class=" w-full h-full relative  pt-[51px] ">
        <img src="../assets/chatroom.jpeg" class=" w-full h-full object-cover opacity-20 " alt="">
        <div
            class=" absolute overflow-hidden  lg:w-[80%] lg:left-[10%] md:w-[90%] md:left-[5%] w-[95%] left-[2%] bg-white h-[87%] top-5 mt-[51px] rounded-[28px] shadow-chatRoom border-[1px] border-[#CDE2E7] ">
            <div class=" w-full h-[90%]  "></div>



            <div class=" w-full h-[10%]  bottom-5 absolute  flex justify-center ">

                <div class=" relative md:w-[526px]  w-[80%] "> <input type="text"
                        class=" text-[16px] text-[#4796A9] pl-3 pr-5 outline-none border-[1px] border-[#4796A94F] border-opacity-30  w-full rounded-[15px] h-full  "
                        placeholder="Type a message here">
                    <button
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

export default {
    data(){
        return{
            chat:chatStore()
        }
    },
    mounted(){
        this.chat.connectSocket()
    }
}

</script>