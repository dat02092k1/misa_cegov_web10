<template>
    <div class="main">
        <div class="main__wrap">
          <MainHeader />  
          <MainContent />
        </div>
    </div>
</template>

<script>
import MainHeader from '../base/MainHeader.vue'
import MainContent from '../base/MainContent.vue'

export default {
  name: 'TheMain',
  props: {
    msg: String
  },
  components: {
    MainHeader,
    MainContent
  }
}
</script>

<style scoped>
.main {
  width: calc(100% - 204px);
  height: calc(100vh - 56px);
  background-color: #f4f5f8;
  
}

.main__wrap {
  padding: 16px;
}
/* .main__wrap {
  display: flex;
  flex-direction: column;
} */
</style>
