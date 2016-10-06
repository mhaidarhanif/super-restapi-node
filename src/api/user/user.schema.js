import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
}, {
  timestamps: true
})

userSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      username: this.username,
      name: this.name,
      email: this.email,
      password: '[HIDDEN]',
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

module.exports = mongoose.model('User', userSchema)
