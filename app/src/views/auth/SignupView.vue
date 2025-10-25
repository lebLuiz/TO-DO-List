<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import BasicCard from '@/components/common/cards/BasicCard/index.vue'
import ComponentViewAuthSignupForm from '@/components/views/auth/SignupView/Form/index.vue'

import { useAuthStore } from '@/stores/auth'
import { handleResponseError } from '@/helpers/error'
import type { BaseResErrorType } from '@/domain/base/types/BaseResErrorInterface'

const router = useRouter()
const authStore = useAuthStore()

const data = reactive({
  name: '',
  email: '',
  password: '',
})

const backPage = () => {
  router.back()
}

const redirectToHome = () => {
  router.push({ name: 'home' })
}

const handleSubmit = () => {
  authStore
    .actSignup(data)
    .then(() => {
      redirectToHome()
    })
    .catch((error: BaseResErrorType) => {
      handleResponseError(error)
    })
}
</script>

<template>
  <BasicCard class="_box-signup">
    <h1>Cadastrar-se</h1>

    <ComponentViewAuthSignupForm v-model="data" @submit="handleSubmit" @cancel="backPage" />
  </BasicCard>
</template>

<style scoped>
._box-signup {
  flex-direction: column;
  padding: 2rem;
}

._box-signup form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
