<template>
    <div v-if="hotelObject"
        class=" bg-white pt-[51px] flex flex-col gap-3 pb-5  md:px-[65px] px-[30px] w-full  text-white text-[20px] ">

        <div class=" bg-black relative overflow-hidden  w-full  h-[450px] rounded-[20px] ">
            <img :src="`http://localhost:5000/${hotelObject.images[0]}`" class=" w-full h-full object-cover absolute "
                alt="">
            <div class=" absolute w-full h-full bg-deatils-gradient md:p-[50px] p-[25px] flex flex-col  ">

                <div class=" flex md:flex-row flex-col  justify-between items-center ">

                    <div class=" flex gap-5 items-center ">
                        <h1 class="text-[22px] font-[500] ">{{ hotelObject.name }}</h1> <span v-for="(item, index) in 2"
                            :key="index"> <font-awesome-icon :icon="['fas', 'star']" style="color: #FFD43B;" /></span>
                        <button
                            class=" flex justify-center items-center w-[50px] h-[25px] rounded-[20px] bg-white active:bg-white text-[#4796A9] active:text-[#4796A9] hover:text-white hover:bg-[#4796A9] duration-200 ease-in-out hover:scale-105 active:scale-100 font-[400] text-[14px] ">
                            map <a :href="hotelObject.map"></a> </button>

                            
                            <button @click="addtoVaf" v-if=" !this.auth.User.favoriteHotels.includes(this.hotelObject._id) "
                            class=" flex justify-center items-center p-2 rounded-[20px] bg-white active:bg-white text-[#4796A9] active:text-[#4796A9] hover:text-white hover:bg-[#4796A9] duration-200 ease-in-out hover:scale-105 active:scale-100 font-[400] text-[14px] ">
                            add to favorite  </button>
                            <button @click="removeVaf" v-if=" this.auth.User.favoriteHotels.includes(this.hotelObject._id) "
                            class=" flex justify-center items-center p-2 rounded-[20px] bg-white active:bg-white text-[#4796A9] active:text-[#4796A9] hover:text-white hover:bg-[#4796A9] duration-200 ease-in-out hover:scale-105 active:scale-100 font-[400] text-[14px] ">
                            remove favorite  </button>
                            

                    </div>
                    <button v-if="auth.User.role == 'owner'" @click="gotoUpdate"
                        class=" bg-white bg-opacity-50 w-[73px] rounded-[20px] h-[34px] text-[15px] font-[500] text-[#4796A9] hover:scale-105 hover:bg-opacity-100 active:bg-opacity-50 active:scale-100 ">Edit</button>
                        <button v-if="auth.User.role == 'customer'" @click="createRoom"
                        class=" bg-white bg-opacity-50 p-2 rounded-[20px] text-[15px] font-[500] text-[#4796A9] hover:scale-105 hover:bg-opacity-100 active:bg-opacity-50 active:scale-100 ">ask manager</button>
                </div>




                <div class=" flex gap-3 items-center ">
                    <h1 class="text-[12px] font-[400] ">{{ hotelObject.location }} </h1>
                </div>
                <div class=" flex justify-between md:flex-row flex-col  items-between ">


                    <div class=" md:flex gap-3 mt-6 mb-2 md:mb-0 ">
                        <div
                            class=" bg-white md:w-[70%] mb-2 md:mb-0   rounded-[20px] relative lg:p-[30px] p-[25px] opacity-85 ">
                            <p
                                class="lg:text-[14px] sm:text-[10px] text-[8px] text-[#729FAA] font-[400] break-words  max-w-full ">
                                {{ hotelObject.description }}
                            </p>
                        </div>
                        <div class=" bg-white md:w-[50px] h-[50px]  w-[200px] md:h-[150px] rounded-[15px] opacity-85 ">
                        </div>
                    </div>



                    <div class=" flex flex-col justify-end  md:h-full h-fit ">

                        <button @click="toBook(null)"
                            class=" hover:scale-110 active:scale-100 duration-200 ease-in-out w-[110px] h-[40px] bg-white rounded-[15px] opacity-90 font-[500] text-[18px] text-[#4796A9] hover:text-white hover:bg-[#4796A9] ">Book
                            any</button>
                    </div>



                </div>
            </div>
        </div>
        <div class=" flex justify-center w-full gap-[1%]   ">
            <div class=" bg-black   w-[24%] aspect-square md:rounded-[20px] rounded-[10px] overflow-hidden "
                v-for="(i, index) in 4" :key="index">
                <img :src="`http://localhost:5000/${hotelObject.images[i]}`" class=" w-full h-full object-cover "
                    alt="">
            </div>
        </div>
        <h3 class=" text-[22px] text-[#4796A9] font-[500] mt-[50px] ">Services</h3>
        <div class=" w-full md:pl-[32px] flex flex-wrap gap-5 md:justifuy-normal    justify-center  ">









            <div class=" w-[198px] h-[198px] rounded-[20px] bg-black overflow-hidden relative hover:scale-105 active:scale-100 duration-200 ease-in-out "
                v-for="(room, index) in hotelObject.rooms" :key="index">

                <img :src="`http://localhost:5000/${room.images[0]}`" class="w-full h-full object-cover absolute"
                    alt="Room Image">
                <div @click=" toBook(room._id)"
                    class=" w-full h-full absolute bg-profileCard-gradient px-5 py-5 flex flex-col justify-end ">
                    <div>
                        <h1 class="font-[500] text-[16px] text-white"> {{ room.roomType }}</h1>
                        <div class=" flex font-[500] text-[14px] text-white  justify-between ">
                            <p class="text-white font-[500] text-[14px]">{{ room.price }}DA</p>

                            <button
                                class=" w-[70px] h-[20px] bg-white rounded-[15px] opacity-90 font-[500] text-[12px] text-[#4796A9] ">Book
                                now</button>
                        </div>

                    </div>
                </div>


            </div>








        </div>
        <h3 class=" text-[22px] text-[#4796A9] font-[500] mt-[50px] ">Requests</h3>
        <div class="  h-[280px] overflow-scroll ">
            <div class="flex flex-col gap-2  ">
                <div v-for="(book, index) in myBooks.books" :key="index"
                    class=" flex justify-between items-center px-5 text-[#4796A9] w-full h-[40px] bg-[#4796A9] bg-opacity-10 rounded-[10px] ">
                    <p class=" text-[13px] font-[500] ">{{book.user.name}}</p>
                    <p class=" text-[11px] ">{{book.user.email}}</p>
                    <p class=" text-[11px] ">{{ book.user.phone }}</p>
                    <p class=" text-[11px] ">{{book.room}}</p>
                    <p class=" text-[11px] ">{{book.endDate}}</p>
                    <p class=" text-[11px] " 
                    :class="{ 'text-orange-500' : book.status == 'pending' , 'text-red-500' : book.status == 'cancelled' ,'text-green-500' : book.status == 'confirmed'   }">{{book.status}}</p>

                    <div class=" flex gap-2 ">
                        <button @click="cancelBook(book._id)"
                            class=" flex justify-center items-center  w-[36px] h-[27px] bg-white rounded-[10px] border-[1px] border-[#4796A9] ">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="url(#paint0_linear_555_2611)" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6 6L18 18" stroke="url(#paint1_linear_555_2611)" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_555_2611" x1="12" y1="6" x2="12" y2="18"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4796A9" />
                                        <stop offset="1" stop-color="#3A7988" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_555_2611" x1="12" y1="6" x2="12" y2="18"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4796A9" />
                                        <stop offset="1" stop-color="#3A7988" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </button>


                        <button @click="confermBook(book._id)" class=" flex justify-center items-center w-[36px] h-[27px] bg-[#4796A9] rounded-[10px] ">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14L10.2331 16.4248C10.6618 16.7463 11.2677 16.6728 11.607 16.2581L20 6"
                                    stroke="white" stroke-width="2" stroke-linecap="round" />
                            </svg>

                        </button>
                    </div>
                </div>

            </div>
        </div>


        <h3 class=" text-[22px] text-[#4796A9] font-[500] mt-[50px] ">Opinions</h3>
        <div class="  text-black flex justify-center  relative ">
            <button @click="swiperMove(2)"
                class="flex justify-center items-center shadow-search w-[40px] h-[40px] rounded-[50%] bg-[#4796A9] hover:scale-105 active:scale-100 duration-100  absolute left-[-25px] z-10 top-[50%] ">
                <svg width="8" height="14" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.971 1.62305L2.59418 9.99986L10.971 18.3767" stroke="#FFFFFF" stroke-width="2.79227" />
                </svg>

            </button>
            <button @click="swiperMove(1)"
                class=" flex justify-center items-center shadow-search w-[40px] h-[40px] rounded-[50%] bg-[#4796A9] hover:scale-105 active:scale-100 duration-100  absolute right-[-10px] z-10 top-[50%] ">
                <svg width="8" height="14" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.02901 1.62305L9.40582 9.99986L1.02901 18.3767" stroke="#FFFFFF"
                        stroke-width="2.79227" />
                </svg>

            </button>

            <swiper :space-between="10" @swiper="onSwiper" :loop="true" class="w-full" :breakpoints="{
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
                <swiper-slide v-for="(comment, index) in hotelObject.comments" :key="index">
                    <CommentsCard :comment="comment" />
                </swiper-slide>

            </swiper>
        </div>



        <div class=" flex md:flex-row flex-col items-center gap-5 mt-5 relative ">
            <div class="relative  md:w-auto w-full ">
                <input type="text" v-model="comment"
                    class=" border-[#ACDAE4] bg-[#F5F7F7]  text-[#4796A9] text-opacity-80 text-[12px] font-[400] pl-3 md:pr-[85px] pr-[80px] border-[2px] shadow-filter outline-none  md:w-[540px]  w-full h-[40px] rounded-[15px] "
                    placeholder="Add your comment" id="">
                <div class=" absolute md:left-[460px] right-[10px] top-[-3px] w-auto h-[40px] flex items-center ">
                    <star-rating :rating="0" :star-size="13" v-model:rating="rating" :show-rating="false" />
                </div>
            </div>
            <button @click="addcomment"
                class=" h-[40px] w-[90px]  bg-[#F4F6F6] border-[#ACDAE4] border-[2px] rounded-[15px] text-[#4796A9] font-[500] text-[14px] shadow-filter ">Send</button>
        </div>





    </div>

</template>
<script>
import CommentsCard from '../components/commentsCard.vue';
import DetailTable from '../components/detailTable.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import StarRating from 'vue-star-rating';
import { useRoute, useRouter } from 'vue-router';
import { hotelStore } from '../stores/hotelsStore';
import { authStore } from '../stores/authStore';
import { bookStore } from '../stores/bookStore';
import { chatStore } from '../stores/chatStore';

export default {
    components: {
        DetailTable,
        Swiper,
        SwiperSlide,
        CommentsCard,
        StarRating,

    },


    data() {
        return {
            swiper: null,
            route: useRoute(),
            router: useRouter(),
            hotel: hotelStore(),
            hotelObject: null,
            totalReviews: '',
            comment: '',
            rating: "",
            auth: authStore(),
            book:bookStore(),
            myBooks:[],
            chat:chatStore()
        }
    },


    methods: {
        cancelBook(id){
            this.book.cancelBook(id)
        },
        confermBook(id){
            this.book.confermBook(id)
        },
        onSwiper(swiper) {
            this.swiper = swiper
        },
        toBook(RoomId) {
            if (RoomId) {
                console.log(RoomId)
                this.router.push(`/Book/${this.hotelObject._id}/${RoomId} `)

            } else {
                this.router.push(`/Book/${this.hotelObject._id}`)
            }

        },
        swiperMove(action) {
            if (action == 1) {
                this.swiper.slideNext()
            } else {
                this.swiper.slidePrev()
            }
        },
        addcomment() {
            this.hotel.addcomment(this.hotelObject._id, this.comment, this.rating)
        },
        gotoUpdate() {
            this.router.push(`/updateHotel/${this.hotelObject._id}`)
        },
        createRoom(){
            this.chat.createRoom( this.auth.User._id , this.hotelObject.ownerId )
        },
        addtoVaf(){
            this.auth.addVaf( this.hotelObject._id )
        },
        removeVaf(){
            const index = this.auth.User.favoriteHotels.indexOf(this.hotelObject._id)
            this.auth.removeVaf( index )
        }
    },
    async mounted() {
        this.hotelObject = await this.hotel.getHotelbyId(this.route.params.id)
        this.totalReviews = this.hotelObject.totalReviews
       this.myBooks = await this.book.getbooks(this.hotelObject._id)

    }
}
</script>
<style scoped>
.swiper-slide {
    display: flex;
    justify-content: center
}

.swiper-wrapper {
    width: 100%;
}
</style>