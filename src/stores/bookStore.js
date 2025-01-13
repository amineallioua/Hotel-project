import { defineStore } from "pinia";
import axios from "../services/axios";


export const bookStore = defineStore( 'book', {
    state:()=> ({

    }) ,
    actions:{
       async makeBook( hotelId , roomId , startDate , endDate ){
        try{
            const response = await axios.post('books/', { hotelId , roomId , startDate , endDate } )
            const result = response.data
            console.log(result)
        }catch(error){
            console.log(error)
        }
            
        },
        async getbooks(id){
            try{
                const response = await axios.get(`books/hotel/${id} `, {})
                const result = response.data
                console.log(result)
                return result
            }catch(error){
                console.log(error)
            }
        },
        async confermBook(id){
            try{
                const response = await axios.put(`books/confirm `, { id })
                const result = response.data
                console.log(result)
                return result
            }catch(error){
                console.log(error)
            }
        },
        async cancelBook(id){
            try{
                const response = await axios.put(`books/cancel `, { id })
                const result = response.data
                console.log(result)
                return result
            }catch(error){
                console.log(error)
            }
        }

    }
} )