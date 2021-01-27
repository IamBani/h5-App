<template>
  <div class="about">
    <div class="wrapper">
      <ul class="box">
        <!-- <div
          id="id"
          style="height: 200px; background-color: orange; overflow-y: scroll ;"
        >
          <div style="height: 1000px;">1233</div>
        </div> -->
      </ul>
       <div
          id="id"
          style="height: 500px; background-color: orange; overflow-y: hidden ;"
        >
        45465
          <div style="height: 400px;background-color: red; overflow-y: scroll ">1233
            <div style="height:1000px; background-color:#ccc">hdhfdj</div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import BScroll from "@better-scroll/core";
export default {
  name: "about",
  data() {
    return {
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
    this.$nextTick(() => {
      if (!this.scroll) {
        // eslint-disable-next-line no-unused-vars
        this.scroll = new BScroll(".wrapper", {
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
.wrapper {
  width: 100%;
  height: calc(100vh - 46px);
  overflow: hidden;
  .box {
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
}
</style>
