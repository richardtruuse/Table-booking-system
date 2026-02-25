import { Roles } from '../enums/Roles'

export interface User {
  id: number
  username: string
  password: string
  role: Roles
}

// Dummy users for testing
export const users: User[] = [
  {
    id: 1,
    username: 'alice',
    password: 'password1',
    role: Roles.USER,
  },
  {
    id: 2,
    username: 'bob',
    password: 'password2',
    role: Roles.ADMIN,
  },
]
