<script setup lang="ts">
import type PropsInterface from './types/PropsInterface'

defineOptions({ name: 'ComponentButtonToggle' })

const props = defineProps<PropsInterface>()
const emit = defineEmits<{
  (e: 'click'): void
}>()

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <button :class="{ active: props.active }" @click="handleClick">
    <slot />
  </button>
</template>

<style scoped>
button {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  color: #64748b;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
}

button.active {
  background: #3b82f6;
  color: #ffffff;
  border-color: #3b82f6;
}

button.clear-btn {
  margin-left: auto;
  background: #fee2e2;
  color: #991b1b;
  border-color: #fecaca;
}

button.clear-btn:hover {
  background: #fecaca;
  border-color: #fca5a5;
}

@media (max-width: 640px) {
  button.clear-btn {
    margin-left: 0;
    width: 100%;
  }
}
</style>
