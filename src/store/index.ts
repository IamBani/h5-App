import { defineStore } from 'pinia';

const useMainStore = defineStore('main', {
  state: () => ({
    num: 123,
    arr: [1, 2, 4],
  }),
  getters: {
    action(state) {
      return state.arr.filter((item) => item === 2);
    },
  },
  actions: {
    change(v:string) {
      console.log(v);
      this.arr.push(7, 9);
    },
    asyncChange(n: number) {
      setTimeout(() => {
        this.num += n;
      }, 1000);
    },
  },
  persist: true,
});

export default useMainStore;
