const express = require('express')
const cors = require('cors')

/// Routers
const contentRouter = require('./routes/content')

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.use('/content', contentRouter)
