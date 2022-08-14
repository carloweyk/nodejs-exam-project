// import express modules
import express from 'express'
import cors from 'cors'
import liderRoutes from './routes/leader.routes.js'

const app = express()
//body parser
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//use routes
app.use(liderRoutes)
//listener
app.listen(8080, () => {
    console.log('server is ready...');
})