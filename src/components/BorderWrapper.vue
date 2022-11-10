<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'

const testFn = () => {
  console.log(222)
}
const target = ref(null)
const mouse = reactive(useMouseInElement(target))
</script>

<template>
  <div class="">
    {{ mouse }}
  </div>
  <div ref="target" class="BorderWrapper" @mouseover="testFn">
    <slot />
    <div class="BorderWrapper-box" />
  </div>
</template>

<style scoped lang="scss">
.BorderWrapper {
  position: relative;
  display: inline-block;

  .BorderWrapper-box {
    z-index: -1;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    position: absolute;
    background: #51d6a9;

    &:hover {
      outline: #51d6a9 solid 1px;
    }
  }
}
</style>
