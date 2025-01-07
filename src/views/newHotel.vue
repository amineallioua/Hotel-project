<template>
    <div class=" w-full   md:px-[65px] px-[30px] pt-[51px] text-white pb-10 ">
        <h1 class=" text-[#4796A9] text-[22px] font-[500] mt-[20px] ">Post your hotel now !</h1>
        <div class=" flex flex-col gap-[22px] mt-[22px] ">
            <div>
                <label for="Add title" class="block text-[#4796A9] mb-1 text-[14px] font-[500] ">Add title</label>
                <input type="text" id="Add title" v-model="name"
                    class="  border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] pl-4 bg-[#4796A9] bg-opacity-5 h-[40px] outline-none rounded-[15px] " />
            </div>
            <div>
                <label for="Add description" class="block text-[#4796A9] mb-1 text-[14px] font-[500]">Add
                    description</label>
                <textarea name="" v-model="description"
                    class="border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] px-4 py-3 bg-[#4796A9] bg-opacity-5 h-[150px] outline-none rounded-[15px] "
                    id="Add description"></textarea>

            </div>

            <div class=" flex  md:flex-row flex-col gap-3 items-center w-full ">
                <div class=" md:w-1/2 w-full ">
                    <label for="map" class="block text-[#4796A9] mb-1 text-[14px] font-[500] ">map</label>
                    <input type="text" id="map" v-model="map"
                        class="  border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] pl-4 bg-[#4796A9] bg-opacity-5 h-[40px] outline-none rounded-[15px] " />
                </div>
                <div class=" md:w-1/2 w-full ">
                    <label for="locaion" class="block text-[#4796A9] mb-1 text-[14px] font-[500] ">location</label>
                    <input type="text" id="location" v-model="location"
                        class="  border-[1px] border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] pl-4 bg-[#4796A9] bg-opacity-5 h-[40px] outline-none rounded-[15px] " />
                </div>
            </div>



            <div class=" w-full flex gap-5 justify-between md:flex-row flex-col ">
                <div class=" md:w-[40%] w-full ">
                    <h1 class=" text-[#4796A9]  text-[14px] font-[500] ">Photo galery</h1>
                    <div class=" flex flex-wrap  gap-3 items-center ">


                        <div @click="triggerFileInput(index)"
                            class=" mt-5 w-[151px] h-[151px] flex justify-center items-center rounded-[20px] bg-[#3A798838] bg-opacity-20 border-[1px] border-[#3A798838]  "
                            v-for="(photo, index) in imagess" :key="index">
                            <svg v-if="!photo" width="25" height="25" viewBox="0 0 25 25" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <line x1="12.5" y1="1.09278e-07" x2="12.5" y2="25" stroke="#3A7988" stroke-width="5" />
                                <line y1="12.5" x2="25" y2="12.5" stroke="#3A7988" stroke-width="5" />
                            </svg>
                            <img v-else :src="photo" 
                                class=" inset-0 w-full h-full object-cover rounded-[15px]" />
                            <input type="file" :id="`file-input-${index}`" accept="image/*" class="hidden"
                                @change="handleFileChange($event, index)" />

                        </div>


                    </div>
                </div>





                <div class=" md:w-[1px] w-full  md:h-[300px] h-[1px] bg-[#4796A9] bg-opacity-30 "></div>




                <div>
                    <h1 class=" text-[#4796A9]  text-[14px] font-[500] ">Services and facilities</h1>
                    <div class=" flex flex-col gap-3  w-[150px]  mt-5">
                        <NewHotelBox v-for="(item, index) in advantages" :key="index" :item="item" />
                    </div>
                </div>



                <div class=" md:w-[1px] w-full  md:h-[300px] h-[1px] bg-[#4796A9] bg-opacity-30 "></div>





                <div>
                    <h1 class=" text-[#4796A9] pl-5 text-[14px] font-[500] ">Contact</h1>
                    <input type="text" id="Phone number"
                        class=" border-[1px] mt-5 border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] h-[40px] pl-4 bg-[#4796A9] bg-opacity-5 outline-none rounded-[15px] " />
                    <input type="text" id="Phone number"
                        class=" border-[1px] mt-2 border-[#3A7988] border-opacity-20 w-full text-[14px] text-[#1e4e5a] h-[40px] pl-4 bg-[#4796A9] bg-opacity-5 outline-none rounded-[15px] " />
                </div>




           

            </div>
            <div class=" flex justify-end my-5 ">
            
          
            <button 
            @click="createHotel"
                class=" duration-100 ease-in-out hover:scale-105 hover:opacity-90 active:opacity-100 active:scale-100 rounded-[20px] shadow-lg bg-custom-gradient text-white w-[122px] h-[40px] font-[500] text-[14px] "
                >create
                hotel</button>
 
    </div>
            <h1 class=" text-[#4796A9]  text-[14px] font-[500] ">Add rooms</h1>

            <div
                class=" relative flex gap-3 justify-between lg:w-[800px] items-center sm:h-[100px] md:w-[600px]  sm:flex-row flex-col bg-[#4796A9] bg-opacity-5 rounded-[20px] md:py-[20px] md:px-5 py-[10px] px-2 border-[1px] mt-2 border-[#3A7988] border-opacity-20 ">
                <div
                    class="sm:h-full sm:w-[48%] h-[60px] w-full bg-white shadow-custom rounded-[15px] flex items-center justify-center  ">
                    <input type="text" placeholder="Rooms type" class=" text-gray-500 outline-none w-full px-2 ">
                </div>
                <div
                    class="sm:h-full sm:w-[48%] h-[60px] w-full bg-white shadow-custom rounded-[15px] flex items-center justify-center  ">
                    <input type="text" placeholder="Rooms price" class=" text-gray-500 outline-none  w-full px-2 ">
                </div>


                <div
                    class=" sm:h-full aspect-square h-[80px] flex justify-center items-center rounded-[10px] bg-[#3A798838] bg-opacity-20 border-[1px] border-[#3A798838]  ">
                    <svg width="15" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="12.5" y1="1.09278e-07" x2="12.5" y2="25" stroke="#3A7988" stroke-width="5" />
                        <line y1="12.5" x2="25" y2="12.5" stroke="#3A7988" stroke-width="5" />
                    </svg>

                </div>



                <button
                    class=" md:flex hover:scale-105 active:scale-100 hidden absolute w-[45px]  h-[30px] rounded-[10px] bg-custom-gradient  right-[-30px]  top-[35px]  justify-center items-center ">
                    <svg width="44" height="15" viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M52.4832 22L53.8974 23.4142L55.3116 22L53.8974 20.5858L52.4832 22ZM2.48315 20C1.37859 20 0.483154 20.8954 0.483154 22C0.483154 23.1046 1.37859 24 2.48315 24V20ZM33.8974 43.4142L53.8974 23.4142L51.0689 20.5858L31.0689 40.5858L33.8974 43.4142ZM53.8974 20.5858L33.8974 0.585785L31.0689 3.41422L51.0689 23.4142L53.8974 20.5858ZM52.4832 20H2.48315V24H52.4832V20Z"
                            fill="white" />
                    </svg>
                </button>




                <button
                    class="   md:hidden w-[45px]  h-[30px] rounded-[10px] bg-custom-gradient  right-[-30px]  top-[35px]  justify-center items-center ">
                    <svg width="44" height="15" viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M52.4832 22L53.8974 23.4142L55.3116 22L53.8974 20.5858L52.4832 22ZM2.48315 20C1.37859 20 0.483154 20.8954 0.483154 22C0.483154 23.1046 1.37859 24 2.48315 24V20ZM33.8974 43.4142L53.8974 23.4142L51.0689 20.5858L31.0689 40.5858L33.8974 43.4142ZM53.8974 20.5858L33.8974 0.585785L31.0689 3.41422L51.0689 23.4142L53.8974 20.5858ZM52.4832 20H2.48315V24H52.4832V20Z"
                            fill="white" />
                    </svg>
                </button>
            </div>

        </div>
    </div>

</template>
<script>
import NewHotelBox from '../components/newHotelBox.vue';
import { hotelStore } from '../stores/hotelsStore';

export default {
    components: {
        NewHotelBox
    },
    data() {
        return {
            advantages: ['Wi-Fi', 'Parking', 'Lundry services', 'Gym', 'On-site restaurant'],
            name: '',
            description: '',
            map: '',
            location: '',
            imagess: [null ,null , null , null , null ], 
            images:[],
            hotel:hotelStore()
        }
    },

    methods: {
        triggerFileInput(index) {
            const input = document.getElementById(`file-input-${index}`);
            input.click();
        },
        handleFileChange(event, index) {
            const file = event.target.files[0];
            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imagess[index] = e.target.result; // Directly update the array
                    this.images[index] = file
                    console.log(this.images)
                };
                
                reader.readAsDataURL(file);

            } else {
                alert("Please upload a valid image file.");
            }
        },
        createHotel(){
          
             this.hotel.createHotel(this.name , this.description , this.location , this.map , this.images)
             console.log(this.images)
            
        }

    },
}
</script>