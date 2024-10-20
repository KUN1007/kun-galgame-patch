import type { UserAttributes } from './user'

export interface PatchHistory {
  phid: number
  gid: number
  uid: number
  time: number
  action: string
  type: string
  content: string

  user: UserAttributes[]

  created: Date
  updated: Date
}
