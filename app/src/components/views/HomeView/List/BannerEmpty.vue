<script setup lang="ts">
import CheckedLargeIcon from '@/components/common/icons/CheckedLargeIcon.vue'
import type BannerEmptyPropsInterface from '@/components/views/HomeView/List/types/BannerEmptyPropsInterface'

defineOptions({ name: 'ComponentViewHomeListBannerEmpty' })

const props = defineProps<BannerEmptyPropsInterface>()
</script>

<template>
  <article>
    <CheckedLargeIcon class="empty-icon" />
    <p>
      {{
        props.filter === 'all'
          ? 'Nenhuma tarefa ainda. Adicione uma!'
          : `Nenhuma tarefa ${props.filter === 'active' ? 'ativa' : 'concluída'}.`
      }}
    </p>
  </article>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  text-align: center;
}

article .empty-icon {
  color: #cbd5e1;
  margin-bottom: 1rem;
}

article p {
  font-size: 1rem;
  color: #94a3b8;
  margin: 0;
}
</style>
