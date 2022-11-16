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
                  ref='focusMe'
                  v-model="title.name"
                  @blur="validate()"
                />
                <div class="feedback-invalid--name" v-if="errors.name">
                  {{ errors.name }}
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="flex mr2">
                <label class="form-group-label d-flex">
                  Mã danh hiệu
                  <span class="required">*</span></label
                >
                <div class="flex">
                  <div class="ms-input ms-editor w-100">
                    <div class="flex-row border">
                      <input
                        placeholder="Nhập mã danh hiệu"
                        maxlength="25"
                        type="text"
                        class="ms-input-item flex"
                      
                        v-model="title.code"
                        @blur="validate()"
                      />
                      <!-- <div
                        class="icon24 error error-icon"
                        style="display: none"
                      ></div> -->
                      <!----><!----><!---->
                    </div>
                    <!---->
                  </div>
                </div>
                <div class="feedback-invalid--code" style="margin: 14px 0; color: red;" v-if="errors.code">
                  {{ errors.code }}
                </div>
              </div>
              <div class="flex mr2">
                <label class="form-group-label d-flex">
                  Đối tượng khen thưởng
                  <span class="required">*</span></label
                >
                <div class="flex-row flex-center">
                  <div class="flex">
                    <label
                      class="text-black ms-checkbox ms-editor label-checkbox"
                      rules="required"
                      ><input
                        type="checkbox"
                        class="ms-checkbox-control"
                        value="false"
                        v-model="title.valueIp1"
                        @blur="validate()"
                        @change="handleTermsState"
                      /><span class="checkmark"></span
                      ><span class="ms-checkbox--text text-black"
                        >Cá nhân</span
                      ></label
                    >
                  </div>
                  <div class="flex">
                    <label
                      class="text-black ms-checkbox ms-editor label-checkbox"
                      rules="required"
                      ><input
                        type="checkbox"
                        class="ms-checkbox-control"
                        value="false"
                        v-model="title.valueIp2"
                        @blur="validate()"
                        @change="handleTermsState"
                      /><span class="checkmark"></span
                      ><span class="ms-checkbox--text text-black"
                        >Tập thể</span
                      ></label
                    >
                  </div>
                </div>
                <p
                  style="color: red; margin-left: 19px;"
                  class="for-error terms-error"
                  v-if="multipeValueIp"
                >
                  Đối tượng khen thưởng không được để trống.
                </p>
              </div>
            </div>

            <div class="form-group">
              <div class="flex mr-2">
                <label class="form-group-label d-flex">
                  Cấp khen thưởng
                  <span class="required">*</span></label
                >
                <div class="flex">
                  <div class="ms-input ms-editor w-100">
                    <div class="flex-row border">
                      
                      <!-- <input
                        placeholder="Chọn hiện vật khen thưởng"
                        class="ms-input-item flex"
                        title="Cấp Huyện/tương đương"
                        v-model= "selected"
                      />   -->
                      <select class="ms-input-item flex">
    <option value="0">Cấp Nhà nước:</option>
    <option value="1">Cấp Tỉnh/tương đương</option>
    <option value="2">Cấp Huyện/tương đương</option>
    <option value="5">Cấp Xã/tương đương</option>
  </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex mr-2">
                <label class="form-group-label d-flex">
                  Loại phong trào áp dụng
                  <span class="required">*</span></label
                >
                <div class="flex-row flex-center">
                  <div class="flex">
                    <label
                      class="text-black ms-checkbox ms-editor label-checkbox"
                      rules="required"
                      ><input
                        type="checkbox"
                        class="ms-checkbox-control"
                        value="false"
                        v-model="title.valueIp3"
                        @blur="validate()"
                      /><span class="checkmark"></span
                      ><span class="ms-checkbox--text text-black"
                        >Thường xuyên</span
                      ></label
                    >
                  </div>
                  <div class="flex">
                    <label
                      class="text-black ms-checkbox ms-editor label-checkbox"
                      rules="required"
                      ><input
                        type="checkbox"
                        class="ms-checkbox-control"
                        value="false"
                        v-model="title.valueIp3"
                        @blur="validate()"
                      /><span class="checkmark"></span
                      ><span class="ms-checkbox--text text-black"
                        >Theo đợt</span
                      ></label
                    >
                  </div>
                  
                </div>
                <p
                  style="color: red; margin-left: 19px;"
                  class="for-error terms-error"
                  v-if="multipeValueIp2"
                >
                  Loại phong trào không được để trống.
                </p>
              </div>
            </div>
            
            <div class="row1">
              <label for=""> Ghi chú </label>
              <div class="text-area_container">
                <textarea
                  class="text-area_item"
                  name=""
                  maxlength="255"
                  id=""
                  cols="30"
                  placeholder="Ghi chú"
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dialog__footer">
        <button @click="this.hideDialog()" class="btn btn__close">Hủy</button>
        <button class="btn btn__addSave">Lưu & thêm mới</button>
        <button @click="onSaveInfo" class="btn btn__save">Lưu</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DialogModel",
  props: ["hideDialog", "titleSelected"],
  computed: {
    multipeValueIp() {
      this.errors.valueIp1;
      this.errors.valueIp2;
      return this.errors.valueIp1 && this.errors.valueIp2;
    },
    multipeValueIp2() {
      this.errors.valueIp3;
      this.errors.valueIp4;
      return this.errors.valueIp3 && this.errors.valueIp4;
    }
  },
  mounted() {
    this.$nextTick(() => this.$refs.focusMe.focus())
  },
  methods: {
    handleTermsState() {
      this.validated = false;
    },
    /* 
    validate the input from user
    */
    validate() {
      try {
        
        let isValid = true;
        this.errors = {
          name: "",
          code: "",
          valueIp1: false,
          valueIp2: false,
          valueIp3: false,
          valueIp4: false,
        };

        if (!this.title.name) {
          this.errors.name = "Tên danh hiệu thi đua không được để trống";
          isValid = false;
        }
        
        if (!this.title.code) {
          this.errors.code = "Mã danh hiệu thi đua không được để trống";
          isValid = false;
        }

        if (!this.title.valueIp1) {
          this.errors.valueIp1 = "valueIp không được để trống";
          isValid = false;
        }

        if (!this.title.valueIp2) {
          this.errors.valueIp2 = "valueIp không được để trống";
          isValid = false;
        }
        

        if (!this.title.valueIp3) {
          this.errors.valueIp3 = "valueIp không được để trống";
          isValid = false;
        }

        if (!this.title.valueIp4) {
          this.errors.valueIp4 = "valueIp không được để trống";
          isValid = false;
        }
        console.log(isValid);
        return isValid;
        
      } catch (error) {
        console.log("error");
      }
    },
    /* 
    save the information
    of title if it meets validate function
    */
    onSaveInfo() {
      try {
        if (this.validate() == true) {
          console.log('vks');
          // call api to save info
          console.log("call api");
        }
      } catch (error) {
        console.log("error:");
      }
    },
  },
  created() {
    this.titleProp = this.titleSelected;
    this.title.name = this.titleProp.titleLabel;
    this.title.code = this.titleProp.titleCode;
  },
  data() {
    return {
      isShow: false,
      termsState: false,
      validated: false,
      titleProp:{}, 
      title: {
        name: "",
        code: "",
        valueIp1: false,
        valueIp2: false,
        valueIp3: false,
        valueIp4: false,
      },
      errors: {
        name: "",
        code: "",
        valueIp1: false,
        valueIp2: false,
        valueIp3: false,
        valueIp4: false,
      },
    };
  },
};
</script>

<style scoped>
@import url(../../css/base/input.css);
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

.feedback-invalid {
  color: red;
}

.feedback-invalid--name {
  color: red;
  margin-top: 14px;
}
.dialog-wrapper {
  position: absolute;
  width: 600px;
  height: auto;
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
  margin: 8px;
}

.icon-dialog-help:hover {
  cursor: pointer;
}

.icon-dialog__close {
  /* position: absolute;
    top: 10px;
    right: 5px;
    border: unset; */
  background-position: -242px -26px;
  margin: 8px;
}

.icon-dialog__close:hover {
  cursor: pointer;
  background-position: -266px -26px;
}

.form-group {
  display: flex;
  margin-bottom: 16px;
}
.flex {
  flex: 1;
}

.form-group-label {
  display: flex;
  font-weight: 400;
  height: 20px;
  margin-bottom: 8px;
  padding: 0;
  width: auto;
}

.form-group-label .required {
  color: #e54848;
}

.ms-input {
  background: #fff;
  padding: 0;
  width: 100%;
}

.ms-editor {
  
  width: 100%;
}

.label-checkbox {
  display: flex;
  align-items: center;
}

.ms-editor .border {
  border: 1px solid #e0e0e0;
  border-radius: 3.5px;
  margin-right: 10px;
}

/* .ms-editor .border {
  border-color: #1a73e8;
} */

.flex-row {
  display: flex;

  align-items: center;
}

/* .ms-editor .border input:focus {
  outline: none !important;
  border: 1px solid #2979ff;
  padding-right: 10px;
} */
.flex-center {
  padding: 10px;
}

.ms-editor .border input {
  border-radius: 3.5px;
}

.border:hover{
  outline: none !important;
  border: 1px solid #2979ff;
}

.border input:focus{
  outline: none !important;
  
  border: 1px solid #2979ff;
}
.ms-input-item {
  box-sizing: border-box;
  padding: 8px;
  border: none;
  background: 0 0;
  min-height: 34px;
}


.dialog__body {
  padding: 24px 24px 0;
}

.dialog__title {
  font-size: 20px;
  font-weight: 700;
  min-height: 24px;
}

.row1 {
  margin-bottom: 16px;
  width: 100%;
}

.row1 label {
  width: auto;
  margin-bottom: 8px;
}

.ip-solv {
  display: flex;
  flex-direction: column;
}
.ip-solv input {
  flex: 1;
}

.ip-solv input:focus {
  outline: none !important;
  border: 1px solid #2979ff;
}

.ip-solv input:hover {
  outline: none !important;
  border: 1px solid #2979ff;
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
  width: auto;
}

.col input:focus {
  outline: none !important;
  border: 1px solid #2979ff;
}
.ip {
  border-radius: 4px;
  border: 1px solid #cecece;
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
  padding: 12px 24px;
}

.btn__close {
  background-color: #ffffff;
  color: #3d3f4e;
  border: 1px solid #cecece;
}

.btn__close:hover {
  background-color: #f4f5f8;
  cursor: pointer;
}

.btn__save {
  background-color: #2979ff;
  color: #ffffff;
  border: none;
}

.btn__save:hover {
  cursor: pointer;
  background-color: #1a73e8;
}

.btn__addSave {
  background-color: #ffffff;
  color: #2979ff;
  border: 1px solid #2979ff;
}

.btn__addSave:hover {
  background-color: #eef4ff;
  cursor: pointer;
}

.text-area_container {
  display: flex;
}

.text-area_item {
  border-radius: 4px;
  flex: 1;
  padding: 8px;
  margin-top: 8px;
  border: 1px solid #cecece;
  resize: none;
}

.text-area_item:focus {
  outline: none !important;
  border: 1px solid #2979ff;
}
</style>
