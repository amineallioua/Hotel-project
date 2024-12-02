<template>
    <div class= "  w-full h-full bg-white flex pt-[51px] gap-10   pl-[65px] pr-3 " >
        <filTer/>

        <div class=" overflow-y-scroll pt-3  w-[70%] " >
            <homeSearchbar/>
            <div class="  h-full flex flex-col   items-center mt-5  " >
            <div class="h-fit w-full  " >
                <searchCard v-for="(item, index) in 5" :key="index" />
             
        </div>
        </div>
        
        </div>

</div>
</template>
<script>
import homeSearchbar from '../components/homeSearchbar.vue'
import searchCard from '../components/searchCard.vue'
import filTer from '../components/filter.vue'
export default {
components:{
    homeSearchbar,
    searchCard,
    filTer
}
}
</script>