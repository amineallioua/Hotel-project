<template>
 <button @click="click" class=" text-[#4796A9] font-[400] text-[10px] border-solid border-[1px] w-fit p-1 border-[#4796A9] rounded-[15px] duration-700  "
         :class="{ 'text-white bg-[#4796A9]   ':this.isClicked }   "    
 >{{item}}</button>

</template>
<script>
export default {
    data(){
        return {
            isClicked:false 
        }
    },
    methods:{
        click(){
            this.isClicked = !this.isClicked 
        }
    },
    props:{
        item:String
    }

}
</script>