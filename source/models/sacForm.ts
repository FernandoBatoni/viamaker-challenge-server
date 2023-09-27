import mongoose from 'mongoose'

export interface sacForm {
  name: string
  email: string
}

const form = new mongoose.Schema<sacForm>({
  name: { type: String, required: true },
  email: { type: String, required: true },
})

export const SacFormModel = mongoose.model<sacForm>('sacFpr,', form)
