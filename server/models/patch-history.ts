import mongoose from 'mongoose'
import increasingSequence from '../utils/increasingSequence'
import type { PatchHistory } from './types/patch-history'

const PatchHistorySchema = new mongoose.Schema<PatchHistory>(
  {
    phid: { type: Number, unique: true },
    gid: { type: Number, required: true },
    uid: { type: Number, required: true },
    time: { type: Number, default: 0 },
    action: { type: String, default: '' },
    type: { type: String, default: '' },
    content: { type: String, default: '', max: 1007 }
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

PatchHistorySchema.virtual('user', {
  ref: 'user',
  localField: 'uid',
  foreignField: 'uid'
})

PatchHistorySchema.pre('save', increasingSequence('phid'))

const PatchHistoryModel = mongoose.model<PatchHistory>(
  'patch_history',
  PatchHistorySchema
)

export default PatchHistoryModel
