<template>
  <div class="home">home</div>
</template>
<script>
export default {
  name: "home"
};
</script>
<style lang="less" scoped>
.home {
  &::before {
    content: "before";
  }
}
</style>
