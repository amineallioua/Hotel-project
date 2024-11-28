<template>
  <div class="w-full h-screen">
    <navbar/>
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

