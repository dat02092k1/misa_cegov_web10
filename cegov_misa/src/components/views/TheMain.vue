<template>
    <div class="main">
        <div class="main__wrap">
          <MainHeader :addFunction="onShowDialog" @onAddClick="onShowDialog" />  
          <MainContent :addFunction="onShowDialog"  />
        </div>
        <MainDialog :hideDialog="onHideDialog"  v-show="isShowDialog"/>
    </div>
    
</template>

<script>
import MainHeader from '../base/MainHeader.vue'
import MainContent from '../base/MainContent.vue'
import MainDialog from '../base/MainDialog.vue';

export default {
  name: 'TheMain',
  props: {
    msg: String
  },
  components: {
    MainHeader,
    MainContent,
    MainDialog
  },
  methods: {
    /*
    click "Thêm danh hiệu"
    Display MainDialog components 
    that will show a form to register title
    */
    onShowDialog() { 
      this.isShowDialog = true; 
    },
    /*
    click "x" button
    hide MainDialog components
    */
    onHideDialog() {
      this.isShowDialog = false;
    }
  },
  data() {
    return {
      isShowDialog: false
    }
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
