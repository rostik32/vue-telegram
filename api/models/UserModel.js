import pkg from 'mongoose'
const { Schema, model } = pkg

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true }
})

export default model('User', UserSchema)
