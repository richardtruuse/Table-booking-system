import { Roles } from '../enums/Roles'

export interface User {
  id: number
  username: string
  password: string
  role: Roles
}
