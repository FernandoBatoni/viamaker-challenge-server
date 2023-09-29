import express from 'express'

import controllers from './controllers/controllersIndex'

const app = express.Router()

const router = express.Router()

app.use('/', router)

router.use('/videos', controllers.VideosController)
router.use('/produtos', controllers.ProductsController)
router.use('/usuarios', controllers.UserController)

export default app
