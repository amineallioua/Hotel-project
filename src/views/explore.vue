<template>
    <div class= "  w-full h-full bg-white flex pt-[51px] gap-10   pl-[65px] pr-3 " >
        <div   class="min-w-[220px] h-[95%] mt-3 sticky rounded-[20px]  shadow-filter" >
   
            <div class=" bg-filter-gradient top-3  w-full h-full rounded-[20px] opacity-30 " ></div>
        </div>

        <div class=" h-full pt-3  w-[70%] " >
            <homeSearchbar/>
            <div class="  h-full flex flex-col   items-center  overflow-y-scroll " >
            <div class="h-fit w-full " >
                <exploreCard/>
                <exploreCard/>
        </div>
        </div>
        
        </div>

</div>
</template>
<script>
import homeSearchbar from '../components/homeSearchbar.vue'
import exploreCard from '../components/exploreCard.vue'
export default {
components:{
    homeSearchbar,
    exploreCard
}
}
</script>