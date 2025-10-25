import type { AxiosPromise, AxiosRequestConfig } from 'axios'

import BaseRepository from '@/domain/base/BaseRepository'
import UserModel from './UserModel'

import type MeResInterface from './types/res/methods/get/MeResInterface'

export default class UserRepository extends BaseRepository {
  protected _model = new UserModel()

  async me(options?: AxiosRequestConfig): AxiosPromise<MeResInterface> {
    return this._httpClient.getBackClient().get(`/${this._model.name}/me`, options)
  }
}
