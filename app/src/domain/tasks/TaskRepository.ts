import type { AxiosPromise, AxiosRequestConfig } from 'axios'

import BaseRepository from '@/domain/base/BaseRepository'
import TaskModel from './TaskModel'

import type CreateReqInterface from './types/req/methods/post/CreateReqInterface'
import type CreateResInterface from './types/res/methods/post/CreateResInterface'
import type UpdateReqInterface from './types/req/methods/put/UpdateReqInterface'
import type UpdateResInterface from './types/res/methods/put/UpdateResInterface'
import type UpdateCheckedReqInterface from './types/req/methods/put/UpdateCheckedReqInterface'
import type { FindAllResType } from './types/res/methods/get/FindAllResType'
import type { FindByIdResType } from './types/res/methods/get/FindByIdResType'
import type { DeleteResType } from './types/res/methods/delete/DeleteResType'

export default class TaskRepository extends BaseRepository {
  protected _model = new TaskModel()

  async create(
    data: CreateReqInterface,
    options?: AxiosRequestConfig,
  ): AxiosPromise<CreateResInterface> {
    return this._httpClient.getBackClient().post(`/${this._model.name}`, data, options)
  }

  async update(
    id: string,
    data: UpdateReqInterface,
    options?: AxiosRequestConfig,
  ): AxiosPromise<UpdateResInterface> {
    return this._httpClient.getBackClient().put(`/${this._model.name}/${id}`, data, options)
  }

  async updateChecked(
    id: string,
    data: UpdateCheckedReqInterface,
    options?: AxiosRequestConfig,
  ): AxiosPromise<UpdateResInterface> {
    return this._httpClient.getBackClient().put(`/${this._model.name}/${id}/checked`, data, options)
  }

  async findAll(options?: AxiosRequestConfig): AxiosPromise<FindAllResType> {
    return this._httpClient.getBackClient().get(`/${this._model.name}`, options)
  }

  async findById(id: string, options?: AxiosRequestConfig): AxiosPromise<FindByIdResType> {
    return this._httpClient.getBackClient().get(`/${this._model.name}/${id}`, options)
  }

  async delete(id: string, options?: AxiosRequestConfig): AxiosPromise<DeleteResType> {
    return this._httpClient.getBackClient().delete(`/${this._model.name}/${id}`, options)
  }
}
