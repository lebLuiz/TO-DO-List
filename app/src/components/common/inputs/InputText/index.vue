<script setup lang="ts">
import { useAttrs } from 'vue'

defineOptions({ name: 'ComponentInputText' })

const attrs = useAttrs()
const vModel = defineModel<string | null>({
  required: true,
  default: null,
})
</script>

<template>
  <input v-bind="attrs" v-model="vModel" />
</template>

<style scoped>
input {
  width: 100%;
  outline: none;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #111111;

  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
}
input::placeholder {
  color: #94a3b8;
}
</style>
