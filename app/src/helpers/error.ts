import type { BaseResErrorType } from '@/domain/base/types/BaseResErrorInterface'

const handleMessages = (messages: string[]) => {
  return messages.map((message) => `• ${message}`).join('\n')
}

export const handleResponseError = (error: BaseResErrorType) => {
  if (!error.response?.data) return

  const { message } = error.response?.data

  const msg = Array.isArray(message) ? handleMessages(message) : message

  alert(`${msg}`)
}
