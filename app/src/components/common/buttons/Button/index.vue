<script setup lang="ts">
import { useAttrs } from 'vue'
import type ButtonPropsInterface from './types/PropsInterface'

defineOptions({ name: 'ComponentButton' })

const attrs = useAttrs()
const props = withDefaults(defineProps<ButtonPropsInterface>(), {
  severity: 'primary',
})

const emit = defineEmits<{
  onClick: [payload: { $event: MouseEvent }]
}>()

const onClick = ($event: MouseEvent): void => {
  if (props.disabled) return

  emit('onClick', {
    $event,
  })
}
</script>

<template>
  <button v-bind="attrs" :class="[props.severity]" :disabled="disabled" @click="onClick">
    <slot v-if="$slots.default" />
    <span v-else v-text="text || ''" />
  </button>
</template>

<style scoped>
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}
button.primary {
  background: #ecfdf5;
  color: #34d399;
}
button.primary:hover {
  background: #d1fae5;
  border: 1px solid #6ee7b7;
}

button.secondary {
  color: #334155;
}
button.secondary:hover {
  background: #fef6ee;
}

button.danger {
  background: #fee2e2;
  color: #dc2626;
}

button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
