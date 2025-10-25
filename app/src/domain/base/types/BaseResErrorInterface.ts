import type { AxiosError } from 'axios'
import type BaseErrorInterface from './BaseErrorInterface'

export type BaseResErrorType = AxiosError<BaseErrorInterface, BaseErrorInterface>
