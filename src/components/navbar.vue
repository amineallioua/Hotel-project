<template>
<div class=" w-full h-[51px] bg-white px-[115px] flex justify-between items-center fixed z-10 " >
    <h2 class="w-[194px] text-[#4796A9] text-[16px] font-[500] " > <router-link to="/"> Booking</router-link> </h2>
    <button class=" w-[194px] h-full rounded-[7px] bg-custom-gradient  text-white text-[12px] font-[500] " >Explore hotels</button>
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