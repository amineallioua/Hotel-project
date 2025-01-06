<template>
    <div class= "  w-full h-full bg-white flex lg:flex-row flex-col pt-[51px] gap-10   lg:pl-[65px] pl-[10px] pr-3 " >
        <filTer/>

        <div class=" overflow-y-scroll pt-3  lg:w-[70%] w-full " >
            <div class=" w-full flex justify-center "><homeSearchbar/></div>
            
            <div class="  h-full flex flex-col   items-center mt-5  " >
            <div class="h-fit w-full  " >
                <searchCard v-for="(item, index) in hotels.searched" :key="index" :item="item" />
             
        </div> 
        </div>
        
        </div>

</div>
</template>
<script>
import homeSearchbar from '../components/homeSearchbar.vue'
import searchCard from '../components/searchCard.vue'
import filTer from '../components/filter.vue'
import { hotelStore } from '../stores/hotelsStore';
export default {
    data(){
        return{
            hotels:hotelStore()
        }
    },
components:{
    homeSearchbar,
    searchCard,
    filTer
},
mounted(){
    console.log(this.hotels.searched)
}
}
</script>