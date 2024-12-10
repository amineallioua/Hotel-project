<template>
    <div class=" w-full   px-[65px] pt-[51px] text-white pb-10 ">
        <h1 class=" text-[#4796A9] text-[22px] font-[500] mt-[20px] ">Post your hotel now !</h1>
        <form class=" flex flex-col gap-[22px] mt-[22px] ">
            <div>
                <label for="Add title" class="block text-[#4796A9] mb-1 text-[14px] font-[500] ">Add title</label>
                <input type="text" id="Add title"
                    class="  border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] pl-4 bg-[#4796A9] bg-opacity-5 h-[40px] outline-none rounded-[15px] " />
            </div>
            <div>
                <label for="Add description" class="block text-[#4796A9] mb-1 text-[14px] font-[500]">Add
                    description</label>
                <textarea name=""
                    class="border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] px-4 py-3 bg-[#4796A9] bg-opacity-5 h-[150px] outline-none rounded-[15px] "
                    id="Add description"></textarea>

            </div>
            <h1 class=" text-[#4796A9]  text-[14px] font-[500] ">Add location</h1>
            <div class=" flex gap-3 items-center ">
                <button class=" bg-custom-gradient h-[43px] w-[81px] rounded-[15px] text-white text-[14px] font-[500] ">
                    map </button>
                <button
                    class=" bg-[#4796A9] bg-opacity-25 h-[25px] w-[61px] rounded-[10px] text-[#4796A9] text-[12px] font-[500] ">
                    location </button>
            </div>



            <div class=" w-full flex gap-5 justify-between ">
                <div>
                    <h1 class=" text-[#4796A9]  text-[14px] font-[500] ">Photo galery</h1>
                    <div class=" flex flex-wrap gap-3 items-center ">
                        <div class=" mt-5 w-[151px] h-[151px] rounded-[20px] bg-[#3A798838] bg-opacity-20 border-[1px] border-[#3A798838]  "
                            v-for="(item, index) in 3" :key="index"></div>
                    </div>
                </div>





                <div class=" w-[1px] h-[300px] bg-[#4796A9] bg-opacity-30 "></div>




                <div>
                    <h1 class=" text-[#4796A9]  text-[14px] font-[500] ">Services and facilities</h1>
                    <div class=" flex flex-col gap-3  w-[150px]  mt-5">
                        <NewHotelBox v-for="(item, index) in advantages" :key="index" :item="item" />
                    </div>
                </div>



                <div class=" w-[1px] h-[300px] bg-[#4796A9] bg-opacity-30 "></div>





                <div>
                    <h1 class=" text-[#4796A9] pl-5 text-[14px] font-[500] ">Contact</h1>
                <input type="text" id="Phone number"
                    class=" border-[1px] mt-5 border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] h-[40px] pl-4 bg-[#4796A9] bg-opacity-5 outline-none rounded-[15px] " />
                <input type="text" id="Phone number"
                    class=" border-[1px] mt-2 border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] h-[40px] pl-4 bg-[#4796A9] bg-opacity-5 outline-none rounded-[15px] " />
                </div>






            </div>


        </form>
    </div>

</template>
<script>
import NewHotelBox from '../components/newHotelBox.vue';


export default {
    components: {
        NewHotelBox
    },
    data() {
        return {
            advantages: ['Wi-Fi', 'Parking', 'Lundry services', 'Gym', 'On-site restaurant']
        }
    }
}
</script>