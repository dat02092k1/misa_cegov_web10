<template>
  <div class="main-content">
    <div
      class="main-content-table"
      style="overflow-y: auto; overflow-x: auto; height: 400px"
    >
      <table>
        <thead ref="xxx">
          <tr class="head__row">
            <th class="head__checkbox">
              <div class="row-flex">
                <input
                  class="checkbox"
                  @click="toggleSelect"
                  :checked="selectAll"
                  v-model="selected"
                  type="checkbox"
                  name=""
                  id=""
                />
              </div>
            </th>
            <th>
              <div class="row-flex">
                <div class="row-flex__title">
                  <div class="row-flex__title">
                    <p class="flex__title">Tên danh hiệu thi đua</p>
                    <div style="display: none"></div>
                    <div v-show="isShowFilterCol"></div>
                  </div>
                </div>
                <div class="ic_sort">s</div>
              </div>
            </th>
            <th>
              <div class="row-flex">
                <div class="row-flex__title">
                  <p class="flex__title">Mã danh hiệu</p>
                  <div style="display: none"></div>
                  <div v-show="isShowFilterCol"></div>
                </div>
              </div>
            </th>
            <th>
              <div class="row-flex">
                <div class="row-flex__title">
                  <div class="row-flex__title">
                    <p class="flex__title">Đối tượng khen thưởng</p>
                    <div style="display: none"></div>
                    <div v-show="isShowFilterCol"></div>
                  </div>
                </div>
              </div>
            </th>
            <th>
              <div class="row-flex">
                <div class="row-flex__title">
                  <div class="row-flex__title">
                    <p class="flex__title">Cấp khen thưởng</p>
                    <div style="display: none"></div>
                    <div v-show="isShowFilterCol"></div>
                  </div>
                </div>
              </div>
            </th>
            <th>
              <div class="row-flex">
                <div class="row-flex__title">
                  <div class="row-flex__title">
                    <p class="flex__title">Loại phong trào</p>
                    <div style="display: none"></div>
                    <div v-show="isShowFilterCol"></div>
                  </div>
                </div>
              </div>
            </th>
            <th>
              <div class="row-flex">
                <div class="row-flex__title">
                  <div class="row-flex__title">
                    <p class="flex__title">Trạng thái</p>
                    <div style="display: none"></div>
                    <div v-show="isShowFilterCol"></div>
                  </div>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody ref="yyy">
          <tr
            @dblclick="onRowDbClick(item)"
            class="table__row"
            v-for="(item, index) in data"
            :key="index"
          >
            <td>
              <input
                @change="useTitle.showBtn"
                v-bind:id="index"
                @click="selectorCheckbox(index)"
                class="checkbox"
                type="checkbox"
                v-model="item.checked"
                name=""
              />
            </td>
            <td :title="item.titleLabel" >
              <div>
                <span>{{ item.titleLabel }}</span>
              </div>
            </td>
            <td :title="item.titleCode">
              <div>
                <span>{{ item.titleCode }}</span>
              </div>
            </td>
            <td :title="randomProperty(item.rewardCandidate)">
              <div>
                <span>{{ randomProperty(item.rewardCandidate) }}</span>
              </div>
            </td>
            <td :title="item.rewardLevel">
              <div>
                <span>{{ item.rewardLevel }}</span>
              </div>
            </td>
            <td :title="randomProperty(item.rewardType)">
              <div>
                <span>{{ randomProperty(item.rewardType) }}</span>
              </div>
            </td>
            <td :title="item.rewardStatus[0]" id="status">
              <div>
                <span>{{ item.rewardStatus[0] }}</span>
              </div>
              <div class="row--action" v-show="isShowTrigger">
                <div class="trigger__icon">
                  <div class="icon ic__edit"></div>
                </div>
                <div class="trigger__icon">
                  <div class="icon ic__edit"></div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div class="container-footer">
      <div class="table__info">
        <div>Tổng số: </div>
        <div class="page_amount"> <b>{{ data.length }}</b> </div>
        <div>bản ghi</div>
      </div> <div class="table__paging">
        <div>Số bản ghi/trang</div>
        <span class="page-count">
          <input class="ip page_control" v-model="data.length" type="number" />
        </span>

        <div>1 - {{ data.length }} bản ghi</div>
        </div> 
    </div> -->
    <div class="container-footer">
      <div class="main-paging-left">
        Tổng số: <span>{{ this.data.length }}</span> bản ghi
      </div>
    </div>
    <LoadingContent :showLoadingFunction="showLoading" v-show="isLoading" />
  </div>
</template>

<script>
import LoadingContent from "../base/LoadingContent.vue";
import { useTitleStore } from "../../store/store.js";
export default {
  name: "MainContent",
  components: { LoadingContent },
  props: ["funcShowDialog", "showLoading"],
  computed: {
    selectAll: function () {
      return this.data.every(function (item) {
        return item.checked;
      });
    },
    valueCheckbox() {
      this.checkboxId.length;
      return this.checkboxId.length;
    },
  },
  created() {
    // fetch data
    // show loading
    // this.isLoading = true;
    // fetch("https://amis.manhnv.net/api/v1/Employees")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     this.titles = res;
    //     this.isLoading = false;
    //   });
  },
  data() {
    return {
      isLoading: false,
      titles: [],
      active: false,
      data: [
        {
          titleLabel: "Lao động tiên tiến",
          titleCode: "LĐTTCH",
          rewardCandidate: ["Cá nhân", "Tập thể"],
          rewardLevel: "Cấp tỉnh/tương đương",
          rewardType: ["Thường xuyên", "Theo đợt"],
          rewardStatus: ["Sử dụng", "Ngừng sử dụng"],
          checked: false,
        },
        {
          titleLabel: "Tập thể lao động tiên tiến",
          titleCode: "TTLĐTT",
          rewardCandidate: ["Cá nhân", "Tập thể"],
          rewardLevel: "Cấp nhà nước",
          rewardType: ["Thường xuyên", "Theo đợt"],
          rewardStatus: ["Sử dụng", "Ngừng sử dụng"],
          checked: false,
        },
        {
          titleLabel: "Chiến sĩ thi đua cấp bộ",
          titleCode: "CSTĐCB",
          rewardCandidate: ["Cá nhân", "Tập thể"],
          rewardLevel: "Cấp tỉnh/tương đương",
          rewardType: ["Thường xuyên", "Theo đợt"],
          rewardStatus: ["Sử dụng", "Ngừng sử dụng"],
          checked: false,
        },
        {
          titleLabel: "Cờ thi đua của chính phủ",
          titleCode: "CTĐCCP",
          rewardCandidate: ["Cá nhân", "Tập thể"],
          rewardLevel: "Cấp huyện/tương đương",
          rewardType: ["Thường xuyên", "Theo đợt"],
          rewardStatus: ["Sử dụng", "Ngừng sử dụng"],
          checked: false,
        },
        {
          titleLabel: "Chiến sĩ thi đua cấp tỉnh",
          titleCode: "CSTĐCT",
          rewardCandidate: ["Cá nhân", "Tập thể"],
          rewardLevel: "Cấp xã/tương đương",
          rewardType: ["Thường xuyên", "Theo đợt"],
          rewardStatus: ["Sử dụng", "Ngừng sử dụng"],
          checked: false,
        },
        {
          titleLabel: "Chiến sĩ thi đua toàn quốc",
          titleCode: "CSTĐTQ",
          rewardCandidate: ["Cá nhân", "Tập thể"],
          rewardLevel: "Cấp huyện/tương đương",
          rewardType: ["Thường xuyên", "Theo đợt"],
          rewardStatus: ["Sử dụng", "Ngừng sử dụng"],
          checked: false,
        },
        {
          titleLabel: "Lao động xuất sắc cấp tỉnh",
          titleCode: "LĐXSCT",
          rewardCandidate: ["Cá nhân", "Tập thể"],
          rewardLevel: "Cấp tỉnh/tương đương",
          rewardType: ["Thường xuyên", "Theo đợt"],
          rewardStatus: ["Sử dụng", "Ngừng sử dụng"],
          checked: false,
        },
        {
          titleLabel: "Lao động tiên tiến",
          titleCode: "LĐTTCH",
          rewardCandidate: ["Cá nhân", "Tập thể"],
          rewardLevel: "Cấp nhà nước",
          rewardType: ["Thường xuyên", "Theo đợt"],
          rewardStatus: ["Sử dụng", "Ngừng sử dụng"],
          checked: false,
        },
        {
          titleLabel: "Cờ thi đua của chính phủ",
          titleCode: "CTĐCCP",
          rewardCandidate: ["Cá nhân", "Tập thể"],
          rewardLevel: "Cấp huyện/tương đương",
          rewardType: ["Thường xuyên", "Theo đợt"],
          rewardStatus: ["Sử dụng", "Ngừng sử dụng"],
          checked: false,
        },
        {
          titleLabel: "Chiến sĩ thi đua cơ sở",
          titleCode: "CSTĐCS",
          rewardCandidate: ["Cá nhân", "Tập thể"],
          rewardType: ["Thường xuyên", "Theo đợt"],
          rewardStatus: ["Sử dụng", "Ngừng sử dụng"],
          rewardLevel: "Cấp nhà nước",
          checked: false,
        },
      ],
      checkboxId: [],
      selected: false,
      check: 0,
      useTitle: useTitleStore(),
    };
  },
  methods: {
    randomProperty(obj) {
      var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
    },
    /*
    select checkbox thead
    once checkbox in trow is checked
    */
    selectorCheckbox(id) {
      this.checkboxId.push(id);
      if (this.checkboxId.length > 0) {
        this.selected = true;
      }

      console.log(this.selected);
      console.log(this.checkboxId.length);
    },
    /*
    check head checkbox item
    auto check body checkbox item
    */
    toggleSelect: function () {
      this.check = 1;
      var select = this.selectAll;
      this.data.forEach(function (item) {
        item.checked = !select;
      });
      this.selectAll = !select;
    },
    /*
      show information of specified row
      that is double clicked
      */
    onRowDbClick(item) {
      try {
        this.funcShowDialog(item);
      } catch (error) {
        console.log("error");
      }
    },
    focusRow(item) {
      console.log(item);
      this.active = !this.active;
    }
  },
};
</script>

<style scoped>
@import url(../../css/base/icon.css);

.row-flex__title {
  display: flex;
}

.flex__title {
  margin-left: 10px;
}

.head__checkbox {
  width: 53px;
}
/* .main-content {
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.main-content-table {
  overflow-y: auto;
  overflow-x: auto;
  height: 400px;
} */
table {
  background-color: #fff;
  border-radius: 4px;
  border-collapse: collapse;
  min-width: 100%;
  border-color: gray;
}
.table__row {
  text-align: center;
}

.table__row:focus {
  background-color: #2979ff;
}
.head__row th {
  border-bottom: 1px solid #e0e1ef;
  border-right: 1px solid #e0e1ef;
  height: 48px;
  box-sizing: border-box;
}
.table__row td {
  border-bottom: 1px solid #e0e1ef;
  border-right: 1px solid #e0e1ef;
  height: 40px;
}

.table__row td div {
  display: flex;
}

.table__row td div span {
  margin-left: 10px;
}

/* .table__row td {
  text-align: left;
} */
/* .table__row td div {
  margin-left: 10px;
} */
/* .row-flex {
  display: flex;
  
} */

.ic_sort {
  display: none;
}

.page_amount {
  margin: 16px 6px;
}

tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  border: 1px solid black;
  display: none;
  width: 50px;
  background-color: #ffffff;
  color: black;
  padding: 6px 6px;
  font-size: 8px;
  position: absolute;
  z-index: 1;
  bottom: -90%;
  left: 100%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  display: block;
  cursor: pointer;
}
tr:hover {
  cursor: pointer;
}
tbody tr:hover {
  background-color: #fbe9e7;
}


.checkbox {
  height: 15px;
  width: 15px;
  text-align: left;
  cursor: pointer;
  position: sticky;
  padding: 0 16px;
}

.table_fuction {
  display: flex;
}

.page-amount-title {
  margin: 8px;
}

.table_fuction .ic__row {
  visibility: hidden;
}

.table_fuction:hover .ic__row {
  visibility: visible;
}
.next-page {
  margin-left: 8px;
  position: relative;
}
.icon-arr {
  content: "";
  position: absolute;
  background: transparent url(../../assets/icons_cegov/sprites.06b14dc5.svg)
    no-repeat -240px 0;
  height: 24px;
  width: 24px;
}

.icon-pre {
  transform: rotate(-180deg);
  top: -10px;
}

.icon-next {
  right: -36px;
  top: -9px;
}

.ic_check {
  text-align: center;
}

.number__pages {
  margin: 8px;
}

.number__teachers {
  margin: 8px;
}

.container-footer {
  width: calc(100% - 236.5px);
  position: fixed;
  bottom: 16px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #e0e1ef;
  align-items: flex-end;
  justify-content: space-between;
  padding: 18px;
  background-color: #fff;
  box-sizing: border-box;
}

.main-paging-left > span {
  font-weight: 600;
  font-family: Roboto Medium;
  font-size: 14px;
}

.main-paging-right {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.select-paging > select {
  margin: 0;
  cursor: pointer;
}

.number-paging {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 4px;
  box-sizing: border-box;
}

.number-paging > .next-page {
  border: none;
  background-color: #fff;
  color: #111;
  font-size: 13px;
  margin-left: 4px;
  margin-right: 7px;
  margin-bottom: 2px;
  cursor: pointer;
}

.number-paging > .previous-page {
  border: none;
  background-color: #fff;
  color: #111;
  font-size: 13px;
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 2px;
  cursor: pointer;
}

.page-selected {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  cursor: pointer;
}

.page-unselected {
  background-color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 1px;
}
/* .container-footer {
  width: calc(100% - 230px);
  position: fixed;
  bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #fff;
  box-sizing: border-box;

  .table__info {
  display: flex;
  align-items: center;
  margin: 5px;
}

  .table__paging {
  display: flex;
  align-items: center;
  margin: 5px;
}

.page-count {
  margin: 4px 16px;
}

.page_control {
  height: 25px;
  width: 64px;
  text-align: center;
}
} */

.loading {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #4545459b;
}

.loading__content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loading__icon {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border-top: 8px solid rgb(0, 142, 31);
}
</style>
