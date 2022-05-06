<template>
  <div class="Archive-list">
    <ArchiveItem
      v-for="(item, key) in 4"
      :key="key"
      @click="goRouter('archive/details')"
    />
  </div>
</template>
<script>
import ArchiveItem from "./components/archiveItem";
import { useRouter } from "vue-router";
export default {
  components: {
    ArchiveItem,
  },
  setup(props) {
    const router = useRouter();
    function goRouter(url) {
      router.push(`/${url}`);
    }
    return {
      goRouter,
    };
  },
};
</script>
<style lang="less" scoped>
</style>