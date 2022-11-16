<template>
  <div class="main-header">
    <div class="main-header__title">
      <span class="title">Danh hiệu thi đua</span>
    </div>
    <div class="main-header__func">
      <div class="func__left">
        <div class="searchbox">
          <input
            type="text"
            class="input__search"
            placeholder="Nhập mã hoặc tên danh hiệu ..."
          />
          <div class="btn__search search"></div>
        </div>
        <div class="input__filter">
          <button @click="onShowFilterBox" class="btn btn__filter">
            <div class="icon__filter filter"></div>
            <span>Bộ lọc</span>
          </button>
          <FilterDialog  :hideBox="onHideBox" v-if="showFilterPopup"/>
        </div>
      </div>
      <div class="func-right">
        <!-- <div v-show="!titleStore.isShowBtnAdd">
          <span>Đã chọn: 01</span>  
          <a href="">Bỏ chọn</a>
          <button>Sử dụng</button>
          <button>Ngừng sử dụng</button>
          <button @click="testBtn" >Xóa</button> 
        </div> -->

        <ul class="list-update" v-show="!titleStore.isShowBtnAdd">
          <li>Đã chọn: 01</li>
          <li class="un__choose">Bỏ chọn</li>
          <li><button class="btn__use">Sử dụng</button></li>
          <li><button class="btn__stop">Ngừng sử dụng</button></li>
          <li><button class="btn__delete">Xóa</button></li>
        </ul>
        <button
          hidden
          v-show="titleStore.isShowBtnAdd"
          @click="showDialog"
          class="btn btn__add-new"
        >
          <div class="icon__plus plus"></div>
          <div class="showDialog__title">Thêm danh hiệu</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useTitleStore } from "../../store/store.js";
import FilterDialog from "../base/FilterDialog.vue"
export default {
  name: "MainHeader",
  components: {FilterDialog},
  props: ["addFunction", "testProp"],
  /*
  Click button "Thêm danh hiệu"
  Display MainDialog components 
  that will show a form to register title
  */
  methods: {
    showDialog() {
      this.$emit("onAddClick");
    },
    testBtn() {
      alert(this.testProp);
    },
    onShowFilterBox() {
      this.showFilterPopup = !this.showFilterPopup;
    },
    onHideBox() {
     this.showFilterPopup = !this.showFilterPopup; 
    }
  },
  data() {
    return {
      isShowBtnAdd: true,
      titleStore: useTitleStore(),
      showFilterPopup: false
    };
  },
};
</script>

<style scoped>
@import url(../../css/base/li.css);
@import url(../../css/base/input.css);
@import url(../../css/base/button.css);
@import url(../../css/base/icon.css);
.main-header {
  align-items: flex-start;
  padding: 0 0 11px 0;
}

.main-header__title {
  margin: 0 0 16px;
}

.title {
  font-size: 20px;
  font-weight: 700;
  line-height: 35px;
}

.main-header__right {
  display: flex;
  flex-direction: row;
}

.main-header__func {
  display: flex;
  justify-content: space-between;
}

.func__left {
  display: flex;
  align-items: center;
}
.searchbox {
  display: flex;
  align-items: center;
  position: relative;
  color: black;
  
}

.input__filter {
  position: relative;

}
</style>
