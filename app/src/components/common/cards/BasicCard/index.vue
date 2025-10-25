<script setup lang="ts">
import { useAttrs } from 'vue'
import type BasicCardPropsInterface from './types/PropsInterface'

defineOptions({ name: 'ComponentBasicCard' })

const attrs = useAttrs()
const props = withDefaults(defineProps<BasicCardPropsInterface>(), {
  severity: 'success',
})
</script>

<template>
  <div v-bind="attrs" :class="['basic-card', props.severity]">
    <slot />
  </div>
</template>

<style scoped>
.basic-card {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  font-weight: 600;
  padding: 0.25rem;
  font-size: 0.875rem;
}

.basic-card.success {
  background: #fff;
}
</style>
