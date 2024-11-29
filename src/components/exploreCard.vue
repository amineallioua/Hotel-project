<template>
    <div class=" w-full   mt-5 bg-[#e2e2e280]  p-[25px] rounded-[20px] flex flex-col gap-10  ">
        <div class=" w-full h-[118px]  z-10 flex flex-col gap-2 ">
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
            <p class=" ml-8 text-[12px] font-[400] text-[#729FAA] ">Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div class=" w-full h-[380px] flex justify-between gap-2 ">
            <div class=" min-w-[400px] rounded-[20px] overflow-hidden h-full bg-white shadow-filter ">
                <img src="../assets/aboutusImg.jpeg" class=" h-full w-full object-cover " alt="">
            </div>
            <div class=" h-full  flex flex-wrap gap-2 itels-center justify-center ">
                <div class=" w-[120px] h-[120px] rounded-[20px] overflow-hidden  bg-black " v-for=" i in 6  ">
                    <img src="../assets/aboutusImg.jpeg" class=" h-full w-full object-cover " alt="">
                </div>
            </div>
        </div>
    </div>



    <div class="  w-full h-[60px] bg-[#e2e2e280] rounded-[20px] mt-3 px-[25px] py-3  flex items-center justify-between gap-3 " >
        <div class=" h-7 w-7 rounded-[50%] bg-[#3A7988] "></div>
            <div class=" w-full h-full relative rounded-[10px] " >  
                <input type="text" class=" rounded-[10px] w-full h-full  bg-[#F5F7F7] outline-none pl-5 pr-[50px] text-[10px] " placeholder="Add your comment" >
                <h3 class=" absolute right-[8px] top-[10px]  text-[#4796A9] font-[500] text-[11px] " >Send</h3>
            </div>
            <div class=" h-7 w-7 rounded-[50%] bg-[#3A7988] "></div>
    </div>

</template>
<script>
export default {

}
</script>