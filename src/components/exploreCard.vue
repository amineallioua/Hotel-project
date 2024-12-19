<template>
    
    <div class=" w-full   mt-5 bg-[#e2e2e280]  md:p-[25px] p-[10px] rounded-[20px] flex flex-col gap-3  ">
        <div class=" w-full   z-10 flex flex-col gap-2 ">
            <div class=" flex justify-between items-center ">
                <div class=" flex items-center gap-3 ">
                    <div class=" h-7 w-7 rounded-[50%] bg-[#3A7988] "></div>
                    <div class=" flex flex-col  gap-0 ">
                        <h1 class=" font-[500] text-[15px] text-[#3A7988] m-0 ">Username</h1>
                        <p class=" font-[400] text-[10px] text-[#3A7988] m-0">Hotelname</p>
                    </div>
                </div>
                <div>XXXXX</div>
            </div>
            <p class=" ml-8 md:text-[12px] text-[10px] font-[400] text-[#729FAA] ">Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>


        <div class=" w-full md:h-[380px]  flex sm:justify-between justify-center gap-5 ">
            <div class=" sm:min-w-[70%] sm:max-w-[70%] max-w-[200px] rounded-[20px] overflow-hidden sm:h-full h-[280px] bg-white shadow-filter ">
                <img src="../assets/aboutusImg.jpeg" class=" h-full w-full object-cover " alt="">
            </div>
            <div class=" h-full  flex flex-col gap-2 itels-center justify-center ">
                <div class=" sm:w-[120px] sm:h-[120px] w-[88px] h-[88px] rounded-[20px] overflow-hidden  bg-black " v-for=" i in 3  ">
                    <img src="../assets/aboutusImg.jpeg" class=" h-full w-full object-cover " alt="">
                </div>
            </div>
        </div>
    </div>



    <div class="  w-full h-[60px] bg-[#e2e2e280] rounded-[20px] mt-3 md:px-[25px] px-[10px] py-3  flex items-center justify-between gap-3 " >
        <div class=" h-7 w-7 rounded-[50%] bg-[#3A7988] "></div>
            <div class=" w-full h-full relative rounded-[10px] " >  
                <input type="text" class=" rounded-[10px] w-full h-full  bg-[#F5F7F7] outline-none pl-5 pr-[50px] text-[10px] " placeholder="Add your comment" >
                <button class=" absolute right-[8px] top-[10px]  text-[#4796A9] font-[500] text-[11px] " >Send</button>
            </div>
            <div class=" h-7 w-7 rounded-[50%] bg-[#3A7988] "></div>
    </div>
    <div class=" w-full flex justify-end  text-[#4796A9] text-[12px] font-[400] pr-3 items-center my-2 " > Comments </div>
    
    <div class=" w-full  bg-[#e2e2e280] rounded-[20px] md:p-[22px] p-[10px] " >



        <div class="flex flex-col w-full bg-white rounded-[20px] p-5 md:gap-5 gap-2 mb-5"  v-for="(item ) in 3"  >
            <div class=" flex items-center gap-2 " >
                <div class=" rounded-full w-7 h-7 bg-[#4796A9] " ></div> 
                <div class=" flex flex-col gap-1 " >
                    <h1 class=" font-[400] text-[16px] text-[#4796A9] leading-none " > Fullname</h1>
                    <p class=" font-[400] text-[10px] text-[#4796A9] leading-none "  >user contry</p>
                </div>
             </div>
            <div class=" w-full text-[#4796A9] md:text-[14px] text-[10px] font-[400] " >
                The Panoramic Hotel is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of Taormina and the Ionian Sea The Panoramic Hotel is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the ..... 
            </div>
        </div>




    </div>
</template>
<script>
export default {

}
</script>