<template>
    <div class=" w-full h-full text-black flex pt-[64px] bg-opacity-10  bg-[#2D555F]">
        <div class="   w-[115px] "></div>
        <div class="  w-full bg-red-100 rounded-[19px]  overflow-hidden relative ">
            <div class=" absolute bg-[#2D555F] bg-opacity-50 w-full h-full "></div>
            <div class=" absolute w-full h-full  flex  flex-col justify-center items-center ">
                <h1 class=" text-[45px] font-[500] text-white mb-[60px] "> Choose your next <span
                        class=" text-[#4796A9] bg-white bg-opacity-90 rounded-[14px] "> destination</span> </h1>
                <searchbar />
                <div class=" flex justify-end font-[500] text-[14px] text-white w-[933px] mt-[60px] "> Explore more
                    hotels </div>
            </div>
            <img src="../assets/heroimg.jpeg" class=" object-cover h-full w-full " alt="">
        </div>
    </div>

    

    <div class="  w-full pt-[64px] pb-10 px-[115px] bg-gray-100  ">
        <div class=" flex justify-between text-[#4796A9] font-[500] my-5 ">
            <h3 class="text-[28px]">Hotels</h3>
            <p class="text-[14px]">Explore more hotels</p>
        </div>
        <div class=" flex flex-wrap gap-10 justify-center ">
            <hotelsCard v-for="i in 6 " />
        </div>

    </div>





    <div class=" w-full h-full   rounded-[20px] relative">
        <div class="bg-[#4796A9] opacity-20 absolute h-full w-full "></div>
        <div class=" absolute w-full h-full flex justify-center items-center ">
            <div
                class=" w-[530px] h-[559px] rounded-[20px] backdrop-blur-[31px] flex justify-center items-center p-[80px] ">
                <div
                    class=" w-full h-full bg-white rounded-[20px] shadow-custom flex flex-col items-center p-[28px] gap-[27px] ">
                    <h3 class=" font-[500] text-[28px] text-[#51747C] "> About us </h3>
                    <p class=" font-[400] text-[#729FAA] text-[14px] ">Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
        <img src="../assets/aboutusImg.jpeg" class="   object-cover w-full h-full " alt="">
    </div>


    <div class=" w-full h-full bg-white flex flex-col items-center justify-center gap-[77px] " >
        <h1 class=" text-white font-[500] text-[34px] bg-custom-gradient text-center w-[750px] rounded-[20px] " >DISCOVER UNIQUE PLACES AND EXPERIENCES</h1>
        <div class="relative w-[860px] h-[200px] bg-[#2E3C40] rounded-[50px] flex  items-center  " >
            <img src="../assets/heroimg.jpeg" class=" absolute opacity-30 w-full h-full object-cover rounded-[50px] " alt="">
            <button class=" absolute w-[178px] h-[85px] bg-custom-gradient right-[-85px] rounded-[20px] shadow-custom " ></button>
            <input type="text" placeholder="Enter your email" class=" z-10 w-[670px] h-[85px] rounded-[20px] bg-white text-[15px] ml-[52px] font-[400]  pl-[50px] outline-none  "  >

        </div>
    </div>

</template>
<script>
import searchbar from '../components/homeSearchbar.vue'
import hotelsCard from '../components/hotelsCard.vue'
export default {
    components: {
        searchbar,
        hotelsCard
    }
}
</script>