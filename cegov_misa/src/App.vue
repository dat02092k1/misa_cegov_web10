<template>
  <div class="container">
    <TheHeader />
    <TheSidebar/>
    <TheMain />   
    <!-- <MainDialog />  -->
  </div>
  
</template>

<script>
import TheHeader from './components/views/TheHeader.vue';
import TheSidebar from './components/views/TheSidebar.vue';
import TheMain from './components/views/TheMain.vue';
// import MainDialog from './components/base/MainDialog.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheSidebar,
    TheMain,
    // MainDialog
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
}
</style>>

