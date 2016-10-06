import test from 'ava'
import mockgoose from 'mockgoose'
import mongoose from '../../config/mongoose'
import { schema } from '.'

test.beforeEach(async (t) => {
  const mongo = new mongoose.Mongoose()
  await mockgoose(mongo)
  await mongo.connect('')
  const User = mongo.model('User', schema)
  const user = await User.create({ username: 'test', name: 'test', email: 'test', password: 'test' })

  t.context = { ...t.context, User, user }
})

test.cb.after.always((t) => {
  mockgoose.reset(t.end)
})

test('view', (t) => {
  const { user } = t.context
  const view = user.view()
  t.true(typeof view === 'object')
  t.true(view.id === user.id)
  t.true(view.username === user.username)
  t.true(view.name === user.name)
  t.true(view.email === user.email)
  t.true(view.password === user.password)
  t.truthy(view.createdAt)
  t.truthy(view.updatedAt)
})

test('full view', (t) => {
  const { user } = t.context
  const view = user.view(true)
  t.true(typeof view === 'object')
  t.true(view.id === user.id)
  t.true(view.username === user.username)
  t.true(view.name === user.name)
  t.true(view.email === user.email)
  t.true(view.password === user.password)
  t.truthy(view.createdAt)
  t.truthy(view.updatedAt)
})
