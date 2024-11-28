import { createMemoryHistory, createRouter } from 'vue-router'
import HOME from '../views/Home.vue'


const routes = [
  { path: '/', component: HOME },
  
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router