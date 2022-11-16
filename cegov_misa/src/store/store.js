import { defineStore } from 'pinia'

export const useTitleStore = defineStore(
    {
        id: "title",
        state: () => {
        return { 
            isShowBtnAdd: true
         }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
    showBtn() {
        this.isShowBtnAdd = !this.isShowBtnAdd;
    }
  },
})
