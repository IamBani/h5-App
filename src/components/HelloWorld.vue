<template>
  {{mainStore.num}}
  {{mainStore.arr}}
  <button @click="change">点击</button>
  <br/>
  <div>{{mainStore.action}}</div>
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useMainStore from '../store/index';

const mainStore = useMainStore();
const value = ref('');
const onSearch = (v:string) => {
  console.log(v);
};
const onCancel = (v:string) => {
  console.log(v);
};
const change = () => {
  // mainStore.$patch({
  //   num: 10,
  // });
  // mainStore.$patch((store) => {
  //   store.num = 1;
  // });
  mainStore.change('arr');
  mainStore.asyncChange(20);
};
</script>

<style>

</style>
