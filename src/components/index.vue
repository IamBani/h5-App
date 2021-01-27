<template>
  <div class="index">
    <van-nav-bar
      :title="title"
      :left-text="leftText"
      fixed
      placeholder
      :left-arrow="leftArrow"
      right-text
      @click-left="onClickLeft"
      v-if="isShowboot"
    >
      <template #right>
        <slot name="right"> </slot>
      </template>
      <template #title>
        <slot name="title"></slot>
      </template>
    </van-nav-bar>
    <div
      :class="isShowboot ? 'wrappertop' : 'wrapperboot'"
      class="over"
      :style="wrapperStyle"
      ref="wrapper"
    >
      <ul class="box">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
export default {
  props: {
    "right-text": {
      type: String,
      default: ""
    },
    wrapperStyle: {
      type: Object,
      default: () => ({})
    },
    isShowboot: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    "left-arrow": {
      type: Boolean,
      default: true
    },
    leftText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        // eslint-disable-next-line no-unused-vars
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          scrollY: true
        });
      } else {
        this.scroll.refresh();
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.over {
  overflow: hidden;
}
.wrapperboot {
  height: calc(100vh - 50px);
}
.wrappertop {
  height: calc(100vh - 46px);
}
.wrapper {
  height: calc(100vh - 46px - 50px);
}
</style>
