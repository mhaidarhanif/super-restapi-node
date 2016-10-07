/*
 * Super Router
 */

import { Router } from 'express'
import user from './api/user/user.router'

const router = new Router()

/**
 * @apiDefine master Master access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */

/**
 * @apiDefine admin Admin access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */

/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */

/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=30] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.
 */

// register blank route
router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to the SUPER SERVER' })
})
router.route('/api').get((req, res) => {
  res.json({ message: 'Welcome to the SUPER SERVER API!' })
})

// register all APIs
router.use('/api/users', user)

// export router to be used by server.js
module.exports = router
