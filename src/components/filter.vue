<template>
    <div
        class=" hidden md:flex  lg:flex-col flex-row gap-5 items-between p-[20px] h-fit lg:min-w-[220px] lg:max-w-[220px]  bg-[#CEE1E5] bg-opacity-30 lg:h-[95%] mt-3 sticky rounded-[20px]  shadow-filter">
        <div class=" flex gap-2 lg:items-center "> <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4.5835L18.3333 4.5835" stroke="#4796A9" stroke-width="1.83333" stroke-linecap="round" />
                <path d="M3.6665 17.4165L5.49984 17.4165" stroke="#4796A9" stroke-width="1.83333"
                    stroke-linecap="round" />
                <path d="M3.6665 4.5835L7.33317 4.5835" stroke="#4796A9" stroke-width="1.83333"
                    stroke-linecap="round" />
                <path d="M11 17.4165L18.3333 17.4165" stroke="#4796A9" stroke-width="1.83333" stroke-linecap="round" />
                <path d="M15.5835 11L18.3335 11" stroke="#4796A9" stroke-width="1.83333" stroke-linecap="round" />
                <path d="M3.6665 11L10.9998 11" stroke="#4796A9" stroke-width="1.83333" stroke-linecap="round" />
                <circle cx="9.16667" cy="4.58333" r="1.83333" transform="rotate(90 9.16667 4.58333)" stroke="#4796A9"
                    stroke-width="1.83333" stroke-linecap="round" />
                <circle cx="13.7502" cy="10.9998" r="1.83333" transform="rotate(90 13.7502 10.9998)" stroke="#4796A9"
                    stroke-width="1.83333" stroke-linecap="round" />
                <circle cx="8.25016" cy="17.4168" r="1.83333" transform="rotate(90 8.25016 17.4168)" stroke="#4796A9"
                    stroke-width="1.83333" stroke-linecap="round" />
            </svg>
            <h1 class=" font-[500] text-[18px] text-[#4796A9] "> filters</h1>
        </div>
        <div class=" lg:h-[2px] lg:w-full  bg-[#2D555F17] my-4 md:my-0 "></div>




        <div class="flex flex-col   ">
            <div class=" flex  justify-between items-center ">
                <h3 class=" font-[500] text-[#4796A9] text-[12px]  ">Location</h3>
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4 4L1 7" stroke="#4796A9" stroke-width="1.5" />
                </svg>
            </div>
            <p class=" font-[400] text-[#4796A9] text-[10px] ">Batna</p>
        </div>

     






        <div class="flex flex-col  lg:mt-5 ">
            <div class=" flex  justify-between items-center ">
                <h3 class=" font-[500] text-[#4796A9] text-[12px]  ">Amenities and facilities</h3>
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4 4L1 7" stroke="#4796A9" stroke-width="1.5" />
                </svg>
            </div>
            <div class=" flex flex-wrap gap-2 mt-2 " >
                <checkBox v-for="(item, index) in services" :key="index" :item="item" />

            </div>
        </div>




        <div class="flex gap-1 flex-col  lg:mt-5 ">
            <div class=" flex  justify-between items-center ">
                <h3 class=" font-[500] text-[#4796A9] text-[12px]  ">Hotel rating</h3>
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4 4L1 7" stroke="#4796A9" stroke-width="1.5" />
                </svg>
            </div>
            <p class=" font-[400] text-[#4796A9] text-[10px] "><star-rating :rating="0" :star-size="15"  :show-rating="false" /></p>
        </div>



        <div class="flex flex-col  lg:mt-5 gap-1    ">
            <div class=" flex  justify-between items-center ">
                <h3 class=" font-[500] text-[#4796A9] text-[12px]  ">Price DA</h3>
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4 4L1 7" stroke="#4796A9" stroke-width="1.5" />
                </svg>
            </div>
            <div class=" flex lg:flex-row flex-col items-center justify-between " >
            <p class=" font-[400] text-[#4796A9] text-[12px] ">max</p><input type="text" class=" font-[400] text-[#4796A9] text-[14px] pl-1 outline-none w-[60px] h-[18px] border-[1px] border-solid border-[#4796A9] rounded-[10px] " >
            <p class=" font-[400] text-[#4796A9] text-[12px] ">min</p><input type="text" class=" font-[400] text-[#4796A9] text-[14px]  pl-1 outline-none w-[60px] h-[18px] border-[1px] border-solid border-[#4796A9] rounded-[10px] " >

        </div>
        </div>





    </div>
</template>
<script>
import StarRating from 'vue-star-rating'; 
import checkBox from './checkBox.vue';


export default {
    data(){
        return {
            services:["Free Wi-Fi","Parking", "Gym","Swimming pool","Restaurant","Business center","Free breakfast"]
        }
    },
    components:{
        checkBox,
        StarRating
    }

}
</script>