<template>
  <div class="dialog">
    <div class="dialog-wrapper">
      <div class="dialog__header">
        <div class="dialog__title">Thêm danh hiệu thi đua</div>
        <div class="icon-dialog">
          <div class="icon icon-dialog-help"></div>
          <div class="icon icon-dialog__close" @click="this.hideDialog()"></div>
        </div>
      </div>
      <div class="dialog__body">
        <div class="dialog__info">
          <div class="info-content">
            <div class="row1">
              <label for="">
                Tên danh hiệu thi đua <span class="input--required">*</span>
              </label>
              <div class="ip-solv">
                <input
                  id="rewardName"
                  autofocus
                  class="ip ip--rewardName"
                  type="text"
                  maxlength="255"
                  placeholder="Nhập tên danh hiệu thi đua"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for=""
                  >Mã danh hiệu <span class="input--required">*</span></label
                >
                <input id="rewardCode" placeholder="Nhập mã danh hiệu" class="ip ip--title" type="text" />
              </div>
              <div class="col">
                <label for=""
                  >Đối tượng khen thưởng
                  <span class="input--required">*</span></label
                >
                <div class="checkbox-select">
                  <div class="select-left">
                    <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> Cá nhân</label>
                  </div>                  
                  <div class="select-right">
                    <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="Car"
                  />
                  <label for="vehicle2"> Tập thể</label>  
                  </div> 

                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for=""
                  >Cấp khen thưởng <span class="input--required">*</span></label
                >
                <input id="staffCode" class="ip ip--reward" type="text" />
              </div>
              <div class="col">
                <label for=""
                  >Loại phong trào áp dụng
                  <span class="input--required">*</span></label
                >
                <div class="checkbox-select">
                  <div class="select-left">
                    <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> Thường xuyên</label>
                  </div>                  
                  <div class="select-right">
                    <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="Car"
                  />
                  <label for="vehicle2"> Theo đợt</label>  
                  </div> 

                </div>
              </div>
            </div>
            <div class="row1">
              <label for="">
                Ghi chú 
              </label>
              <div class="text-area_container">
               <textarea class="text-area_item" name="" maxlength="255" id="" cols="30" placeholder="Ghi chú" rows="10"></textarea>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      <div class="dialog__footer">
        <button class="btn btn__close">Đóng</button>
        <button class="btn btn__save">Lưu</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DialogModel",
  props: ["hideDialog"],
  methods: {

  },
  data() {
    return {
        isShow: false
    }
  }
};
</script>

<style scoped>
label {
  display: inline-block;
  width: 110px;
}
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.626);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-wrapper {
  position: absolute;
  width: 700px;
  height: 590px;
  background-color: #fff;
  border-radius: 4px;
}

.dialog__header {
  display: flex;
  justify-content: space-between;
  padding: 24px 0 6px 24px;
  align-items: center;
}

.icon-dialog {
  display: flex;
}

.icon {
  background: transparent url(../../assets/icons_cegov/sprites.06b14dc5.svg)
    no-repeat;
  width: 20px;
  height: 20px;
  content: "";
}

.icon-dialog-help {
  background-position: -50px -50px;
  margin: 10px;
}

.icon-dialog__close {
  /* position: absolute;
    top: 10px;
    right: 5px;
    border: unset; */
  background-position: -242px -26px;
  margin: 10px;
}

/* .dialog__body {
} */

.dialog__info {
  margin: 10px;
}

.dialog__title {
  font-size: 20px;
  font-weight: 700;
  min-height: 24px;
}

.row1 {
  width: 100%;
}

.row1 label {
  width: auto;
  margin-left: 8px;
}

.ip-solv {
    display: flex;
}
.ip-solv input {
  flex: 1;
}
.row {
  display: flex;
  align-items: center;
}

.col {
  margin-right: 20px;
  justify-content: center;
  align-items: center;
}

.col label {
  margin: 8px;
  width: auto;
}
.ip {
  border-radius: 4px;
  border: 1px solid #cecece;
  margin: 8px;
  padding: 8px;
  color: #3d3f4e;
  
}

.ip--reward {
    width: 84%;
}

.ip--title {
    width: 90%;
}

.input--required {
  color: red;
}
/* .dialog__avatar {
      border-right: 2px solid #ccc;
      position: absolute;
      top: 20%;
      height: 50%;
  }
  
  .avt_img {
      height: 150px;
      border: 1px solid #ccc;
  } */
.checkbox-select {
    display: flex;
}

.select-left {
    width: 140px;
}

.select-right {
    width: 140px;
}
.btn {
  /* line-height: 30px; */
  height: 32px;
  border-radius: 4px;
  min-width: 96px;
  text-align: center;
  padding: 0 12px;
  display: inline-block;
  font-size: 13px;
  margin: 0px 0px 0px 8px;
}
.btn_chooseImg {
  background-color: #03ae66;
  color: #ffffff;
  border: none;
}

.dialog__footer {
  display: flex;
  justify-content: flex-end;
  margin: 8px;
}

.btn__close {
  background-color: #ffffff;
  color: #3d3f4e;
  border: 1px solid #cecece;
}

.btn__save {
  background-color: #03ae66;
  color: #ffffff;
  border: none;
}

.text-area_container {
    display: flex;
}

.text-area_item {
    margin-left: 8px;
    border-radius: 4px;
    flex: 1;
    padding: 8px;
    margin-top: 8px;
}
</style>
