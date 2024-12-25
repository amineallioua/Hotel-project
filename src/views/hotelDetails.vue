<template>
    <div class=" bg-white pt-[51px] flex flex-col gap-3 pb-5  md:px-[65px] px-[30px] w-full  text-white text-[20px] ">

        <div class=" bg-black relative overflow-hidden  w-full  h-[450px] rounded-[20px] ">
            <img src="../assets/details.jpeg" class=" w-full h-full object-cover absolute " alt="">
            <div class=" absolute w-full h-full bg-deatils-gradient md:p-[50px] p-[25px] flex flex-col  ">
                <div class=" flex gap-5 items-center ">
                    <h1 class="text-[22px] font-[500] ">Hohtel name</h1> XXXXX <div
                        class=" flex justify-center items-center w-[50px] h-[25px] rounded-[20px] bg-white text-[#4796A9] font-[400] text-[14px] ">
                        100$</div>
                </div>
                <div class=" flex gap-3 items-center ">
                    <h1 class="text-[12px] font-[400] ">Algeria - Batna</h1>
                </div>
                <div class=" flex justify-between md:flex-row flex-col  items-between ">
                    <div class=" md:flex gap-3 mt-6 mb-2 md:mb-0 ">
                        <div class=" bg-white md:w-[63%] mb-2 md:mb-0  rounded-[20px] lg:p-[30px] p-[25px] opacity-85 ">
                            <p class="lg:text-[14px] sm:text-[10px] text-[8px] text-[#729FAA] font-[400]  ">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div class=" bg-white md:w-[50px] h-[50px]  w-[200px] md:h-[150px] rounded-[15px] opacity-85 ">
                        </div>
                    </div>



                    <div class=" flex flex-col justify-end  md:h-full h-fit ">
                        <router-link to="/Book">
                            <button
                                class=" w-[110px] h-[40px] bg-white rounded-[15px] opacity-90 font-[500] text-[18px] text-[#4796A9] ">Book
                                now</button></router-link>
                    </div>



                </div>
            </div>
        </div>
        <div class=" flex justify-center w-full gap-[1%]   ">
            <div class=" bg-black   w-[24%] aspect-square md:rounded-[20px] rounded-[10px] overflow-hidden "
                v-for="(item, index) in 4" :key="index">
                <img src="../assets/aboutusImg.jpeg" class=" w-full h-full object-cover " alt="">
            </div>
        </div>
        <h3 class=" text-[22px] text-[#4796A9] font-[500] mt-[50px] ">Rooms</h3>
        <DetailTable />
        <h3 class=" text-[22px] text-[#4796A9] font-[500] mt-[50px] ">Opinions</h3>
        <div class="  text-black flex justify-center  relative ">
            <button @click="swiperMove(2)"
                class="flex justify-center items-center shadow-search w-[40px] h-[40px] rounded-[50%] bg-[#4796A9] absolute left-[-25px] z-10 top-[50%] ">
                <svg width="8" height="14" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.971 1.62305L2.59418 9.99986L10.971 18.3767" stroke="#FFFFFF" stroke-width="2.79227" />
                </svg>

            </button>
            <button @click="swiperMove(1)"
                class=" flex justify-center items-center shadow-search w-[40px] h-[40px] rounded-[50%] bg-[#4796A9] absolute right-[-10px] z-10 top-[50%] ">
                <svg width="8" height="14" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.02901 1.62305L9.40582 9.99986L1.02901 18.3767" stroke="#FFFFFF"
                        stroke-width="2.79227" />
                </svg>

            </button>

            <swiper :space-between="10" @swiper="onSwiper" :loop="true" :breakpoints="{
                '0': {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                '660': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },

                '927': {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },

                '1236': {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }">
                <swiper-slide>
                    <CommentsCard />
                </swiper-slide>
                <swiper-slide>
                    <CommentsCard />
                </swiper-slide>
                <swiper-slide>
                    <CommentsCard />
                </swiper-slide>
                <swiper-slide>
                    <CommentsCard />
                </swiper-slide>
                <swiper-slide>
                    <CommentsCard />
                </swiper-slide>
                <swiper-slide>
                    <CommentsCard />
                </swiper-slide>
                <swiper-slide>
                    <CommentsCard />
                </swiper-slide>
            </swiper>
        </div>
        <div class=" flex md:flex-row flex-col items-center gap-5 mt-5 relative ">
            <div class="relative  md:w-auto w-full ">
                <input type="text"
                    class=" border-[#ACDAE4] bg-[#F5F7F7]  text-[#4796A9] text-opacity-80 text-[12px] font-[400] pl-3 md:pr-[85px] pr-[80px] border-[2px] shadow-filter outline-none  md:w-[540px]  w-full h-[40px] rounded-[15px] "
                    placeholder="Add your comment" id="">
                <div class=" absolute md:left-[460px] right-[10px] top-[-3px] w-auto h-[40px] flex items-center "><star-rating
                        :rating="0" :star-size="13"  :show-rating="false"/></div>
            </div>
            <button
                class=" h-[40px] w-[90px]  bg-[#F4F6F6] border-[#ACDAE4] border-[2px] rounded-[15px] text-[#4796A9] font-[500] text-[14px] shadow-filter ">Send</button>
        </div>
    </div>

</template>
<script>
import CommentsCard from '../components/commentsCard.vue';
import DetailTable from '../components/detailTable.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import StarRating from 'vue-star-rating';

export default {
    components: {
        DetailTable,
        Swiper,
        SwiperSlide,
        CommentsCard,
        StarRating
    },
    data() {
        return {
            swiper: null,
        }
    },
    methods: {
        onSwiper(swiper) {
            this.swiper = swiper
            console.log(this.swiper)
        },
        swiperMove(action) {
            if (action == 1) {
                this.swiper.slideNext()
            } else {
                this.swiper.slidePrev()
            }
        }
    }
}
</script>
<style scoped>
.swiper-slide {
    display: flex;
    justify-content: center
}
</style>