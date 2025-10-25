import type { AxiosPromise } from 'axios'

import AuthRepository from './AuthRepository'
import type SigninReqInterface from './types/req/methods/post/SigninReqInterface'
import type SigninResInterface from './types/res/methods/post/SigninResInterface'
import type SignupReqInterface from './types/req/methods/post/SignupReqInterface'
import type SignupResInterface from './types/res/methods/post/SignupResInterface'

export default class AuthService {
  constructor(private _repository: AuthRepository = new AuthRepository()) {}

  signin(data: SigninReqInterface): AxiosPromise<SigninResInterface> {
    return this._repository.signin(data)
  }

  signup(data: SignupReqInterface): AxiosPromise<SignupResInterface> {
    return this._repository.signup(data)
  }
}
