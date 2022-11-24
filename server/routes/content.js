const express = require('express')
const router = express.Router()
const { packages, cities } = require('../data/content.json')
const { asyncFunc } = require('../utils/asyncFunc')

/// Return all the content
router.get('/packages', async (req, res) => {
  try {
    asyncFunc(() => {
      res.json({ status: 200, data: packages })
    })
  } catch (err) {
    res.json({ status: 500, message: 'Data not available' })
  }
})

/// Return all the cities to deliver
router.get('/cities', async (req, res) => {
  try {
    asyncFunc(() => {
      res.json({ status: 200, data: cities })
    })
  } catch (err) {
    res.json({ status: 500, message: 'No cities available' })
  }
})
module.exports = router
