<template>
    <div class="hidden md:flex lg:flex-col flex-row gap-5 items-between p-[20px] h-fit lg:min-w-[220px] lg:max-w-[220px] bg-[#CEE1E5] bg-opacity-30 lg:h-[95%] mt-3 sticky rounded-[20px] shadow-filter">
      <div class="flex gap-2 lg:items-center">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- SVG paths -->
        </svg>
        <h1 class="font-[500] text-[18px] text-[#4796A9]">filters</h1>
      </div>
      <div class="lg:h-[2px] lg:w-full bg-[#2D555F17] my-4 md:my-0"></div>
  
      <!-- Location Filter -->
      <div class="flex flex-col">
        <div class="flex justify-between items-center">
          <h3 class="font-[500] text-[#4796A9] text-[12px]">Location</h3>
          <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- SVG paths -->
          </svg>
        </div>
        <select name="" id="" class="font-[400] text-[#4796A9] text-[10px]" v-model="location">
          <option :value="item" class="font-[400] text-[#4796A9] text-[10px]" v-for="(item, index) in wilayas" :key="index">{{ item }}</option>
        </select>
      </div>
  
      <!-- Amenities and Facilities -->
      <div class="flex flex-col lg:mt-5">
        <div class="flex justify-between items-center">
          <h3 class="font-[500] text-[#4796A9] text-[12px]">Amenities and facilities</h3>
          <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- SVG paths -->
          </svg>
        </div>
        <div class="flex flex-wrap gap-2 mt-2">
          <checkBox v-for="(item, index) in services" :key="index" :item="item" />
        </div>
      </div>
  
      <!-- Hotel Rating -->
      <div class="flex gap-1 flex-col lg:mt-5">
        <div class="flex justify-between items-center">
          <h3 class="font-[500] text-[#4796A9] text-[12px]">Hotel rating</h3>
          <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- SVG paths -->
          </svg>
        </div>
        <p class="font-[400] text-[#4796A9] text-[10px]">
          <star-rating  v-model:rating="rating" :star-size="15" :show-rating="false" />
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import StarRating from 'vue-star-rating';
  import checkBox from './checkBox.vue';
  import { hotelStore } from '../stores/hotelsStore';
  
  export default {
    data() {
      return {
        hotel: hotelStore(),
        services: [
          "Free Wi-Fi", "Parking", "Gym", "Swimming pool", "Restaurant", "Business center", "Free breakfast"
        ],
        wilayas: [
          "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Blida", "Bouira",
          "Tamanrasset", "Tébessa", "Tiaret", "Tizi Ouzou", "Algiers", "Djelfa", "Jijel", "Sétif", "Saïda",
          "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara",
          "Ouargla", "Oran", "El Bayadh", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras",
          "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane", "El M'ghair", "El Meniaa",
          "Mostaganem", "Chlef"
        ],
        location: '',
        rating: ''
      };
    },
    methods: {
      filter() {
        this.hotel.search();
      }
    },
    components: {
      checkBox,
      StarRating
    },
   watch: {
    // Watch for changes in the location
    location(newLocation) {
        this.hotel.location = newLocation;
        this.filter(); // Call the filter method directly
    },

    // Watch for changes in the rating
    rating(newRating) {
        this.hotel.rating = newRating.toString() ;
        console.log(this.hotel.rating)
        this.filter(); // Call the filter method directly
    },
},

  }
  </script>
  