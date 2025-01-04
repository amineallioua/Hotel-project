<template>
    <div class= "  w-full h-full bg-white flex lg:flex-row flex-col pt-[51px] gap-10   lg:pl-[65px] pl-[10px] pr-3 " >
        <filTer/>

        <div class=" overflow-y-scroll pt-3  lg:w-[75%] w-full " >
            <div class=" w-full flex justify-center "><homeSearchbar/></div>
            <div class="  h-full flex flex-col   items-center   " >
            <div class="h-fit w-full " >
                <exploreCard v-for="(hotel, index) in hotels" :key="index" :hotel="hotel" />

        </div>
        </div>
        
        </div>

</div>
</template>
<script>
import homeSearchbar from '../components/homeSearchbar.vue'
import exploreCard from '../components/exploreCard.vue'
import filTer from '../components/filter.vue'
import { hotelStore } from '../stores/hotelsStore';
export default {
    data(){
        return {
            hotel:hotelStore(),
            hotels:[]
        }
    },
    methods:{

    },
components:{
    homeSearchbar,
    exploreCard,
    filTer
},
 async mounted(){
  this.hotels = await this.hotel.getAllHotels()
  console.log(this.hotels)
}
}
</script>