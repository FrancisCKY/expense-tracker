const express = require('express')
const router = express.Router()
const db = require('../models')
const Record = db.Record

router.get('/new', (req, res) => {
  res.render('new')
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id

  return Record.findByPk(id, {
    attributes: ['id', 'name', 'date', 'amount'],
    raw: true
  })
    .then((record) => {
      record.date = new Date(record.date).toLocaleDateString('ISO', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-')
      console.log(record)
      res.render('edit', { record })
    })
})

router.get('/record', (req, res) => {
  return Record.findAll({
    attributes: ['id', 'name', 'date', 'amount', 'userId', 'categoryId'],
    raw: true

  })
    .then((records) => {
      records.forEach(record => {
        record.date = record.date.toLocaleDateString('ISO', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
      })

      const totalAmount = records.reduce((sum, record) => sum + record.amount, 0)
      res.render('index', { records, totalAmount })
    })
})

router.post('/new/add', (req, res) => {
  const name = req.body.name
  const date = req.body.date
  const amount = req.body.amount

  return Record.create({ name, date, amount })
    .then(() => res.redirect('/expense/record'))
    .catch((err) => console.log(err))
})

router.put('/:id/edit', (req, res) => {
  const body = req.body
  const id = req.params.id

  return Record.update({ name: body.name, date: body.date, category: body.category, amount: body.amount }, { where: { id } })
    .then(() => res.redirect('/expense/record'))
})

router.delete('/:id/delete', (req, res) => {
  const id = req.params.id

  return Record.destroy({ where: { id } })
    .then(() => res.redirect('/expense/record'))
    .catch((err) => console.log(err))
})

module.exports = router