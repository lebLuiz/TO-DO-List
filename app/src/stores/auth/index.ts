import { defineStore } from 'pinia'
import { hasOwn, useLocalStorage } from '@vueuse/core'
import { HttpStatusCode, type AxiosError, type AxiosInstance, type AxiosResponse } from 'axios'

import type StateInterface from './types/StateInterface'

import AuthService from '@/domain/auth/AuthService'
import UserService from '@/domain/users/UserService'

import type SignupReqInterface from '@/domain/auth/types/req/methods/post/SignupReqInterface'
import type SigninReqInterface from '@/domain/auth/types/req/methods/post/SigninReqInterface'
import type MeResInterface from '@/domain/users/types/res/methods/get/MeResInterface'

export const useAuthStore = defineStore('auth', {
  state: () =>
    ({
      user: null,
      token: useLocalStorage<string | null>('token', null),
    }) as StateInterface,

  getters: {
    getEstaAutenticado: (state) => !!state.token,
  },

  actions: {
    async actSignup(payload: SignupReqInterface) {
      const AUTH_SERVICE = new AuthService()

      try {
        const { data } = await AUTH_SERVICE.signup(payload)
        this.token = data.accessToken
        return data
      } catch (err) {
        throw err
      }
    },

    async actSignin(payload: SigninReqInterface) {
      const AUTH_SERVICE = new AuthService()

      try {
        const { data } = await AUTH_SERVICE.signin(payload)
        this.token = data.accessToken
        return data
      } catch (err) {
        throw err
      }
    },

    async actMe() {
      const AUTH_SERVICE = new UserService()

      try {
        const { data } = await AUTH_SERVICE.me({
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        this.user = data['me']
        return data
      } catch (err) {
        throw err
      }
    },

    logout() {
      this.$reset()
      window.location.reload()
    },

    actCheckAuth(axios: AxiosInstance) {
      axios.interceptors.response.use(
        (response) => {
          this.handleResponseAuth(response)
          return response
        },
        (error: AxiosError) => {
          const { response } = error
          if (response?.status == HttpStatusCode.Unauthorized) this.logout()
          return Promise.reject(error)
        },
      )
    },

    handleResponseAuth({ data }: AxiosResponse): void {
      if (!hasOwn(data, 'me')) return
      const me = data?.me as MeResInterface['me']
      this.user = me
    },

    $reset() {
      this.user = null
      this.token = null
    },
  },
})
