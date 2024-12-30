<template>
    <div class="w-full h-full  md:px-[65px] px-[30px] pt-[51px]  ">
        <div class=" flex justify-between mt-5 md:flex-row flex-col md-gap-0 gap-3  ">
            <div
                class=" relative md:w-[70%] w-full md:h-[260px] bg-[#CEE1E5] bg-opacity-5 md:px-[36px] px-[10px] p-[10px] shadow-custom rounded-[20px] ">
                <p class=" absolute text-[#4796A9] font-[400] text-[10px] md:bottom-5 bottom-1 right-5 "> X Send message
                </p>
                <h1 class=" font-[500] text-[22px] text-[#4796A9] mb-6 ">Welcome!</h1>
                <div class="  flex md:flex-row flex-col  gap-8 ">
                    <div class=" min-w-[147px] max-w-[147px] h-[147px] bg-black rounded-[20px] overflow-hidden ">
                        <img src="../assets/personal.jpeg" class=" w-full h-full object-cover " alt="">
                    </div>
                    <div class="w-full flex flex-col gap-1 lg:pr-10 ">
                        <div class=" flex justify-between h-[20px]   ">
                            <h1 class=" font-[500] text-[18px] text-[#4796A9] ">User Name</h1>
                            <router-link to="/settings">
                                <button
                                    class="duration-100 ease-in-out hover:scale-105 hover:opacity-90 active:opacity-100 active:scale-100 rounded-[20px] shadow-lg bg-custom-gradient text-white w-[102px] h-[30px] font-[500] text-[14px] ">update
                                    profile</button>
                            </router-link>
                        </div>
                        <p class=" text-[#4796A9] text-[12px] font-[400] "> X user contry</p>
                        <p class=" text-[#729FAA] font-[400] lg:text-[10px] text-[8px] mt-1  ">Lorem Ipsum is simply
                            dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            <div class=" relative md:w-[28%] h-[130px] overflow-hidden   shadow-custom rounded-[20px] ">
                <div
                    class=" absolute h-full w-full bg-white bg-opacity-95 p-5 flex flex-col justify-between text-[#4796A9] font-[500] text-[12px]  ">
                    <div class=" flex justify-between ">
                        <h1>Contact information</h1>
                        <p>XX</p>
                    </div>
                    <div class=" flex justify-between ">
                        <h1>Rating</h1>
                        <p>XXXXX</p>
                    </div>
                    <div class=" flex justify-between ">
                        <h1>Total booking</h1>
                        <p>XXX</p>
                    </div>

                </div>
                <img src="../assets/profile.jpeg" class="  w-full h-full object-cover  " alt="">
            </div>
        </div>
        <div class=" flex justify-between my-5 ">
            <h1 class=" font-[500] text-[22px] text-[#4796A9]   ml-[36px] ">Your rooms</h1>
            <router-link to="/newHotel">
                <button
                    class=" duration-100 ease-in-out hover:scale-105 hover:opacity-90 active:opacity-100 active:scale-100 rounded-[20px] shadow-lg bg-custom-gradient text-white w-[102px] h-[30px] font-[500] text-[14px] ">add
                    hotel</button>
            </router-link>
        </div>



        <div class=" w-full md:pl-[32px] flex flex-wrap gap-5 md:justifuy-normal    justify-center  ">



            <div class=" w-[198px] h-[198px] rounded-[20px] bg-black overflow-hidden relative hover:scale-110 active:scale-100 duration-200 ease-in-out "
                v-for="(item, index) in 10" :key="index">
                <img src="../assets/aboutusImg.jpeg" class=" w-full h-full object-cover absolute " alt="">
                <div class=" w-full h-full absolute bg-profileCard-gradient px-5 py-5 flex flex-col justify-end ">
                    <div>
                        <div class=" flex font-[500] text-[14px] text-white  gap-3 ">
                            <h1>Hotel name</h1>
                            <p>XXXXX</p>
                        </div>
                        <p class="font-[500] text-[7px] text-white">X Location</p>
                    </div>
                </div>
            </div>


        </div>






    </div>


</template>
<script>
export default {

}
</script>