import pkg from 'mongoose'
const { Schema, model } = pkg

const TokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  refreshToken: { type: String, required: true }
})

export default model('Token', TokenSchema)
