<template>
  <div class="container">
    <TheHeader />
    <TheSidebar/>
    <TheMain />   
  </div>
  
</template>

<script>
import TheHeader from './components/views/TheHeader.vue';
import TheSidebar from './components/views/TheSidebar.vue';
import TheMain from './components/views/TheMain.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheSidebar,
    TheMain
  }
}
</script>

<style>

</style>
