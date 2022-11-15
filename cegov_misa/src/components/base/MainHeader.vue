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
            placeholder="Nhập mã hoặc tên danh hiệu"
          />
          <div class="btn__search search">    
          </div>
        </div>
        <div class="input__filter">
          <button class="btn btn__filter">
            <div class="icon__filter filter"></div>
            <span>Bộ lọc</span>
          </button>
        </div>
      </div>
      <div class="func-right">
        <button @click="testBtn" v-if="!isShowBtnAdd">Tam</button>
        <button hidden v-if="isShowBtnAdd" @click="showDialog" class="btn btn__add-new">
          <div class="icon__plus plus"></div>
          <div class="showDialog__title">Thêm danh hiệu</div>    
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
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
      alert(this.testProp)
    }
  },
  data() {
    return {
      isShowBtnAdd: true
    }
  },
};
</script>

<style scoped>
::-webkit-input-placeholder {
  color: #e1e1e1;
}
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

.icon__filter {
  position: absolute;
  top: 5px;
  left: 15px;
  height: 24px;
  width: 24px;
  content: "";
  background: transparent url(../../assets/icons_cegov/sprites.06b14dc5.svg)
    no-repeat;
}

 .filter {
  background-position: -96px -48px;
}

 .filter:hover {
  cursor: pointer;
}
.btn__search {
  height: 24px;
  width: 24px;
  content: "";
  position: absolute;
  right: 0;
  background: transparent url(../../assets/icons_cegov/sprites.06b14dc5.svg)
    no-repeat;
}

.search {
  background-position: -289px -24px;
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
}
.searchbox {
  display: flex;
  align-items: center;
  position: relative;
  color: black;
}
.input__search {
  border-radius: 3.5px;
  border: 1px solid #e4e6f1;
  height: 30px;
  overflow: hidden;
  padding-left: 10px;
  padding-right: 20px;
  min-width: 220px;
}

.input__search:focus {
  outline: none !important;
  border: 1px solid #2979ff;
}

.icon__plus {
  background: transparent url(../../assets/icons_cegov/sprites.06b14dc5.svg) no-repeat;
  content: "";
  height: 24px;
  width: 24px;
  position: absolute;
  top: 5px;
  left: 15px;
}
.plus {
background-position: -192px -96px;

}

.btn {
  /* line-height: 30px; */
  height: 32px;
  border-radius: 4px;
  min-width: 96px;
  min-height: 36px;
  text-align: center;
  padding: 9px 16px;
  display: inline-block;
  font-size: 13px;
  margin: 0px 0px 0px 8px;
}
.btn__add-new {
  background-color: #2979ff;
  color: #ffffff;
  border: none;
  position: relative;
  width: 158px;
  min-height: 36px;
  display: flex;
  justify-content: flex-end;
}

.btn__add-new:hover {
  background-color: #1a73e8;  
  cursor: pointer;
}

.btn__filter {
  background-color: #ffffff;
  color: #3d3f4e;
  border: 1px solid #cecece;
  position: relative;
  display: flex;
  justify-content: flex-end;
}

.btn__toggle {
  background-color: #ffffff;
  color: #3d3f4e;
  border: 1px solid #cecece;
  display: flex;
  align-items: center;
}
/* .btn__search {
      background: url(../../assets/Icons/Ic_seerch.png) no-repeat 3px 4px;
  } */
</style>
