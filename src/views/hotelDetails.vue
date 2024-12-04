<template>
    <div class=" bg-white pt-[51px] flex flex-col gap-3 pb-5  px-[65px] w-full  text-white text-[20px] ">

        <div class=" bg-black relative overflow-hidden  w-full h-[400px] rounded-[20px] ">
            <img src="../assets/details.jpeg" class=" w-full h-full object-cover absolute " alt="">
            <div class=" absolute w-full h-full bg-deatils-gradient p-[50px] flex flex-col  ">
                <div class=" flex gap-5 items-center ">
                    <h1 class="text-[22px] font-[500] ">Hohtel name</h1> XXXXX <div
                        class=" flex justify-center items-center w-[50px] h-[25px] rounded-[20px] bg-white text-[#4796A9] font-[400] text-[14px] ">
                        100$</div>
                </div>
                <div class=" flex gap-3 items-center ">
                    <h1 class="text-[12px] font-[400] ">Algeria - Batna</h1>
                </div>
                <div class=" flex justify-between ">
                    <div class=" flex gap-3 mt-6 ">
                        <div class=" bg-white w-[63%] h-[230px] rounded-[20px] p-[30px] opacity-85 ">
                            <p class="text-[14px] text-[#729FAA] font-[400]  ">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div class=" bg-white w-[50px] h-[150px] rounded-[15px] opacity-85 "></div>
                    </div>
                    <div class=" flex flex-col justify-end ">
                        <button
                            class=" w-[110px] h-[40px] bg-white rounded-[15px] opacity-90 font-[500] text-[18px] text-[#4796A9] ">Book
                            now</button>
                    </div>
                </div>
            </div>
        </div>
        <div class=" flex justify-center w-full gap-[1%]   ">
            <div class=" bg-black   w-[19%] aspect-square rounded-[20px] overflow-hidden " v-for="(item, index) in 5"
                :key="index">
                <img src="../assets/aboutusImg.jpeg" class=" w-full h-full object-cover " alt="">
            </div>
        </div>
        <h3 class=" text-[22px] text-[#4796A9] font-[500] mt-[50px] " >Rooms</h3>
        <DetailTable/>
    </div>

</template>
<script>
import DetailTable from '../components/detailTable.vue';


export default {
components:{
    DetailTable
}
}
</script>