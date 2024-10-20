import mongoose from 'mongoose'
import increasingSequence from '../utils/increasingSequence'
import type { PatchComment } from './types/patch-comment'

const PatchCommentSchema = new mongoose.Schema<PatchComment>(
  {
    pcid: { type: Number, unique: true },
    gid: { type: Number, required: true },
    c_uid: { type: Number, required: true },
    to_uid: { type: Number, default: 0 },
    content: { type: String, default: '', maxlength: 1007 },

    likes: { type: [Number], default: [] }
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

PatchCommentSchema.virtual('cuid', {
  ref: 'user',
  localField: 'c_uid',
  foreignField: 'uid'
})

PatchCommentSchema.virtual('touid', {
  ref: 'user',
  localField: 'to_uid',
  foreignField: 'uid'
})

PatchCommentSchema.pre('save', increasingSequence('pcid'))

const PatchCommentModel = mongoose.model<PatchComment>(
  'patch_comment',
  PatchCommentSchema
)

export default PatchCommentModel
