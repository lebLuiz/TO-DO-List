<script setup lang="ts">
import type ContentTaskPropsInterface from './types/ContentTaskPropsInterface'

defineOptions({ name: 'ComponentViewHomeListContentTask' })

const props = defineProps<ContentTaskPropsInterface>()
const emit = defineEmits<{
  (event: 'toggle-task'): void
}>()
</script>

<template>
  <div class="task">
    <label>
      <input type="checkbox" :checked="props.task.checked" @change="emit('toggle-task')" />
      <span />
    </label>

    <div class="task-content">
      <span :class="['task-title', { checked: props.task.checked }]">{{ props.task.title }}</span>
      <small>{{ props.task.description }}</small>
    </div>
  </div>
</template>

<style scoped>
.task {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}

.task .task-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
}

.task .task-content .task-title {
  font-size: 0.938rem;
  color: #334155;
  transition: all 0.2s ease;
  word-break: break-word;
}

.task .task-content .task-title.checked {
  text-decoration: line-through;
  color: #94a3b8;
}

.task label {
  position: relative;
  cursor: pointer;
  user-select: none;
  display: block;
}

.task label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.task label span {
  display: block;
  height: 22px;
  width: 22px;
  background-color: #ffffff;
  border: 2px solid #cbd5e1;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
}

.task label:hover span {
  border-color: #3b82f6;
}

.task label input:checked ~ span {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

span:after {
  content: '';
  position: absolute;
  display: none;
  left: 8px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.task label input:checked ~ span:after {
  display: block;
}

@media (max-width: 640px) {
  .task {
    width: 100%;
  }
}
</style>
