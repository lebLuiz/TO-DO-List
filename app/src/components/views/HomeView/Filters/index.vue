<script setup lang="ts">
import Toggle from '@/components/common/buttons/Toggle/index.vue'

import type { FilterType } from './types/FilterType'

defineOptions({ name: 'ComponentViewHomeFilters' })

const vModel = defineModel<FilterType>({
  required: true,
})
</script>

<template>
  <section>
    <Toggle :active="vModel === 'all'" @click="vModel = 'all'"> Todas </Toggle>
    <Toggle :active="vModel === 'active'" @click="vModel = 'active'"> Ativas </Toggle>
    <Toggle :active="vModel === 'completed'" @click="vModel = 'completed'"> Concluídas </Toggle>
  </section>
</template>

<style scoped>
section {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .filter-section {
    justify-content: center;
  }
}
</style>
