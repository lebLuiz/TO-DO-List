import type { SeverityType as ButtonSeverityType } from './SeverityType'

export default interface PropsInterface {
  disabled?: boolean
  text?: string
  severity?: ButtonSeverityType
}
