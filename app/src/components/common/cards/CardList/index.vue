<script setup lang="ts">
import type PropsInterface from './types/PropsInterface'

defineOptions({ name: 'ComponentCardList' })

const props = defineProps<PropsInterface>()
</script>

<template>
  <div :class="{ checked: props.checked }">
    <slot />
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

div:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

div.checked {
  background: #f0fdf4;
  border-color: #bbf7d0;
}
</style>
