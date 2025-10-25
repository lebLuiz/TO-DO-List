<script setup lang="ts">
import InputText from '@/components/common/inputs/InputText/index.vue'
import Button from '@/components/common/buttons/Button/index.vue'

import type { ModelType } from './types/ModelType'

defineOptions({ name: 'ComponentViewAuthSigninForm' })

const emit = defineEmits<{
  (e: 'submit'): void
  (e: 'signup'): void
}>()

const vModel = defineModel<ModelType>({
  required: true,
})
</script>

<template>
  <form @submit.prevent="emit('submit')">
    <div>
      <label for="email">Email:</label>
      <InputText id="email" v-model="vModel.email" type="email" required />
    </div>

    <div>
      <label for="password">Senha:</label>
      <InputText id="password" type="password" v-model="vModel.password" required />
    </div>

    <Button type="submit">Entrar</Button>
    <Button severity="secondary" @on-click="emit('signup')">Cadastrar</Button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
