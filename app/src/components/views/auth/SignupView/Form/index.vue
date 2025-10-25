<script setup lang="ts">
import InputText from '@/components/common/inputs/InputText/index.vue'
import Button from '@/components/common/buttons/Button/index.vue'

import type { ModelType } from './types/ModelType'

defineOptions({ name: 'ComponentViewAuthSignupForm' })

const emit = defineEmits<{
  (e: 'submit'): void
  (e: 'cancel'): void
}>()

const vModel = defineModel<ModelType>({
  required: true,
})
</script>

<template>
  <form @submit.prevent="emit('submit')">
    <div>
      <label for="name">Nome:</label>
      <InputText id="name" v-model="vModel.name" required />
    </div>

    <div>
      <label for="email">Email:</label>
      <InputText id="email" type="email" v-model="vModel.email" required />
    </div>

    <div>
      <label for="password">Senha:</label>
      <InputText id="password" type="password" v-model="vModel.password" required />
    </div>

    <Button type="submit">Cadastrar</Button>
    <Button @on-click="emit('cancel')" severity="secondary">Voltar</Button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
