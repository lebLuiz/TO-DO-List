<script setup lang="ts">
import type PropsInterface from './types/PropsInterface'

defineOptions({ name: 'ComponentViewHomeStats' })

const props = defineProps<PropsInterface>()
</script>

<template>
  <section>
    <article>
      <span class="stat-label">Total</span>
      <span class="stat-value">{{ props.tasks }}</span>
    </article>
    <article>
      <span class="stat-label">Ativas</span>
      <span class="stat-value active">{{ props.tasksActive }}</span>
    </article>
    <article>
      <span class="stat-label">Concluídas</span>
      <span class="stat-value completed">{{ props.tasksCompleted }}</span>
    </article>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  margin: 1rem 0;
  gap: 1rem;
}

section article {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.stat-label {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #334155;
}

.stat-value.active {
  color: #3b82f6;
}

.stat-value.completed {
  color: #10b981;
}

@media (max-width: 640px) {
  section {
    flex-direction: column;
    gap: 1rem;
  }

  section article {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
