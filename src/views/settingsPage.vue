<template>
    <div class=" w-full   md:px-[65px] px-[30px] pt-[51px] text-white pb-5 ">
        <div class=" flex justify-between items-center mt-[20px] ">
            <h1 class=" text-[#4796A9] text-[22px] font-[500]  ">Settings</h1>
            <div class="flex flex-col   ">
                <h1 class="text-[#3A7988] text-[14px] font-[500] ">Notification</h1>
                <div
                @click="changeNotifichation"
                    class=" w-[46px] h-[21px] border-[1px] border-[#4796A9] rounded-[10px] flex items-center px-[2px] relative ">
                    <div class="  w-[15px]  h-[15px] rounded-[50%] bg-custom-gradient  transition-all duration-500 ease-in-out transform shadow-notifichationButton "   :class="NotificationOn ? 'translate-x-[25px]' : 'translate-x-0'" ></div>
                </div>
            </div>
        </div>

        <form class=" flex flex-col gap-[22px] mt-[22px] ">
            <div>
                <label for="Email" class="block text-[#4796A9] mb-1 text-[14px] font-[500] ">Email</label>
                <input type="text" id="Email" placeholder="myemail@gmail.com"
                    class=" mb-2  border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] pl-4 bg-[#4796A9] bg-opacity-5 h-[40px] outline-none rounded-[15px] " />
                <input type="text" id="name" placeholder="Confirm email"
                    class="  border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] pl-4 bg-[#4796A9] bg-opacity-5 h-[40px] outline-none rounded-[15px] " />
            </div>
            <div>
                <label for="Username" class="block text-[#4796A9] mb-1 text-[14px] font-[500]">Username</label>
                <input type="tel" id="Username" placeholder="Username"
                    class=" border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] pl-4 bg-[#4796A9] bg-opacity-5 h-[40px] outline-none rounded-[15px] " />
            </div>
            <div>
                <label for="Password" class="block text-[#4796A9] mb-1 text-[14px] font-[500]">Password</label>
                <input type="text" id="Password" placeholder=" New password "
                    class=" mb-2 border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] h-[40px] pl-4 bg-[#4796A9] bg-opacity-5 outline-none rounded-[15px] " />
                <input type="text" id="Password" placeholder=" Confirm password "
                    class=" border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] h-[40px] pl-4 bg-[#4796A9] bg-opacity-5 outline-none rounded-[15px] " />
            </div>
            <div>
                <label for="Phone number" class="block text-[#4796A9] mb-1 text-[14px] font-[500]">Phone number</label>
                <input type="text" id="Phone number" placeholder="07 78 65 52 11"
                    class=" border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] h-[40px] pl-4 bg-[#4796A9] bg-opacity-5 outline-none rounded-[15px] " />
            </div>






            <div class=" w-full flex justify-end "> <button
                    class=" w-[112px] h-[55px] rounded-[20px] bg-custom-gradient hover:scale-105 active:scale-100 ">Save</button> </div>
        </form>
    </div>

</template>
<script>
export default {
    data() {
        return {
            NotificationOn: false
        }
    },
    methods: {
        changeNotifichation() {
            this.NotificationOn = !this.NotificationOn
        }
    }
}
</script>