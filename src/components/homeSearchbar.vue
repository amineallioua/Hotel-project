<template>
<div class=" relative flex w-[933px] h-[125px] p-4 gap-4 rounded-[19px] bg-white  " >

    <div class=" w-[263px] h-full bg-custom-gradient1  rounded-[14px] shadow-custom border-[1px] border-opacity-10 border-[#4796A91A]  px-[15px] justify-center flex flex-col  gap-[10px]  " >
        <h3 class=" text-[#4B4B4B] font-[500] text-[14px] " >Location</h3>
        <input class=" text-[10px] outline-none " type="text" placeholder="check your location here check your location here check your  " >
    </div>
    <div class=" w-[263px] h-full bg-custom-gradient1 rounded-[14px] shadow-custom border-[1px] border-opacity-10 border-[#4796A91A] px-[15px] py-[9px] flex flex-col justify-center  gap-[10px] " >
        <h3 class=" text-[#4B4B4B] font-[500] text-[14px] " >Check  <span class=" opacity-50 " > (in/out)  </span>date </h3>
        
        <div class="flex gap-10 " > 
        <div class=" flex flex-col " >
            <span class="text-[#4B4B4B] font-[500] text-[10px] opacity-50 " > check in </span>
            <VueDatePicker  :enable-time-picker="false" time-picker-inline  />
        </div>
        <div class=" flex flex-col " >
            <span class="text-[#4B4B4B] font-[500] text-[10px] opacity-50 " > check out </span>
            <VueDatePicker  :enable-time-picker="false" time-picker-inline  />
        </div>

    </div>

    </div>
    <div class=" w-[263px] h-full bg-custom-gradient1 rounded-[14px] shadow-custom border-[1px] border-opacity-10 border-[#4796A91A] px-[15px] py-[9px]  flex flex-col justify-center  gap-[10px] " >
        <h3 class=" text-[#4B4B4B] font-[500] text-[14px] " >Number of people</h3>
        <input class=" text-[10px] outline-none" type="text" placeholder="add number of peapole add number of peapole add number  " >

    </div>
    <button class=" absolute w-[136px] h-[75px] rounded-[19px] bg-custom-gradient  right-[-65px] top-6 " ></button>
</div>

</template>
<script>
export default {
    
}
</script>
<style>
/* Example of optional custom styling for the datepicker popup */

.dp__input {
    width: 50px;
}
</style>