<template>
<div class=" w-full h-[51px] bg-[#f7fdff]  px-[65px] flex justify-between items-center fixed z-10 " >
    <h2 class="w-[194px] text-[#4796A9] text-[16px] font-[500] " > <router-link to="/"> Booking</router-link> </h2>
    <router-link  class=" p-0 m-0 h-full " to="/explore" >
        <button class=" w-[194px] h-full rounded-[7px] bg-custom-gradient  text-white text-[12px] font-[500] " >Explore hotels</button>
    </router-link>
        <div class=" w-[194px] h-full rounded-[19px]  text-[#4796A9] font-[500] flex items-center text-[12px] justify-end gap-20" >
        <button><router-link to="/login" >Log in</router-link></button>

        <button><router-link to="/signup" >Sign up</router-link></button>
    </div>
</div>

</template>
<script>

export default {
    
}

</script>