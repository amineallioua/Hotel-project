import { defineStore } from "pinia";
import axios from "../services/axios";

export const hotelStore = defineStore( "hotel" , {

state:()=>({
    hotels:[],
    name:'',
    location:'',
    rating:'',
    searched:[],
}),
actions:{
    async getAllHotels() {
        try{
            const response = await axios.get( 'hotel/' , {} ) 
            const result = response.data
            return result
        }catch(error){
            console.log(error)
        }

    },
    async getHotelbyId(id){
        try{
            const response = await axios.get(`hotel/${id}`) 
            const result = response.data
            return result
        }catch(error){
            console.log(error)
        }
    },
    async search( ){
        try{
            const response = await axios.get(`hotel/search/?name=${this.name}&location=${this.location}&hotelRating=${this.rating} ` )
            const result = response.data
            this.searched =  result
        }catch(error){
            console.log(error)
        }
    },
    setname(name){
        this.name = name
    }
}



}) 