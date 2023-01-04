<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'

const borderWrapperRef = ref<any>(null)
const target = ref(null)

const testFn = () => {
  borderWrapperRef.value.classList.add('BorderWrapper-isHover')
}

const leaveFn = () => {
  borderWrapperRef.value.classList.remove('BorderWrapper-isHover')
}
</script>

<template>
  <div ref="target" class="BorderWrapper" @mouseover="testFn" @mouseleave="leaveFn">
    <div class="slot-box">
      <slot />
    </div>
    <div ref="borderWrapperRef" class="BorderWrapper-box" />
  </div>
</template>

<style scoped lang="scss">
.BorderWrapper {
  position: relative;
  display: inline-block;
  width: 100%;

  .slot-box {
    padding: 3px;
    z-index: 2;
    //position: absolute;
  }

  .BorderWrapper-box {
    z-index: 1;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    position: absolute;
    //background: #51d6a9;

    &:hover {
      outline: #51d6a9 solid 2px;
    }
  }

  .BorderWrapper-isHover {
    outline: #51d6a9 solid 2px;
  }
}
</style>
