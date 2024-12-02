  import { createWebHistory, createRouter } from 'vue-router'
  import HOME from '../views/Home.vue'
  import signUp from '../views/auth/signup.vue'
  import login from '../views/auth/login.vue'
  import realSignup from '../views/auth/realSignup.vue'
  import Explore from '../views/explore.vue'
  import searchPage from '../views/searchPage.vue'



  const routes = [
    { path: '/', component: HOME },
    { path:'/signup' , component:signUp,meta: { hideNavbar: true }  },
    { path:'/login' , component:login,meta: { hideNavbar: true }  },
    { path:'/realsignUp' , component:realSignup,meta: { hideNavbar: true }  },
    {path:'/explore' , component:Explore  },
    {path:'/search' , component:searchPage  }
    
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  export default router