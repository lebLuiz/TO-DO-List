import type { AxiosPromise } from 'axios'

import BaseRepository from '@/domain/base/BaseRepository'
import AuthModel from './AuthModel'

import type SigninReqInterface from './types/req/methods/post/SigninReqInterface'
import type SigninResInterface from './types/res/methods/post/SigninResInterface'

import type SignupReqInterface from './types/req/methods/post/SignupReqInterface'
import type SignupResInterface from './types/res/methods/post/SignupResInterface'

export default class AuthRepository extends BaseRepository {
  protected _model = new AuthModel()

  async signin(data: SigninReqInterface): AxiosPromise<SigninResInterface> {
    return this._httpClient.getBackClient().post(`/${this._model.name}/signin`, data)
  }

  async signup(data: SignupReqInterface): AxiosPromise<SignupResInterface> {
    return this._httpClient.getBackClient().post(`/${this._model.name}/signup`, data)
  }
}
