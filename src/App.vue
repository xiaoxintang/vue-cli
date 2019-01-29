<template>
  <div class="app">
    <router-view></router-view>
    <!-- <card></card> -->
    <router-link to="/">home</router-link>
    <router-link to="/hello">hello</router-link>
  </div>
</template>
<script>
import card from "src/components/card";
export default {
  name: "app",
  components: {
    card
  },
  data() {
    return {
      msg: 1235678,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  mounted() {
    console.log("mounted");
  }
};
</script>
<style lang="less" scoped>
.app {
  background-color: #f00;
}
</style>
