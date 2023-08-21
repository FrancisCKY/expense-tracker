const express = require('express')
const router = express.Router()
const db = require('../models')
const Record = db.Record

router.get('/new', (req, res) => {
  res.render('new')
})

router.get('/edit', (req, res) => {
  res.render('edit')
})

router.get('/record', (req, res) => {
  return Record.findAll({
    attributes: ['id', 'name', 'date', 'amount', 'userId', 'categoryId'],
    raw: true
  })
    .then((records) => {
      const totalAmount = records.reduce((sum, record) => sum + record.amount, 0)
      res.render('index', { records, totalAmount })
    })
})


module.exports = router