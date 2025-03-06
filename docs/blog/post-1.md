---
title: Vue3组件开发实践
date: 2024-03-20
tags:
  - Vue3
  - 组件化
---

## 组件设计思路
通过组合式API实现响应式逻辑复用：

```vue
<script setup>
import { useFeature } from './composables/feature.js'

const { count, increment } = useFeature()
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>