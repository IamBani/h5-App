<template>
  {{mainStore.num}}
  {{mainStore.arr}}
  <button @click="change">点击</button>
  <br/>
  <div>{{mainStore.action}}</div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useMainStore from '../store/index';

const mainStore = useMainStore();

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
