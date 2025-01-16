<template>
  <div class="w-full h-screen">
    <navbar v-if="!$route.meta.hideNavbar" />
    <activeAccount v-if="!$route.meta.hideActive" />
    <notifications />
 <router-view/>
</div>

 
</template>
<script>
import navbar from './components/navbar.vue'
import activeAccount from './components/activeAccount.vue';
export default {
    components:{
        navbar,
        activeAccount
    }
}
</script>

