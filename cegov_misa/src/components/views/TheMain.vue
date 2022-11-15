<template>
    <div class="main">
        <div class="main__wrap">
          <MainHeader :testProp="testProp" :addFunction="onShowDialog" @onAddClick="onShowDialog" />  
          <MainContent :funcShowDialog="showDialogDetails"  />
        </div>  
        <MainDialog :titleSelected="titleSelected" :hideDialog="onHideDialog"  v-if="isShowDialog"/>
        <LoadingContent :showLoadingFunction="showLoading" v-show="isLoading" />
    </div>
    
</template>

<script>
import MainHeader from '../base/MainHeader.vue'
import MainContent from '../base/MainContent.vue'
import MainDialog from '../base/MainDialog.vue';
import LoadingContent from '../base/LoadingContent.vue';
export default {
  name: 'TheMain',
  props: {
    msg: String
  },
  components: {
    MainHeader,
    MainContent,
    MainDialog,
    LoadingContent
  },
  methods: {
    showLoading() {
      this.isLoading = true;  
    },
    /*
    click "Thêm danh hiệu"
    Display MainDialog components 
    that will show a form to register title
    */
    onShowDialog() { 
      this.isShowDialog = true;
    },
    showDialogDetails(title) {
      this.isShowDialog = true;
      this.titleSelected = title;
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
      isShowDialog: false,
      isLoading: false,
      titleSelected: {},
      testProp: 'heh'
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
