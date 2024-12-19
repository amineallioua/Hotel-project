<template>
<div class=" w-full h-[51px] bg-[#f7fdff]  md:px-[65px] px-5 flex justify-between items-center fixed z-10 " >
    <h2 class="md:w-[194px] w-[100px] text-[#4796A9] text-[16px] font-[500] " > <router-link to="/"> Booking</router-link> </h2>
    <router-link  class=" p-0 m-0 h-full " to="/explore" >
        <button class=" md:w-[194px] w-[100px] h-full rounded-[7px] bg-custom-gradient  text-white text-[12px] font-[500] " >Explore hotels</button>
    </router-link>
        <div class=" md:w-[194px] w-[100px] h-full rounded-[19px]  text-[#4796A9] font-[500] flex items-center text-[12px] justify-between md:justify-end md:gap-20" >
        <button><router-link to="/login" >Log in</router-link></button>

        <button><router-link to="/signup" >Sign up</router-link></button>
    </div>
</div>

</template>
<script>

export default {
    
}

</script>