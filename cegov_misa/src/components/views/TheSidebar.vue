<template>
  <div class="sidebar">
    <div class="sidebar-item">
      <a href="">
        <div class="menu-item">
          <div class="icon-overview">
            <img
              src="../../assets/icons_cegov/ic_dashboard_default.110fa5f3.svg"
              alt=""
            />
          </div>
          <div class="">Tổng quan</div>
        </div>
      </a>
      <a href="">
        <div class="menu-item">
          <div class="icon-overview">
            <img
              src="../../assets/icons_cegov/ic_movement_default.102c9e3d.svg"
              alt=""
            />
          </div>
          <div class="">Thi đua</div>
        </div>
      </a>
      <a href="">
        <div class="menu-item">
          <div class="icon-overview">
            <img
              src="../../assets/icons_cegov/ic_movement_default.102c9e3d.svg"
              alt=""
            />
          </div>

          <div class="">Khen thưởng</div>
        </div>
      </a>
      <a href="">
        <div class="menu-item">
          <div class="icon-overview">
            <img
              src="../../assets/icons_cegov/ic_decision_menu.3fd2f620.svg"
              alt=""
            />
          </div>
          <div class="">Quyết định</div>
        </div>
      </a>
      <a href="">
        <div class="menu-item">
          <div class="icon-overview">
            <img
              src="../../assets/icons_cegov/ic_profile_default.d730fb8f.svg"
              alt=""
            />
          </div>
          <div class="">Hồ sơ</div>
        </div>
      </a>
      <a href="">
        <div class="menu-item">
          <div class="icon-overview">
            <img
              src="../../assets/icons_cegov/ic_search_default.903d371b.svg"
              alt=""
            />
          </div>
          <div class="">Tra cứu</div>
        </div>
      </a>
      <a href="">
        <div class="menu-item">
          <div class="icon-overview">
            <img
              src="../../assets/icons_cegov/ic_report_default.67157268.svg"
              alt=""
            />
          </div>
          <div class="">Báo cáo</div>
        </div>
      </a>
      <a href="">
        <div class="menu-item">
          <div class="icon-overview">
            <img
              src="../../assets/icons_cegov/ic_category.f257fcc6.svg"
              alt=""
            />
          </div>
          <div class="">Danh mục</div>
        </div>
      </a>
      <a href="">
        <div class="menu-item">
          <div class="icon-overview">
            <img
              src="../../assets/icons_cegov/ic_setting_default.be222d4a.svg"
              alt=""
            />
          </div>
          <div class="">Thiết lập</div>
        </div>
      </a>
      <a href="">
        <div class="menu-item">
          <div class="icon-overview">
            <img
              src="../../assets/icons_cegov/ic_guide_default.186420dc.svg"
              alt=""
            />
          </div>
          <div class="">Hướng dẫn</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSidebar",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.sidebar {
  height: calc(100vh - 56px);
  width: 204px;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

.logo-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 48px;
  box-sizing: border-box;
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
  color: black;
  cursor: pointer;
  height: 42px;
  width: 173px;
  padding: 10px;
}

.menu-item:hover {
  background-color: #b5daec;
  color: #fe8c39;
  border-radius: 4px;
}

.icon-overview {
  margin: 10px;
}
</style>
