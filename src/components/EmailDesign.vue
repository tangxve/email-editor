<script setup lang="ts">
import { ref } from 'vue'

interface Form {
  phone: string
  user: {
    name: string
    age: string
  }
}

const formValue = ref<Form>({
  user: {
    name: '',
    age: '',
  },
  phone: '',
})

const value = ref('middle')
const options = ref([
  {
    label: 'top',
    value: 'top',
  },
  {
    label: 'middle',
    value: 'middle',
  },
  {
    label: 'bottom',
    value: 'bottom',
  },
])

const songs = ref([
  {
    value: 'left',
    label: 'left',
  },
  {
    value: 'center',
    label: 'center',
  },
  {
    value: 'right',
    label: 'right',
  },
])
</script>

<template>
  <n-h4 class="design-label">
    配置
  </n-h4>
  <n-collapse :default-expanded-names="[1, 2, 3, 4, 5]">
    <n-collapse-item title="位置配置" :name="1">
      <n-form ref="formRef" :label-width="80" :model="formValue">
        <n-form-item label="width" path="user.name">
          <n-input v-model:value="formValue.user.name" placeholder="width" />
        </n-form-item>
        <n-form-item label="height" path="user.age">
          <n-input v-model:value="formValue.user.age" placeholder="height" />
        </n-form-item>
        <n-form-item label="vertical-align" style="width: 100%">
          <n-radio-group v-model:value="formValue.phone" name="radiogroup">
            <n-space>
              <n-radio v-for="song in options" :key="song.value" :value="song.value">
                {{ song.label }}
              </n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>
        <n-h5 class="w-full my-3">
          Padding：
        </n-h5>
        <n-form-item label="上" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="上" />
        </n-form-item>
        <n-form-item label="右" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="右" />
        </n-form-item>
        <n-form-item label="下" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="下" />
        </n-form-item>
        <n-form-item label="左" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="左" />
        </n-form-item>
      </n-form>
    </n-collapse-item>
    <n-collapse-item title="背景配置" :name="2">
      <n-form>
        <n-form-item label="Background image" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="Background image" />
        </n-form-item>
        <n-form-item label="Background color" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="Background color" />
        </n-form-item>
        <n-form-item label="Background repeat" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="Background repeat" />
        </n-form-item>
        <n-form-item label="Background size" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="Background size" />
        </n-form-item>
      </n-form>
    </n-collapse-item>
    <n-collapse-item title="样式配置" :name="3">
      <n-form>
        <n-form-item label="字体" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="字体" />
        </n-form-item>
        <n-form-item label="字号" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="字体" />
        </n-form-item>
        <n-form-item label="颜色" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="颜色" />
        </n-form-item>
        <n-form-item label="行高" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="行高" />
        </n-form-item>
        <n-form-item label="字间距" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="字间距" />
        </n-form-item>
        <n-form-item label="Font weight" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="Font weight" />
        </n-form-item>
        <n-form-item label="Text decoration" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="Text decoration" />
        </n-form-item>
        <n-form-item label="Align" path="phone" class="w-full!" style="width: 100%">
          <n-radio-group v-model:value="formValue.phone" name="radiogroup">
            <n-space>
              <n-radio v-for="song in songs" :key="song.value" :value="song.value">
                {{ song.label }}
              </n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>
      </n-form>
    </n-collapse-item>
    <n-collapse-item title="边框配置" :name="4">
      <div>边框配置</div>
    </n-collapse-item>
    <n-collapse-item title="文字配置" :name="5">
      <div>文字配置</div>
    </n-collapse-item>
  </n-collapse>
</template>

<style scoped lang="scss">
.design-label {
  margin: 16px;
}

:deep(.n-form) {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .n-form-item {
    width: 127px ;
    //flex: 0 0 120px;
  }
}
</style>
