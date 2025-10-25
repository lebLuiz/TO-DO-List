<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

import ChevronRightIcon from '@/components/common/icons/ChevronRightIcon.vue'
import Button from '@/components/common/buttons/Button/index.vue'

defineOptions({ name: 'ComponentViewHomeHeader' })

const authStore = useAuthStore()
</script>

<template>
  <header>
    <h1>Minhas Tarefas</h1>
    <div>
      <p>Bem-vindo, {{ authStore.user?.name || '--' }}!</p>
      <Button severity="secondary" @click="authStore.logout">
        Sair
        <ChevronRightIcon />
      </Button>
    </div>
  </header>
</template>

<style scoped>
header {
  text-align: center;
  margin-bottom: 2rem;
}

header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #e7e7e7;
  margin: 0 0 0.5rem 0;
}

header div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

header div p {
  font-size: 1rem;
  color: #e7e7e7;
  margin: 0;
  flex: 1;
}

@media (max-width: 640px) {
  header h1 {
    font-size: 2rem;
  }
}
</style>
