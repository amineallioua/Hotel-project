<template>
    <div class=" w-full   md:px-[65px] px-[30px] pt-[51px] text-white  ">
        <h1 class=" text-[#4796A9] text-[22px] font-[500] mt-[20px] ">Book now !</h1>
        <form class=" flex flex-col gap-[22px] mt-[22px] ">
            <div>
                <label for="name" class="block text-[#4796A9] mb-1 text-[14px] font-[500] ">Full name</label>
                <input type="text" id="name"
                    class="  border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] pl-4 bg-[#4796A9] bg-opacity-5 h-[40px] outline-none rounded-[15px] " />
            </div>
            <div>
                <label for="phone" class="block text-[#4796A9] mb-1 text-[14px] font-[500]">Email</label>
                <input type="tel" id="phone"
                    class=" border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] pl-4 bg-[#4796A9] bg-opacity-5 h-[40px] outline-none rounded-[15px] " />
            </div>
            <div>
                <label for="room" class="block text-[#4796A9] mb-1 text-[14px] font-[500]">Phone number</label>
                <input type="text" id="room"
                    class=" border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] h-[40px] pl-4 bg-[#4796A9] bg-opacity-5 outline-none rounded-[15px] " />
            </div>
            <div>
                <label for="Number of guests" class="block text-[#4796A9] mb-1 text-[14px] font-[500]">Number of guests</label>
                <input type="text" id="Number of guests"
                    class=" border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] h-[40px] pl-4 bg-[#4796A9] bg-opacity-5 outline-none rounded-[15px] " />
            </div>


            <div class="flex gap-10 ">
                <div class=" flex flex-col w-1/2 ">
                    <span class="text-[#4796A9] mb-1 text-[14px] font-[500] "> check in </span>
                    <VueDatePicker :enable-time-picker="false" time-picker-inline />
                </div>
                <div class=" flex flex-col w-1/2 ">
                    <span class="text-[#4796A9] mb-1 text-[14px] font-[500] "> check out </span>
                    <VueDatePicker :enable-time-picker="false" time-picker-inline />
                </div>
            </div>



            <div class=" w-full flex justify-end " > <button class=" hover:scale-110 active:scale-100 duration-200 ease-in-out  w-[172px] h-[55px] rounded-[20px] bg-custom-gradient  " >Book now</button> </div>
        </form>
    </div>

</template>
<script>
export default {

}
</script>