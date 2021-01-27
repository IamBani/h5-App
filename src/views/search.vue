<template>
  <div class="search">
    <scroll :isShowboot="true">
      <template v-slot:title>
        <form action="/" class="form">
          <van-search
            autofocus
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            ><template #action>
              <div @click="onSearch">搜索</div>
            </template>
          </van-search>
        </form>
      </template>
    </scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {
      console.log("this ", this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  .form {
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    ::v-deep .van-search {
      width: 100%;
      padding: 0;
      margin-left: 52px;
    }
  }
  ::v-deep .van-nav-bar__title {
    width: 100%;
    max-width: none;
  }
}
</style>
