<template>
  <router-view/>
 <van-tabbar route v-model="active">
  <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
  <van-tabbar-item icon="search" to="/radioStation">电台</van-tabbar-item>
  <!-- <van-tabbar-item icon="friends-o">标签</van-tabbar-item> -->
  <van-tabbar-item icon="user-o">我的</van-tabbar-item>
</van-tabbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const active = ref('/home');
</script>

<style lang="less" scoped>

</style>
