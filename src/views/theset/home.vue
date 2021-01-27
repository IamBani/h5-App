<template>
  <div class="home">
    <scroll>
      <template v-solt>
        <form action="/">
          <van-search
            ref="search"
            v-model="value"
            placeholder="请输入搜索关键词"
            @click="onSearch"
          >
            <template #right-icon>
              <van-swipe
                style="height:24px"
                :vertical="true"
                height="24px"
                :autoplay="3000"
                :show-indicators="false"
              >
                <van-swipe-item>源头好物日9.9包邮</van-swipe-item>
                <van-swipe-item>看看 面</van-swipe-item>
                <van-swipe-item>全都到碗里来</van-swipe-item>
                <van-swipe-item>阿拉丁神灯</van-swipe-item>
              </van-swipe>
            </template>
          </van-search>
        </form>
        <div
          id="id"
          style="height: 200px; background-color: orange; overflow-y: scroll ;"
        >
          <div style="height: 1000px;">1233</div>
        </div>
      </template>
    </scroll>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {
      this.$router.push("/search");
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
::v-deep .van-field__control {
  display: none;
}
</style>
