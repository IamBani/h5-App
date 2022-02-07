<template>
<van-swipe height="300" :autoplay="3000" lazy-render>
  <van-swipe-item v-for="image in images" :key="image.bannerId">
    <img :src="image.pic" />
  </van-swipe-item>
</van-swipe>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';

interface banner {
  bannerId:string,
  pic:string
}
const images = ref<banner[]>([]);
axios.get('http://localhost:3000/banner?type=1').then((res) => {
  console.log(res);
  images.value = res.data.banners;
});
</script>

<style>

</style>
