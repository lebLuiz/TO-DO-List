<script setup lang="ts">
import type PropsInterface from './types/PropsInterface'
import type TaskInterface from '@/domain/tasks/types/res/methods/get/TaskInterface'

import BannerEmpty from '@/components/views/HomeView/List/BannerEmpty.vue'
import CardList from '@/components/common/cards/CardList/index.vue'
import ContentTask from '@/components/views/HomeView/List/ContentTask.vue'
import Button from '@/components/common/buttons/Button/index.vue'
import TrashIcon from '@/components/common/icons/TrashIcon.vue'
import EditIcon from '@/components/common/icons/EditIcon.vue'

defineOptions({ name: 'ComponentViewHomeList' })

const props = defineProps<PropsInterface>()
const emit = defineEmits<{
  (e: 'edit-task', task: TaskInterface): void
  (e: 'delete-task', id: string): void
  (e: 'toggle-task', task: TaskInterface): void
}>()
</script>

<template>
  <section>
    <BannerEmpty v-if="!props.tasks.length" :filter="props.filter" />

    <CardList v-for="task in props.tasks" :key="task.id" :checked="task.checked" class="card-list">
      <ContentTask :task="task" @toggle-task="emit('toggle-task', task)" />

      <div class="actions">
        <Button @click="emit('edit-task', task)" title="Editar tarefa">
          <EditIcon />
        </Button>
        <Button
          v-if="!props.isEditing"
          @click="emit('delete-task', task.id)"
          title="Excluir tarefa"
          severity="danger"
        >
          <TrashIcon />
        </Button>
      </div>
    </CardList>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  height: 100%;
  max-height: 23rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

section .card-list {
  gap: 1rem;
}

section .card-list .actions {
  display: flex;
  gap: 0.5rem;
}

@media (max-width: 640px) {
  section {
    gap: 0.5rem;
  }

  section .card-list {
    flex-direction: column;
    align-items: flex-end;
    gap: 0.75rem;
  }

  section .card-list .actions {
    gap: 0.25rem;
  }
}
</style>
