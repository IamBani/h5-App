<template>
<van-swipe :autoplay="3000" class="swipt" lazy-render>
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

<style lang="less" scoped>
.swipt{
  img{
    width: 100%;
  }
}
</style>
