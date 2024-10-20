import mongoose from 'mongoose'
import increasingSequence from '../utils/increasingSequence'
import type { UserAttributes } from './types/user'

const UserSchema = new mongoose.Schema<UserAttributes>(
  {
    uid: { type: Number, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    ip: { type: String, default: '' },
    avatar: { type: String, default: '' },
    roles: { type: Number, default: 1 },
    status: { type: Number, default: 0 },
    time: { type: Number, default: Date.now() },
    moemoepoint: { type: Number, default: 0 },
    bio: { type: String, default: '', maxlength: 107 },
    like: { type: Number, default: 0 },

    daily_image_count: { type: Number, default: 0 },
    daily_check_in: { type: Number, default: 0 },

    patch: { type: [Number], default: [] },
    comment: { type: [Number], default: [] },
    like_patch: { type: [Number], default: [] },
    favorite_patch: { type: [Number], default: [] },
    contribute_patch: { type: [Number], default: [] },

    patch_resource: { type: [Number], default: [] },
    like_patch_resource: { type: [Number], default: [] }
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

UserSchema.pre('save', increasingSequence('uid'))

const UserModel = mongoose.model<UserAttributes>('user', UserSchema)

export default UserModel
