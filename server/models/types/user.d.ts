export interface UserAttributes {
  uid: number
  name: string
  email: string
  password: string
  ip: string
  avatar: string
  roles: number
  status: number
  time: number
  moemoepoint: number
  bio: string
  upvote: number
  like: number
  dislike: number

  daily_image_count: number
  daily_check_in: number

  patch: number[]
  comment: number[]
  like_patch: number[]
  favorite_patch: number[]
  contribute_patch: number[]

  patch_resource: number[]
  like_patch_resource: number[]

  created: Date
  updated: Date
}
