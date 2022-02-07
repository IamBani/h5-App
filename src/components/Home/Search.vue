<template>
   <van-search
      v-model="value"
      placeholder="搜索歌曲,歌手,专辑"
      @search="onSearch"
    />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
const onSearch = (v:string) => {
  console.log(v);
};
</script>

<style lang="less" scoped>

</style>
