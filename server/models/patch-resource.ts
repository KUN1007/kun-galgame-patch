import mongoose from 'mongoose'
import increasingSequence from '../utils/increasingSequence'
import type { PatchResource } from './types/patch-resource'

const PatchResourceSchema = new mongoose.Schema<PatchResource>(
  {
    prid: { type: Number, unique: true },
    gid: { type: Number, required: true },
    uid: { type: Number, required: true },
    type: { type: String, default: '' },
    link: { type: [String], default: [] },
    language: { type: String, default: '' },
    platform: { type: String, default: '' },
    size: { type: String, default: '', maxlength: 107 },

    code: { type: String, default: '', maxlength: 1007 },
    password: { type: String, default: '', maxlength: 1007 },
    note: { type: String, default: '', maxlength: 1007 },

    time: { type: Number, default: 0 },
    status: { type: Number, default: 0 },
    likes: { type: [Number], default: [] }
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

PatchResourceSchema.virtual('user', {
  ref: 'user',
  localField: 'uid',
  foreignField: 'uid'
})

PatchResourceSchema.virtual('patch', {
  ref: 'patch',
  localField: 'gid',
  foreignField: 'gid'
})

PatchResourceSchema.pre('save', increasingSequence('prid'))

const PatchResourceModel = mongoose.model<PatchResource>(
  'patch_resource',
  PatchResourceSchema
)

export default PatchResourceModel
