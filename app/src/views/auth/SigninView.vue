<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import BasicCard from '@/components/common/cards/BasicCard/index.vue'
import ComponentViewAuthSigninForm from '@/components/views/auth/SigninView/Form/index.vue'

import { useAuthStore } from '@/stores/auth'
import { handleResponseError } from '@/helpers/error'
import type { BaseResErrorType } from '@/domain/base/types/BaseResErrorInterface'

const router = useRouter()
const authStore = useAuthStore()

const data = reactive({
  email: '',
  password: '',
})

const redirectToSignup = () => {
  router.push({ name: 'signup' })
}

const redirectToHome = () => {
  router.push({ name: 'home' })
}

const handleSubmit = () => {
  authStore
    .actSignin(data)
    .then(() => {
      redirectToHome()
    })
    .catch((error: BaseResErrorType) => {
      handleResponseError(error)
    })
}
</script>

<template>
  <BasicCard class="_box-signin">
    <h1>Entrar</h1>

    <ComponentViewAuthSigninForm v-model="data" @submit="handleSubmit" @signup="redirectToSignup" />
  </BasicCard>
</template>

<style scoped>
._box-signin {
  flex-direction: column;
  padding: 2rem;
}

._box-signin form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
