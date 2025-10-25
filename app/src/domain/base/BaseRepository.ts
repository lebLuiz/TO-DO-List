import BaseModel from '@/domain/base/BaseModel'
import BaseHttpClientService from '@/domain/base/BaseHttpClientService'

export default abstract class BaseRepository {
  protected abstract _model: BaseModel
  protected _httpClient: BaseHttpClientService

  public constructor() {
    this._httpClient = new BaseHttpClientService()
  }
}
