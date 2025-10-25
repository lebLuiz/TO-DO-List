<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue'

import BasicCard from '@/components/common/cards/BasicCard/index.vue'

import ComponentViewHomeHeader from '@/components/views/HomeView/Header/index.vue'
import ComponentViewHomeForm from '@/components/views/HomeView/Form/index.vue'
import ComponentViewHomeStats from '@/components/views/HomeView/Stats/index.vue'
import ComponentViewHomeFilters from '@/components/views/HomeView/Filters/index.vue'
import ComponentViewHomeList from '@/components/views/HomeView/List/index.vue'

import type TaskCreateReqInterface from '@/domain/tasks/types/req/methods/post/CreateReqInterface'
import type TaskInterface from '@/domain/tasks/types/res/methods/get/TaskInterface'

import { useAuthStore } from '@/stores/auth'
import { useTaskStore } from '@/stores/task'

defineOptions({ name: 'ViewHome' })

const authStore = useAuthStore()
const taskStore = useTaskStore()

const filter = ref<'all' | 'active' | 'completed'>('all')
const taskId = ref<string | null>(null)
const task = reactive<TaskCreateReqInterface>({
  title: '',
  description: '',
})

const tasks = computed(() => taskStore.tasks)
const filteredTasks = computed(() => {
  if (filter.value === 'active') return tasks.value.filter((task) => !task.checked)
  if (filter.value === 'completed') return tasks.value.filter((task) => task.checked)
  return tasks.value
})
const activeTasks = computed(() => tasks.value.filter((task) => !task.checked).length)
const completedTasks = computed(() => tasks.value.filter((task) => task.checked).length)
const legendTextForm = computed(() => (taskId.value ? 'Editar Tarefa' : 'Adicionar Tarefa'))
const buttonTextForm = computed(() => (taskId.value ? 'Salvar' : 'Adicionar'))

const toggleTask = (task: TaskInterface) => {
  taskStore.actUpdateCheckedTask({ id: task.id, checked: !task.checked })
}

const onSubmitTask = () => {
  if (!!taskId.value) {
    updateTask()
    return
  }

  addTask()
}

const updateTask = () => {
  taskStore.actUpdateTask({ ...task, id: taskId.value! }).then(() => {
    resetTask()
  })
}

const addTask = () => {
  taskStore.actCreateTask(task).then(() => {
    resetTask()
  })
}

const resetTask = () => {
  taskId.value = null
  task.title = ''
  task.description = ''
}

const findAllTasks = () => {
  taskStore.actFindAllTasks()
}

const deleteTask = (id: string) => {
  taskStore.actDeleteTask(id)
}

const handleFieldsEditTask = (_task: TaskInterface) => {
  taskId.value = _task.id
  task.title = _task.title
  task.description = _task.description
}

onMounted(async () => {
  await authStore.actMe().then(() => {
    findAllTasks()
  })
})
</script>

<template>
  <main class="todo-container">
    <ComponentViewHomeHeader />

    <BasicCard class="todo-card">
      <ComponentViewHomeForm
        :legend-text="legendTextForm"
        :button-text="buttonTextForm"
        v-model="task"
        @submit="onSubmitTask"
        @reset="resetTask"
      />

      <ComponentViewHomeStats
        :tasks="tasks.length"
        :tasksActive="activeTasks"
        :tasksCompleted="completedTasks"
      />

      <ComponentViewHomeFilters v-model="filter" />

      <ComponentViewHomeList
        :is-editing="!!taskId"
        :tasks="filteredTasks"
        :filter="filter"
        @delete-task="deleteTask"
        @toggle-task="toggleTask"
        @edit-task="handleFieldsEditTask"
      />
    </BasicCard>
  </main>
</template>

<style scoped>
.todo-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.todo-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  background: #fff !important;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

@media (max-width: 640px) {
  .todo-container {
    padding: 1rem 0.5rem;
  }

  .todo-card {
    padding: 1.5rem 1rem;
  }
}
</style>
