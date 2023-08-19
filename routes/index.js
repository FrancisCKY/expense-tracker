const express = require('express')
const router = express.Router()
const operate = require('./operate')

router.use('/expense', operate)

module.exports = router