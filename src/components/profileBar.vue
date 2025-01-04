<template>
    <div
        class=" w-[180px]  border-[1px] border-[#CCE2E8] overflow-hidden bg-white rounded-[20px]  absolute right-[-20px] top-[51px] z-40 "
        :class="{ 'hidden': !toggle }">
        <div class=" w-full h-full bg-[#4796A9] bg-opacity-10  ">
             <router-link to="/profile"> <button class=" w-full h-[40px] flex items-center pl-5 text-[16px] text-[#4796A9] font-[500] hover:text-[#7eb6c4] " > Profile </button></router-link>
            <button class=" w-full h-[40px] flex items-center pl-5 text-[16px] text-[#4796A9] font-[500]  hover:text-[#7eb6c4] " > Home </button>
            <button class=" w-full h-[40px] flex items-center pl-5 text-[16px] text-[#4796A9] font-[500]  hover:text-[#7eb6c4]" > Search </button>
            <button class=" w-full h-[40px] flex items-center pl-5 text-[16px] text-[#4796A9] font-[500]  hover:text-[#7eb6c4]" > Settings </button>
            <button @click="logout" class="  w-full h-[40px] flex items-center pl-5 text-[16px] text-[#DE5B5B] font-[500] hover:text-[#e68282] " > Sign out </button>
            
        </div>

    </div>


</template>
<script>
import { authStore } from '../stores/authStore';
export default {
    data(){
        return{
            auth:authStore()
        }
    },
    methods:{
        logout(){
            this.auth.logout()
        }
    },
    props:{
        toggle:Boolean
    }
}
</script>