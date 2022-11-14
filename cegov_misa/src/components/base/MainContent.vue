<template>
  <div class="main-content">
    <div
      class="main-content-table"
      style="overflow-y: auto; overflow-x: auto; height: 400px"
    >
      
      <table>
        <thead>
          <tr class="head__row">
            <th>
              <div class="row-flex">
                <input class="checkbox" @click="toggleSelect" :checked="selectAll" v-model="selected" type="checkbox" name="" id="" />
              </div>
            </th>
            <th>
              <div class="row-flex">
                <div class="row-flex__title">Tên danh hiệu thi đua</div>
                <div class="ic_sort">s</div>
              </div>
            </th>
            <th>
              <div class="row-flex">
                <div class="row-flex__title">Mã danh hiệu</div>
              </div>
            </th>
            <th>
              <div class="row-flex">
                <div class="row-flex__title">Cấp khen thưởng</div>
              </div>
            </th>
            <th>
              <div class="row-flex">
                <div class="row-flex__title">Đối tượng khen thưởng</div>
              </div>
            </th>
            <th>
              <div class="row-flex">
                <div class="row-flex__title">Loại phong trào</div>
              </div>
            </th>
            <th>
              <div class="row-flex">
                <div class="row-flex__title">Trạng thái</div>
              </div>
            </th>
            
          </tr>
        </thead>
        <tbody>
          <tr @dblclick="onRowDbClick" class="table__row" v-for="(item, index) in data"
            :key="index"> 
            <td>
              <input v-bind:id="index" @click="selectorCheckbox(index)" class="checkbox" type="checkbox" v-model="item.checked" name="" />
            </td>
            <td>
              {{item.titleLabel}}
            </td>
            <td>
              {{item.titleCode}}
            </td>
            <td>
                {{ item.rewardCandidate
                }}
            </td>
            <td>
                {{ item.rewardCandidate
                }}
            </td>
            <td>
                {{ item.rewardCandidate
                }}
            </td>
            <td>
                {{ item.rewardCandidate
                }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container-footer">
      <div class="table__info">
        <div>Tổng số: </div>
        <div class="page_amount">{{ data.length }}</div>
        <div>bản ghi</div>
      </div>
      <div class="table__paging">
        <div>Số bản ghi/trang</div>
        <span class="page-count">
          <input class="ip page_control" v-model="data.length" type="number" />
        </span>

        <div>1 - {{ data.length }} bản ghi</div>
        
      </div>
    </div>
    <LoadingContent :showLoadingFunction="showLoading" v-show="isLoading" />
  </div>
</template>

<script>
import LoadingContent from "../base/LoadingContent.vue";

export default {
  name: "MainContent",
  components: { LoadingContent },
  props: ["addFunction", "showLoading"],
  computed: {
    selectAll: function() {
      return this.data.every(function(item){
        return item.checked;
      });
    },
    valueCheckbox() {
      this.checkboxId.length;
      return this.checkboxId.length;
    }
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
      data: [
        {
        "titleLabel": "Lao động tiên tiến",
        "titleCode": "LĐTTCh",
        "rewardCandidate": "Cá nhân",
        "rewardLevel": "Cấp tỉnh/tương đương",
        'checked': false},
        {
        "titleLabel": "Tập thể lao động tiên tiến",
        "titleCode": "TTLĐTT",
        "rewardCandidate": "Tập thể",
        "rewardLevel": "Cấp nhà nước",
        'checked': false},
        {
        "titleLabel": "Lao động tiên tiến",
        "titleCode": "LĐTTCh",
        "rewardCandidate": "Cá nhân",
        "rewardLevel": "Cấp tỉnh/tương đương",
        'checked': false},
        {
        "titleLabel": "Cờ thi đua của chính phủ",
        "titleCode": "CTĐCCP",
        "rewardCandidate": "Tập thể",
        "rewardLevel": "Cấp nhà nước",
        'checked': false},
        {
        "titleLabel": "Lao động tiên tiến",
        "titleCode": "LĐTTCh",
        "rewardCandidate": "Cá nhân",
        "rewardLevel": "Cấp nhà nước",
        'checked': false},
        {
        "titleLabel": "Lao động tiên tiến",
        "titleCode": "LĐTTCh",
        "rewardCandidate": "Cá nhân",
        "rewardLevel": "Cấp nhà nước",
        'checked': false},
        {
        "titleLabel": "Lao động tiên tiến",
        "titleCode": "LĐTTCh",
        "rewardCandidate": "Cá nhân",
        "rewardLevel": "Cấp nhà nước",
        'checked': false},
        {
        "titleLabel": "Lao động tiên tiến",
        "titleCode": "LĐTTCh",
        "rewardCandidate": "Cá nhân",
        "rewardLevel": "Cấp nhà nước",
        'checked': false},
        {
        "titleLabel": "Lao động tiên tiến",
        "titleCode": "LĐTTCh",
        "rewardCandidate": "Cá nhân",
        "rewardLevel": "Cấp nhà nước",
        'checked': false},
        {
        "titleLabel": "Lao động tiên tiến",
        "titleCode": "LĐTTCh",
        "rewardCandidate": "Cá nhân",
        "rewardLevel": "Cấp nhà nước",
        'checked': false}
      ],
      checkboxId: [],
      selected: false
    };
  },
  methods: {
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
    toggleSelect: function() {
      var select = this.selectAll;
      this.data.forEach(function(item) {

        item.checked = !select;

      });
      this.selectAll = !select;
    },
    /*
      show information of specified row 
      that is double clicked 
      */
    onRowDbClick() {
      try {
        this.addFunction();
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>

<style scoped>
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
  box-sizing: border-box;
}
.row-flex {
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.row-flex__title {
  margin: 5px;
  
}

.ic_sort {
  display: none;
}

.table__info {
  display: flex;
  align-items: center;
  margin: 5px;
}
.page_amount {
  margin: 4px 16px;
}
.page-count {
  margin: 4px 16px;
}
/* 
table {
  overflow-y: scroll;
  border-radius: 4px;
  border-collapse: collapse;
  width: 100%;
}

tr {
  text-align: center;
  border: 1px solid #cccccc;
}

tr:hover {
  background-color: #fbe9e7;
  cursor: pointer;
}

#tr__title {
  position: relative;
}

th,
td {
  border-right: 1px solid #cccccc;
  text-align: center;
} */

/* .tooltip {
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
} */
tr:hover {
  background-color: #fbe9e7;
  cursor: pointer;
}
.checkbox {
  height: 15px;
  width: 15px;
  
  cursor: pointer;
  position: sticky;
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

.table__paging {
  display: flex;
  align-items: center;
  margin: 5px;
}



.number__pages {
  margin: 8px;
}

.number__teachers {
  margin: 8px;
}
.page_control {
  height: 25px;
  width: 64px;
  text-align: center;
}

.container-footer {
  width: calc(100% - 246px);
  position: fixed;
  bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #fff;
  box-sizing: border-box;
}

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
