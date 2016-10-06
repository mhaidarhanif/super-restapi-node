import mongoose, { Schema } from 'mongoose'
import AutoIncrement from 'mongoose-sequence'
import shortid from 'shortid'
import Hashids from 'hashids'

// generate hash from number with padding 10
const hashids = new Hashids('', 10)

// super complete user schema
const userSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  userNumber: {
    type: Number
  },
  username: {
    required: true,
    type: String
  },
  name: {
    first: String,
    last: String
  },
  email: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  salt: {
    type: String
  },
  active: {
    type: Boolean
  },
  age: {
    type: Number,
    min: 18,
    max: 100
  }
}, {
  timestamps: true
})

// auto increment user number with mongoose-sequence
userSchema.plugin(AutoIncrement, { inc_field: 'userNumber' })

// custom full view
userSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this._id,
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
