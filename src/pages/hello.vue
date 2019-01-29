<template>
  <div class="hello">hello</div>
</template>
<script>
export default {
  name: "hello"
};
</script>
<style lang="less" scoped>
.hello {
  &::before {
    content: "before";
  }
}
</style>
