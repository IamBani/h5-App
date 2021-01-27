<template>
  <div id="app">
    <div class="app-content">
      <transition :name="transitionName">
        <vue-page-stack>
          <router-view class="router-view-c" />
        </vue-page-stack>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "forward"
    };
  },
  watch: {
    $route(to) {
      if (to.params["stack-key-dir"] === "forward") {
        this.transitionName = "forward";
      } else {
        this.transitionName = "back";
      }
    }
  }
};
</script>

<style lang="scss">
body {
  //ios 微信禁止调整字体大小
  -webkit-text-size-adjust: 100% !important;
  margin: 0;
  padding: 0;
}
#app {
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #efeff4; /*app背景色*/
  font-family: "Avenir", "PingFangSC-Regular", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app-content {
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  position: absolute;
  width: 100%;
  height: 100%;
}

.router-view-c {
  position: absolute;
  transition: opacity 0.5s, transform 0.5s;
  width: 100%;
}

.forward-enter,
.back-leave-active {
  opacity: 0.5;
  transform: translateX(100%);
}

.forward-leave-active,
.back-enter {
  opacity: 0.5;
  transform: translateX(-100%);
}
</style>
