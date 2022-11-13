<template>
    <div class="header">
      <div class="header-left">
                    <div class="header-left__launcher">
                      <div class="launcher__icon__left"></div>
                    </div>
                    <div class="header-left__logo">
                      <a href="" class="a__logo"></a>
                      <a href="" class="a__title">MISA CeGov</a>
                     
                    </div>
                </div>

                <div class="header-right">
                    <a class="header-right__launcher">
                      <div class="launcher__icon_right noti"></div>
                    </a>

                    <a class="header-right__launcher">
                      <div class="launcher__icon_right guide"></div>
                    </a>

                    <a class="header-right__launcher">
                      <img src="../../assets/icons_cegov/ic_document_help.5a303db8.svg" alt="">
                    </a>

                    <a class="header-right__launcher">
                      <div class="launcher__icon_right setting"></div>
                    </a>

                    <a class="header-right__launcher">
                      <img class="item__avatar" src="../../assets/icons_cegov/getavatar.png" alt="">
                    </a>
                </div>
    </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 56px;
  display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 6px 6px;
    border: 1px solid #cecece;
}

.header-left {
    font-size: 16px;
    font-weight: 600;
    color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header-right {
  font-size: 16px;
    font-weight: 600;
    color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header-left__launcher {
  padding: 0 16px;
  height: 100%;
}

.header-right__launcher {
  padding: 0 16px;
  height: 100%;
}

.header-right__launcher:hover {
  background-color: #cdcdcd;
  border-radius: 50%;
  padding: 5px 5px;
}
.launcher__icon__left {
  height: 24px;
  width: 24px;
  background: transparent url(../../assets/icons_cegov/sprites.06b14dc5.svg) no-repeat -192px 0;
}

.launcher__icon_right {
  height: 24px;
  width: 24px;
  background: transparent url(../../assets/icons_cegov/sprites.06b14dc5.svg) no-repeat;
}

.setting {
  background-position: -264px -168px;
}

.guide {
  background-position: -48px -48px;
}

.item__avatar {
  border-radius: 50%;
  height: 32px;
  width: 32px;
}
.header-left__logo {
  display: flex;
  align-items: center;
}
.a__logo {
  width: 32px;
  height: 32px;
  background: url(../../assets/icons_cegov/ic_cegoLogo_new.89475e3e.svg) no-repeat;
  background-size: 32px;
  margin-right: 12px;
  display: block;
}

.a__title {
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
}
.header-right__list {
    display: flex;
    justify-content: center;
    align-items: center;
    /* list-style: none; */
}

.nav__item {
  position: relative;
}
.item {
  content: "";
  background: transparent url(../../assets/icons_cegov/sprites.06b14dc5.svg) no-repeat;
  height: 24px;
  width: 24px;
  position: absolute;
}

.noti {
  background-position: -24px -48px;
}


</style>
