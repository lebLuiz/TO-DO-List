import { defineStore } from 'pinia'

import type StateInterface from './types/StateInterface'

import TaskService from '@/domain/tasks/TaskService'

import type CreateReqInterface from '@/domain/tasks/types/req/methods/post/CreateReqInterface'
import type UpdateReqInterface from '@/domain/tasks/types/req/methods/put/UpdateReqInterface'
import type UpdateCheckedReqInterface from '@/domain/tasks/types/req/methods/put/UpdateCheckedReqInterface'
import { useAuthStore } from '@/stores/auth'

export const useTaskStore = defineStore('task', {
  state: () =>
    ({
      tasks: [],
    }) as StateInterface,

  getters: {
    getAuthorizationBearerToken(): Record<string, string> {
      const authStore = useAuthStore()
      return {
        Authorization: `Bearer ${authStore.token}`,
      }
    },
  },

  actions: {
    async actCreateTask(payload: CreateReqInterface) {
      const TASK_SERVICE = new TaskService()

      try {
        const { data } = await TASK_SERVICE.create(payload, {
          headers: this.getAuthorizationBearerToken,
        })
        this.tasks.unshift(data)
        return data
      } catch (err) {
        throw err
      }
    },

    async actUpdateTask(payload: UpdateReqInterface & { id: string }) {
      const TASK_SERVICE = new TaskService()

      try {
        const { data } = await TASK_SERVICE.update(payload.id, payload, {
          headers: this.getAuthorizationBearerToken,
        })
        this.actFindAllTasks()
        return data
      } catch (err) {
        throw err
      }
    },

    async actUpdateCheckedTask(payload: UpdateCheckedReqInterface & { id: string }) {
      const TASK_SERVICE = new TaskService()

      try {
        const { data } = await TASK_SERVICE.updateChecked(payload.id, payload, {
          headers: this.getAuthorizationBearerToken,
        })

        this.actFindAllTasks()
        return data
      } catch (err) {
        throw err
      }
    },

    async actFindAllTasks() {
      const TASK_SERVICE = new TaskService()

      try {
        const { data } = await TASK_SERVICE.findAll({
          headers: this.getAuthorizationBearerToken,
        })

        this.tasks = data
        return data
      } catch (err) {
        throw err
      }
    },

    async actFindByIdTask(id: string) {
      const TASK_SERVICE = new TaskService()

      try {
        const { data } = await TASK_SERVICE.findById(id, {
          headers: this.getAuthorizationBearerToken,
        })
        return data
      } catch (err) {
        throw err
      }
    },

    async actDeleteTask(id: string) {
      const TASK_SERVICE = new TaskService()

      try {
        const { data } = await TASK_SERVICE.delete(id, {
          headers: this.getAuthorizationBearerToken,
        })
        this.tasks = this.tasks.filter((task) => task.id !== id)
        return data
      } catch (err) {
        throw err
      }
    },
  },
})
