<template>
    <router-link to="/HotelDetails" >
    <div class=" flex items-center relative  mb-5  " >
        <div class=" md:w-[220px] md:h-[230px] w-[130px] h-[130px] absolute bg-black rounded-[20px] overflow-hidden shadow-search " >
            <img src="../assets/searchCard.jpeg" class=" w-full h-full object-cover " alt="">
        </div>


        <div class=" flex flex-col justify-between md:gap-3 gap-1 w-[90%] bg-[#e2e2e280] duration-300 ease-in-out hover:bg-[#ccc8c880] ml-[100px] md:pl-[160px] pl-[40px] md:pr-[25px] pr-[10px] md:py-[25px] py-[10px] rounded-[20px] md:h-[260px] h-[200px] " >
            <div class=" flex justify-between w-full  text-[#4796A9] font-[500] md:text-[20px] text-[16px] " > <h1>Hotel name</h1>  <p>XXXXX</p> </div>
            <div class="text-[#4796A9] font-[400] md:text-[12px] text-[8px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more </div>
            <div class=" w-full flex justify-end  text-[#4796A9] font-[500] text-[8px]"  > see more </div>
        </div>
</div>
</router-link>
</template>
<script>
export default {

}
</script>