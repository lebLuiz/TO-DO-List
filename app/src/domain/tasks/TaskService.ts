import type { AxiosRequestConfig } from 'axios'
import TaskRepository from './TaskRepository'
import type CreateReqInterface from './types/req/methods/post/CreateReqInterface'
import type UpdateReqInterface from './types/req/methods/put/UpdateReqInterface'
import type UpdateCheckedReqInterface from './types/req/methods/put/UpdateCheckedReqInterface'

export default class TaskService {
  constructor(private _repository: TaskRepository = new TaskRepository()) {}

  create(data: CreateReqInterface, options?: AxiosRequestConfig) {
    return this._repository.create(data, options)
  }

  update(id: string, data: UpdateReqInterface, options?: AxiosRequestConfig) {
    const { title, description } = data
    return this._repository.update(id, { title, description }, options)
  }

  updateChecked(id: string, data: UpdateCheckedReqInterface, options?: AxiosRequestConfig) {
    return this._repository.updateChecked(id, data, options)
  }

  findAll(options?: AxiosRequestConfig) {
    return this._repository.findAll(options)
  }

  findById(id: string, options?: AxiosRequestConfig) {
    return this._repository.findById(id, options)
  }

  delete(id: string, options?: AxiosRequestConfig) {
    return this._repository.delete(id, options)
  }
}
