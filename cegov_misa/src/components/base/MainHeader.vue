<template>
    <div class="main-header">
        <div class="main-header__title"><span class="title">Danh hiệu thi đua</span></div>
      <div class="main-header__func">
        <div class="func__left">
            <div class="searchbox">
          <input
            type="text"
            class="input__search"
            placeholder="Nhập mã hoặc tên danh hiệu"
          />
          <div class="btn__search">
            <img src="../../assets/Icons/Ic_seerch.png" alt="" />
          </div>
        </div>  
        <div class="filter">
            
            <button class="btn btn__filter">
              <div class="icon__filter filter"></div>
              <span>Bộ lọc</span></button>
        </div>
        </div>
        <div class="func-right">
            <button class="btn btn__add-new"> + Thêm danh hiệu</button>
        </div>
       
      </div>
      <!-- <div class="main-header__right">
        <button class="btn btn__add-new">Thêm</button>
        <button class="btn btn__expand-more">Xuất khẩu</button>
        <button class="btn btn__toggle">
          <img src="../../assets/Icons/ic_More.png" alt="" />
        </button>
      </div> -->
    </div>
  </template>
  
  <script>
  export default {
    name: "MainHeader",
  };
  </script>
  
  <style scoped>
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
    left: 0;
    height: 24px;
    width: 24px;
    content: "";
    background: transparent url(../../assets/icons_cegov/sprites.06b14dc5.svg) no-repeat;
  }

  .filter {
    background-position: -96px -48px;
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
  }
  .input__search {
    border-radius: 3.5px;
    border: 1px solid #e4e6f1;
    height: 30px;
    overflow: hidden;
    padding-left: 10px;
    padding-right: 130px;
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
  }
  
  .btn__filter {
    background-color: #ffffff;
    color: #3d3f4e;
    border: 1px solid #cecece;
    position: relative;
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
  