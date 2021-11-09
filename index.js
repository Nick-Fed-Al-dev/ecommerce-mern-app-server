const express = require('express')
const config = require('config')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const PORT = config.get('port') || 3030

app.use(cors({origin: '*'}))

async function start(){
  try {
    await mongoose.connect(config.get('mongoURI'))
    console.log('DATABASE CONNECTION SUCCESS!')

    app.listen(PORT, () => {
      console.log('SERVER LISTEN ON PORT ' + PORT + '...')
    })
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()