<template>
  <div>
    <keep-alive>
      <router-view class="beet"></router-view>
    </keep-alive>
    <van-tabbar :route="true" v-model="active" placeholder>
      <van-tabbar-item to="/theset/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/theset/classify" icon="search"
        >分类</van-tabbar-item
      >
      <van-tabbar-item to="/theset/my" icon="friends-o"
        >个人中心</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.beet {
  height: calc(100vh - 50px);
}
</style>
