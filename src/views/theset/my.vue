<template>
  <div>
    <scroll>
      <template v-solt>
        <transition
          enter-active-class="animate__animated animate__tada"
          leave-active-class="animate__animated animate__fadeOutRight"
        >
          <h1 v-show="visible">Animate.css</h1>
        </transition>
        <van-button type="primary" @click="show">点击</van-button>

        <van-button
          type="info"
          class="animate__animated animate__delay-2s"
          :class="active ? 'animate__bounce' : 'animate__wobble'"
          @click="active = !active"
          >抖动</van-button
        >
        <van-dropdown-menu>
          <van-dropdown-item ref="item">
            <template #title>
              <van-tag type="primary" closeable size="large" @close="close"
                >标签</van-tag
              >
            </template>
            <van-cell center title="包邮">
              <template #right-icon>
                <van-switch
                  v-model="switch1"
                  size="24"
                  active-color="#ee0a24"
                />
              </template>
            </van-cell>
            <van-cell center title="团购">
              <template #right-icon>
                <!-- <van-switch v-model="switch2" size="24" active-color="#ee0a24" /> -->
                <van-checkbox v-model="switch2"></van-checkbox>
              </template>
            </van-cell>
            <div style="padding: 5px 16px;">
              <van-button type="danger" block round @click="onConfirm">
                确认
              </van-button>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </template>
    </scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      active: false,
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ]
    };
  },
  methods: {
    show() {
      this.visible = !this.visible;
    },
    onConfirm() {
      this.$refs.item.toggle();
    },
    close() {
      console.log("123 :>> ", 123);
    }
  }
};
</script>

<style lang="scss" scoped></style>
