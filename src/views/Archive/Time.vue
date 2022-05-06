<template>
  <div class="ArchiveTime">
    <el-timeline>
      <el-timeline-item
        timestamp="2021/4/12"
        placement="top"
        color="#bbcaf0"
        v-for="(item, key) in 8"
        :key="key"
      >
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2021/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
</style>