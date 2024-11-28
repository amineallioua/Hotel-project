<template>
  <div class="w-full h-screen">
    <navbar v-if="!$route.meta.hideNavbar" />
 <router-view/>
</div>

 
</template>
<script>
import navbar from './components/navbar.vue'
export default {
    components:{
        navbar
    }
}
</script>

