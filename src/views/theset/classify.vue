<template>
  <div class="about">
    <scroll
      :isShowboot="true"
      title="分类"
      :leftArrow="false"
      :wrapperStyle="wrapperStyle"
    >
      <template v-slot>
        <li class="conten" v-for="item in list" :key="item">
          <div class="wae" @click="open(item)">{{ item }}</div>
        </li>
      </template>
      <template v-slot:right>
        <van-icon name="plus" />
      </template>
    </scroll>
  </div>
</template>
<script>
export default {
  name: "classify",
  data() {
    return {
      wrapperStyle: {
        height: "calc(100vh - 46px - 50px)"
      },
      list: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    open(id) {
      this.$router.push({
        path: "/abdetails",
        query: {
          id
        }
      });
    }
  },
  mounted() {
    for (let index = 0; index < 20; index++) {
      this.list.push(index);
    }
  }
};
</script>

<style lang="scss" scoped>
.about {
  .conten {
    &:not(:first-child) {
      margin-top: 10px;
    }
    padding: 0 10px;
    .wae {
      box-sizing: border-box;
      height: 120px;
      background-color: aqua;
      border-radius: 4px;
    }
  }
}
</style>
