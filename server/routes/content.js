const express = require('express')
const router = express.Router()
const { data } = require('../data/content.json')
const { asyncFunc } = require('../utils/asyncFunc')

/// Return all the content
router.get('/all', async (req, res) => {
  try {
    asyncFunc(() => {
      res.json({ status: 200, data })
    })
  } catch (err) {
    res.json({ status: 500, message: 'Data not available' })
  }
})

module.exports = router
