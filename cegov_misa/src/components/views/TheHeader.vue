<template>
    <div class="header">
      <div class="header-left">
                    <div class="header-left__launcher"></div>
                    <div class="header-left__logo">
                      <a href=""><img src="../../assets/Icons/ic_Help.png" alt=""></a>
                      <span>MISA CeGov</span>
                    </div>
                </div>
                
                    <ul class="header-right__list">
                        <li>
                            <div class="header-right__school">
                                <a href="https://emisapp.misa.vn/rc/Home.aspx" class="logo-launcher">
                                    <img src="../../assets/Icons/ic_Notification_32.png" alt="">
                                </a>                                
                            </div>
                        </li>
                        <li>
                          <a href="">
                            <img src="../../assets/Icons/ic_capnhatanh.png" alt="">
                          </a>
                        </li>
                        <li><img src="../../assets/Icons/ic_capnhatanh.png" alt=""></li>
                       
                        <li>
                            <div class="header-right__account">
                                <img src="../../assets/Icons/ic_Checkbox_Active.png" alt="">
                            </div>
                        </li>
                        <li>
                          <a href="">
                            <img src="../../assets/Icons/ic_girl.png" alt="">
                          </a>
                        </li>
                    </ul>
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
}

.header-left {
    font-size: 16px;
    font-weight: 600;
    color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.header-right__list {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
}

.header-right__list li {
    margin: 5px;
}
</style>
