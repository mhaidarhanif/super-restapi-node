const mongoose = require('mongoose')
const Schema   = mongoose.Schema


const customerSchema = new Schema({
  title: { type: String, required: true },
  body:  { type: String }
})


module.exports = mongoose.model('Customer', customerSchema)
