import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios'
import { useAuthStore } from '@/stores/auth'

export default class BaseHttpClientService {
  protected _store
  public constructor() {
    this._store = useAuthStore()
  }

  public getHttpClient(config: CreateAxiosDefaults = {}): AxiosInstance {
    return axios.create(config)
  }

  public getBackClient(): AxiosInstance {
    return this.getClient(import.meta.env.VITE_API_URL)
  }

  private getClient(baseURL: string): AxiosInstance {
    const config: CreateAxiosDefaults = {
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }

    const httpClient = this.getHttpClient(config)
    this._store.actCheckAuth(httpClient)

    return httpClient
  }
}
