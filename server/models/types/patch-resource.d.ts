import type { UserAttributes } from './user'
import type { Patch } from './patch'

export interface PatchResource {
  // Essential features
  prid: number
  gid: number
  uid: number
  type: string
  link: string[]
  language: string
  platform: string
  size: string

  // Auto initialized features
  code: string
  password: string
  note: string
  time: number
  status: number
  likes: number[]

  user: UserAttributes[]
  patch: Patch[]

  created: Date
  updated: Date
}
