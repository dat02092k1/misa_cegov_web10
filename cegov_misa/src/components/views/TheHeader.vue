<template>
    <div class="header">
      <div class="header-left">
                    <div class="header-left__launcher">
                      <div class="launcher__icon"></div>
                    </div>
                    <div class="header-left__logo">
                      <!-- <a href=""><img src="../../assets/icons_cegov/ic_cegoLogo_new.89475e3e.svg" alt=""></a> -->
                      <a href="" class="a__logo"></a>
                      <a href="" class="a__title">MISA CeGov</a>
                     
                    </div>
                </div>
                
                    <!-- <ul class="header-right__list">
                        <li>
                            <div class="header-right__school">
                                <a href="https://emisapp.misa.vn/rc/Home.aspx" class="icon_right noti"></a>                                
                            </div>
                        </li>
                        <li>
                          <a href="" class="icon_right help"></a>
                        </li>

                        <li><a href="" class="icon_right rule">
                          </a></li>
                       
                        <li>
                          <a href="" class="icon_right setting"></a>
                        </li>
                        <li class="icon_avatar">
                          <img src="../../assets/icons_cegov/getavatar.png" class="avatar" alt="">
                        </li>
                    </ul> -->
                    <div class="header-right__list">
                      
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
.right-btt-act {
  height: 50% !important;
  width: 32px; 
  margin: auto 5px !important;
  border-radius: 50%;
}

.right-act {
  height: 100%;
  width: 48px;
  background: transparent url(../../assets/icons_cegov/sprites.06b14dc5.svg) no-repeat;
  position: absolute; /* top:16px; */ /* left:11px; */
  height: 24px;
  width: 24px;
}

.right-act .noti {
  background-position: -24px -48px;
}
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

.header-left__launcher {
  padding: 0 16px;
  height: 100%;
}
.launcher__icon {
  height: 24px;
  width: 24px;
  background: transparent url(../../assets/icons_cegov/sprites.06b14dc5.svg) no-repeat -192px 0;
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

.icon_right {
  background: transparent url(../../assets/icons_cegov/sprites.06b14dc5.svg) no-repeat;
  height: 24px;
  width: 24px;
}

.noti {
  background-position: -24px -48px;
}
.header-right__list li {
    margin: 5px;
}
</style>
