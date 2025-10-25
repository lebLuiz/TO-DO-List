import type TaskInterface from '@/domain/tasks/types/res/methods/get/TaskInterface'
import type { FilterType } from '@/components/views/HomeView/Filters/types/FilterType'

export default interface PropsInterface {
  tasks: TaskInterface[]
  filter: FilterType
  isEditing: boolean
}
