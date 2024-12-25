  import { createWebHistory, createRouter } from 'vue-router'
  import HOME from '../views/Home.vue'
  import signUp from '../views/auth/signup.vue'
  import login from '../views/auth/login.vue'
  import realSignup from '../views/auth/realSignup.vue'
  import Explore from '../views/explore.vue'
  import searchPage from '../views/searchPage.vue'
import HotelDetails from '../views/hotelDetails.vue'
import BookPage from '../views/bookPage.vue'
import SettingsPage from '../views/settingsPage.vue'
import ProfilePage from '../views/profilePage.vue'
import NewHotel from '../views/newHotel.vue'
import chatRoom from  '../views/chatRoom.vue'

  



  const routes = [
    { path: '/', component: HOME },
    { path:'/signup' , component:signUp,meta: { hideNavbar: true }  },
    { path:'/login' , component:login,meta: { hideNavbar: true }  },
    { path:'/realsignUp' , component:realSignup,meta: { hideNavbar: true }  },
    {path:'/explore' , component:Explore  },
    {path:'/search' , component:searchPage  },
    {path:'/HotelDetails' , component:HotelDetails },
    {path:'/Book' , component:BookPage  },
    {path:'/Settings', component:SettingsPage},
    {path:'/Profile' , component:ProfilePage },
    {path:'/NewHotel' , component:NewHotel},
    {path:'/chatRoom' , component:chatRoom }   
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  export default router