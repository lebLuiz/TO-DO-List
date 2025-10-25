import type { HttpStatusCode } from 'axios'

export default interface BaseErrorInterface {
  message: string | string[]
  error: string
  statusCode: HttpStatusCode
}
