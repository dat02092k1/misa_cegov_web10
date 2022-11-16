<template>
    <div class="box__popup">
        <div class="box__pop--wrapper">
            <div class="header-box">
            <span>Lọc danh hiệu</span>
            <div class="icon icon-dialog__close" @click="this.hideBox()"></div>
        </div>
        <div class="content-box"> 
            <div class="form-group-select">
                <label for="">Đối tượng khen thưởng</label>
                <div class="ip__select">
                    <input type="text" placeholder="Tất cả">
                </div>
            </div>
            <div class="form-group-select">
                <label for="">Cấp khen thưởng</label>
                <div class="ip__select">
                    <input type="text" placeholder="Tất cả">
                </div>
            </div>
            <div class="form-group-select">
                <label for="">Loại phong trào</label>
                <div class="ip__select">
                    <input type="text" placeholder="Tất cả">
                </div>
            </div>
            <div class="form-group-select">
                <label for="">Trạng thái</label>
                <div class="ip__select">
                    <input type="text" placeholder="Tất cả">
                </div>
            </div>
        </div>
        <div class="footer-box">
            <button @click="this.hideBox()" class="btn btn__cancelPopup">Hủy</button>
            <button class="btn btn__savePopup">Lưu</button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FilterDialog",
    props: ["hideBox",],
    methods: {
    
    }
}
</script>
 
<style scoped>
.box__popup {
    z-index: 100;
    position: absolute;
    top: 100%;
    right: 41px;
    width: 360px;
  height: 350px;
  background-color: #fff;
  margin-top: 20px;
}

.header-box {
    display: flex;
  justify-content: space-between;
  padding: 14px 0 6px 24px;
  align-items: center;
}

.header-box span {
    font-weight: 700;
    font-size: 18px;
}

.icon {
  background: transparent url(../../assets/icons_cegov/sprites.06b14dc5.svg)
    no-repeat;
  width: 20px;
  height: 20px;
  content: "";
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
.content-box {
    padding: 12px 24px 10px;
    display: flex;
    flex-direction: column;
}

.form-group-select {
    margin-bottom: 14px;
}

.form-group-select label {
    color: #666666;
    padding: 8px 8px 0 0;
}

.form-group-select .ip__select {
    margin-top: 10px;
}

.ip__select input {
    width: calc(100% - 12px);
    margin-left: 12px;
    height: 30px;
    border-radius: 3.5px;
    
    border:1px solid #666666;
}

.ip__select input:hover {
    outline: none;
    border:1px solid #2979ff;
}

.footer-box {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
}

.btn {
  border-radius: 4px;
  min-width: 96px;
  min-height: 36px;
  text-align: center;
  padding: 9px 16px;
  display: inline-block;
  font-size: 13px;
  margin: 0px 0px 0px 8px;
}

.btn__cancelPopup {
    background-color: #fff;
    border: 1px solid #e0e0e0;
}

.btn__cancelPopup:hover {
    cursor: pointer;
    background: #f4f5f8;
}

.btn__savePopup {
    color: #fff;
    background-color: #2979ff;
    border: none;
}

.btn__savePopup:hover {
    cursor: pointer;
    background: #1a73e8;
}
</style>