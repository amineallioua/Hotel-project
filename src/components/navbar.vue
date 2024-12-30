<template>
    <div class=" w-full h-[51px] bg-[#f7fdff]  md:px-[65px] px-5 flex justify-between items-center fixed z-10 ">
        <h2 class="md:w-[194px]  w-[100px] text-[#4796A9] text-[16px] font-[500] "> <router-link to="/">
                Booking</router-link> </h2>
        <router-link class=" p-0 m-0 h-full " to="/explore">
            <button
                class=" md:w-[194px] w-[100px] h-full rounded-[7px] bg-custom-gradient hover:opacity-90 active:opacity-100 text-white text-[12px] font-[500] ">Explore
                hotels</button>
        </router-link>
        <div
            class="  md:w-[194px] w-[100px] h-full rounded-[19px]  text-[#4796A9] font-[500]  items-center text-[12px] justify-between md:justify-end md:gap-20"
            :class="{ 'hidden' : loggedin , 'flex' : !loggedin }"  >
            <button><router-link to="/login">Log in</router-link></button>

            <button><router-link to="/signup">Sign up</router-link></button>
        </div>



        <div
            class=" md:w-[194px] w-[100px] h-full  rounded-[19px]  text-[#4796A9] font-[500]  items-center text-[12px] justify-between md:justify-end md:gap-5"
            :class="{ 'hidden' : !loggedin , 'flex' : loggedin }">
            <div class=" flex items-center h-full ">

                <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M28.9107 4.94722C27.3888 4.33528 25.7301 4 24.0001 4C17.288 4 11.6492 9.04691 10.908 15.718L10.4044 20.2504L10.3923 20.3585C10.1666 22.325 9.52654 24.2212 8.51428 25.9222L8.45839 26.0155L7.30232 27.9423L7.25403 28.0228C6.77098 28.8277 6.33335 29.5569 6.04184 30.1759C5.74561 30.8049 5.42886 31.6571 5.58133 32.6234C5.73203 33.5785 6.22358 34.4467 6.96503 35.0673C7.71517 35.6952 8.60892 35.8621 9.3007 35.9317C9.98144 36.0001 10.832 36.0001 11.7707 36L11.8645 36H36.1356L36.2294 36C37.1682 36.0001 38.0187 36.0001 38.6994 35.9317C39.3912 35.8621 40.285 35.6952 41.0351 35.0673C41.7766 34.4467 42.2681 33.5785 42.4188 32.6234C42.5713 31.6571 42.2545 30.8049 41.9583 30.1759C41.6668 29.5569 41.2291 28.8277 40.7461 28.0227L40.6978 27.9423L39.5417 26.0155L39.4859 25.9222C38.7284 24.6493 38.1793 23.2672 37.8563 21.828C37.2548 21.9409 36.6343 22 36 22C35.2321 22 34.4844 21.9134 33.7662 21.7495C34.1353 23.9429 34.9082 26.0518 36.0485 27.9678L36.1118 28.0735L37.2678 30.0003C37.8148 30.9119 38.1445 31.466 38.3395 31.8802C38.3502 31.9029 38.36 31.9241 38.369 31.9441C38.3472 31.9467 38.3239 31.9492 38.299 31.9518C37.8435 31.9976 37.1988 32 36.1356 32H11.8645C10.8013 32 10.1566 31.9976 9.70111 31.9518C9.67619 31.9492 9.6529 31.9467 9.63117 31.9441C9.64014 31.9241 9.64992 31.9029 9.66059 31.8802C9.85564 31.466 10.1853 30.9119 10.7323 30.0003L11.8884 28.0735L11.9516 27.9678C13.2531 25.7809 14.0761 23.3428 14.3662 20.8145L14.3799 20.6921L14.8835 16.1597C15.3997 11.5144 19.3261 8 24.0001 8C24.9261 8 25.8228 8.13795 26.6694 8.39532C27.1733 7.09186 27.9425 5.92043 28.9107 4.94722ZM33.9643 8.55605C32.7884 9.25261 32 10.5342 32 12C32 12.29 32.0309 12.5728 32.0895 12.8453C32.3303 13.2951 32.5351 13.7681 32.6996 14.2606C33.4204 15.311 34.6298 16 36 16C36.3838 16 36.7549 15.9459 37.1063 15.845L37.0921 15.718C36.7876 12.9775 35.6566 10.5111 33.9643 8.55605Z"
                        fill="#4796A9" />
                    <path
                        d="M18.2044 35.3294C18.5463 37.2431 19.2996 38.9341 20.3474 40.1402C21.3953 41.3463 22.6792 42 24 42C25.3208 42 26.6047 41.3463 27.6526 40.1402C28.7004 38.9341 29.4537 37.2431 29.7956 35.3294"
                        stroke="#4796A9" stroke-width="4" stroke-linecap="round" />
                    <circle cx="36" cy="12" r="5" fill="#4796A9" stroke="#4796A9" stroke-width="2" />
                </svg>

            </div>
            <div class=" flex items-center h-full relative  ">
                <profileBar :toggle="toggle" />
                <button @click="toggleBar" >
                <svg width="30" height="30" viewBox="0 0 40 39" fill="none" class="hover:opacity-75 active:opacity-100" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M20 3.83333C11.5316 3.83333 4.66667 10.6983 4.66667 19.1667C4.66667 21.7858 5.32334 24.2515 6.48102 26.4082C7.64546 28.5775 10.6576 28.1908 12.7523 26.897C14.8315 25.6128 17.3792 24.9167 20 24.9167C22.6208 24.9167 25.1685 25.6128 27.2477 26.897C29.3424 28.1908 32.3545 28.5775 33.519 26.4082C34.6767 24.2515 35.3333 21.7858 35.3333 19.1667C35.3333 10.6983 28.4684 3.83333 20 3.83333ZM0.833333 19.1667C0.833333 8.58121 9.41454 0 20 0C30.5855 0 39.1667 8.58121 39.1667 19.1667C39.1667 29.7521 30.5855 38.3333 20 38.3333C9.41454 38.3333 0.833333 29.7521 0.833333 19.1667ZM20 11.5C17.8829 11.5 16.1667 13.2162 16.1667 15.3333C16.1667 17.4504 17.8829 19.1667 20 19.1667C22.1171 19.1667 23.8333 17.4504 23.8333 15.3333C23.8333 13.2162 22.1171 11.5 20 11.5ZM12.3333 15.3333C12.3333 11.0992 15.7658 7.66667 20 7.66667C24.2342 7.66667 27.6667 11.0992 27.6667 15.3333C27.6667 19.5675 24.2342 23 20 23C15.7658 23 12.3333 19.5675 12.3333 15.3333Z"
                        fill="url(#paint0_linear_199_301)" />
                    <defs>
                        <linearGradient id="paint0_linear_199_301" x1="-5.0418e-07" y1="4.66666" x2="39" y2="37.1667"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4796A9" />
                            <stop offset="1" stop-color="#3A7988" />
                        </linearGradient>
                    </defs>
                </svg>
            </button>
            </div>
        </div>
    </div>

</template>
<script>
import { authStore } from '../stores/authStore';
import profileBar from './profileBar.vue';
export default {
    data() {
        return {
            auth: authStore(),
            loggedin: false,
            toggle:false
        }
    },
    methods:{
        toggleBar(){
            this.toggle=!this.toggle
        }
    },
    mounted() {
        if (this.auth.User) {
            this.loggedin = true
        }
    },
    components:{
        profileBar
    },
    
}

</script>