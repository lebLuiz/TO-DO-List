import type { RemovableRef } from '@vueuse/core'
import type MeResInterface from '@/domain/users/types/res/methods/get/MeResInterface'

export default interface StateInterface {
  user: MeResInterface['me'] | null
  token: RemovableRef<string | null>
}
