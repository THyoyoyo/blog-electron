<template>
  <router-view />
</template>
<script>
export default {
  setup(props) {
    localStorage.setItem("time", new Date());
  },
};
</script>
<style lang="less" scoped>
</style>
