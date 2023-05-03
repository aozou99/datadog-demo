const { logger } = require('./logger')
const express = require('express')
const app = express()
const router = express.Router()
const port = 3000

const sleep = (second) => new Promise(resolve => setTimeout(resolve, second))
const getRandomInt = (max) => Math.floor(Math.random() * max);

app.use((req, res, next) => {
    const latencyStartTime = new Date()
    res.on('finish', function() {
        logger.info({
            status: res.statusCode,
            method: req.method,
            path: `${req.baseUrl}${req.path}`,
            latency_ms: new Date() - latencyStartTime,
        })
    })
    next()
})

router.get('/read', async (req, res) => {
    await sleep(getRandomInt(200))
    res.send('read!')
})

router.post('/create', async (req, res) => {
    await sleep(getRandomInt(300))
    res.send('create!')
})

router.post('/update', async (req, res) => {
    await sleep(getRandomInt(100))
    res.send('update!')
})

router.delete('/delete', async (req, res) => {
    await sleep(getRandomInt(50))
    res.send('delete!')
})

app.use('/user', router)
app.use('/item', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
