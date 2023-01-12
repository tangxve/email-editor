# email-editor-vue

vue3 的 props 对 ts 支持 一言难尽

放弃了

## 遇到的问题

### 选中组件的状态 outline

- 设置 outline的 A元素，会被 A元素 的子元素的覆盖
    - 修复方法添加 `position: relative; z-index: 10;`
- [outline 详解](https://www.cnblogs.com/manfredHu/p/4691385.html)
- [outline轮廓被覆盖outline-offset优化（没有子元素的情况）](http://jsrun.net/BKUKp/edit)
