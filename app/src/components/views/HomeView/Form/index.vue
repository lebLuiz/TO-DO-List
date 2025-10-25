<script setup lang="ts">
import Button from '@/components/common/buttons/Button/index.vue'
import InputText from '@/components/common/inputs/InputText/index.vue'
import ResetIcon from '@/components/common/icons/ResetIcon.vue'
import PlusIcon from '@/components/common/icons/PlusIcon.vue'

import type { ModelType } from './types/ModelType'
import type PropsInterface from './types/PropsInterface'

defineOptions({ name: 'ComponentViewHomeForm' })

const props = defineProps<PropsInterface>()
const vModel = defineModel<ModelType>({
  required: true,
})
const emit = defineEmits<{
  (e: 'submit'): void
  (e: 'reset'): void
}>()
</script>

<template>
  <form @submit.prevent="emit('submit')">
    <fieldset>
      <legend>{{ props.legendText }}</legend>

      <InputText
        v-model="vModel.title"
        required
        placeholder="Título"
        :minlength="3"
        class="input-title"
      />
      <InputText v-model="vModel.description" placeholder="Descrição" />
    </fieldset>

    <div class="actions">
      <Button severity="secondary" type="button" @click="emit('reset')">
        <ResetIcon />
        Limpar
      </Button>
      <Button severity="primary" type="submit" class="add-button">
        <PlusIcon />
        {{ props.buttonText }}
      </Button>
    </div>
  </form>
</template>

<style scoped>
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-end;
}

form fieldset {
  width: 100%;
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0.75rem;
}

form fieldset .input-title {
  max-width: 12rem;
}

form fieldset legend {
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.5rem;
}

form .actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  form fieldset {
    flex-direction: column;
  }

  form fieldset .input-title {
    max-width: 100%;
  }
}
</style>
