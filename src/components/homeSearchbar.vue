<template>
<div class=" relative flex w-[746px] h-[100px] p-4 gap-4 rounded-[19px] bg-white shadow-custom " >

    <div class=" w-[210px] h-full bg-custom-gradient1  rounded-[14px] shadow-custom border-[1px] border-opacity-10 border-[#4796A91A]  px-[15px] justify-center flex flex-col  gap-[10px]  " >
        <h3 class=" text-[#4B4B4B] font-[500] text-[14px] " >Location</h3>
        <input class=" text-[10px] outline-none " type="text" placeholder="check your location here check your location here check your  " >
    </div>


    <div class=" w-[210px] h-full bg-custom-gradient1 rounded-[14px] shadow-custom border-[1px] border-opacity-10 border-[#4796A91A] px-[15px] py-[9px] flex flex-col justify-center  gap-[10px] " >
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
    <div class=" w-[210px] h-full bg-custom-gradient1 rounded-[14px] shadow-custom border-[1px] border-opacity-10 border-[#4796A91A] px-[15px] py-[9px]  flex flex-col justify-center  gap-[10px] " >
        <h3 class=" text-[#4B4B4B] font-[500] text-[14px] " >Number of people</h3>
        <input class=" text-[10px] outline-none" type="text" placeholder="add number of peapole add number of peapole add number  " >

    </div>
    <router-link to="/search">
    <button class=" absolute w-[108px] h-[60px] rounded-[19px] bg-custom-gradient  right-[-65px] top-6 flex justify-center items-center " >
        <svg width="44" height="35" viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52.4832 22L53.8974 23.4142L55.3116 22L53.8974 20.5858L52.4832 22ZM2.48315 20C1.37859 20 0.483154 20.8954 0.483154 22C0.483154 23.1046 1.37859 24 2.48315 24V20ZM33.8974 43.4142L53.8974 23.4142L51.0689 20.5858L31.0689 40.5858L33.8974 43.4142ZM53.8974 20.5858L33.8974 0.585785L31.0689 3.41422L51.0689 23.4142L53.8974 20.5858ZM52.4832 20H2.48315V24H52.4832V20Z" fill="white"/>
</svg>

    </button>
</router-link>
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