<template>
  <div>
    <scroll :isShowboot="true" title="详情">
      <template v-solt>
        <span>
          {{ mag }}
        </span>
      </template>
    </scroll>
  </div>
</template>

<script>
export default {
  name: "abdetails",
  data() {
    return {
      mag: ""
    };
  },
  created() {
    this.mag = this.$route.query.id;
  },
  methods: {
    go() {
      let UIStack = this.$pageStack.getStack();
      console.log("UIStack :>> ", UIStack);
      this.$router.push({
        path: "/",
        query: {
          // 'stack-key':UIStack[0].key
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
