<script setup lang="ts">

</script>

<template>
  <n-h4 class="design-label">
    配置
  </n-h4>
  <n-collapse :default-expanded-names="[]">
    <n-collapse-item title="尺寸配置" name="1">
      <div>尺寸配置</div>
    </n-collapse-item>
    <n-collapse-item title="颜色配置" name="2">
      <div>颜色配置</div>
    </n-collapse-item>
    <n-collapse-item title="样式配置" name="3">
      <div>样式配置</div>
    </n-collapse-item>
    <n-collapse-item title="边框配置" name="4">
      <div>边框配置</div>
    </n-collapse-item>
    <n-collapse-item title="文字配置" name="5">
      <div>文字配置</div>
    </n-collapse-item>
  </n-collapse>
</template>

<style scoped lang="scss">
.design-label {
  margin: 16px;
}
</style>
