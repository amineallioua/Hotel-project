import { defineStore } from "pinia";
import axios from "../services/axios";

export const hotelStore = defineStore( "hotel" , {

state:()=>({
    hotels:[],
}),
actions:{
    async getAllHotels() {
        try{
            const response = await axios.get( 'hotel/hotels' , {} ) 
            const result = response.data
            return result
        }catch(error){
            console.log(error)
        }

    }
}



}) 