import type { AxiosPromise, AxiosRequestConfig } from 'axios'

import AuthRepository from './UserRepository'
import type MeResInterface from './types/res/methods/get/MeResInterface'

export default class UserService {
  constructor(private _repository: AuthRepository = new AuthRepository()) {}

  me(options?: AxiosRequestConfig): AxiosPromise<MeResInterface> {
    return this._repository.me(options)
  }
}
