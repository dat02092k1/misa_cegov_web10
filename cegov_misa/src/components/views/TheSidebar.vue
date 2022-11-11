<template>
    <div class="sidebar">
            <div class="logo-container">
                <div class="icon-menu">
                    
                </div>
                <div>Thiết bị</div>
            </div>
            <div class="sidebar-item">
                <a href="">
                    <div class="menu-item">
                        <div class="icon-overview">
                            <img src="../../assets/Icons/ic_TongQuan.svg" alt="">
                        </div>
                        <div class="">Tổng quan</div>
                    </div>
                </a>
                <a href="">
                    <div class="menu-item">
                        <div class="icon-overview">
                            <img src="../../assets/Icons/ic_ThietBi.svg" alt="">
                        </div>
                        <div class="">Thiết bị</div>
                    </div>
                </a>
                <a href="">
                    <div class="menu-item">
                        <div class="icon-overview">
                            <img src="../../assets/Icons/ic_MuonTra.svg" alt="">
                        </div>
                        <div class="">Mượn trả</div>
                    </div>
                </a>
                <a href="">
                    <div class="menu-item">
                        <div class="icon-overview">
                            <img src="../../assets/Icons/ic_BaoCao.svg" alt="">
                        </div>
                        <div class="">Báo cáo</div>
                    </div>
                </a>
                <a href="">
                    <div class="menu-item">
                        <div class="icon-overview">
                            <img src="../../assets/Icons/ic_HeThong.svg" alt="">
                        </div>
                        <div class="">Hệ thống</div>
                    </div>
                </a>
            </div>
        </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.sidebar {
  height: calc(100vh - 56px);
  width: 204px;
  background-color: #24344b;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.icon-menu {
    background-image: url(../../assets/Icons/ic_ThietBi.svg);
}

.logo-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 48px;
    box-sizing: border-box;
    color: #fff;
}

.logo__brand {
    box-sizing: border-box;
    width: 96px;
    height: 32px;
    background-repeat: no-repeat;
    background-size: 96px 32px;
    margin-top: 10px;
}

a {
    box-sizing: border-box;
    text-decoration: none;
    display: flex;
    justify-content: center;
}

.menu-item {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: start;
    color: #fff;
    cursor: pointer;
    height: 42px;
    width: 173px;
}

.menu-item:hover {
    background-color: #404f64;
} 
</style>
