import { Router } from 'express'
import { loginController } from 'src/controllers/login.controller'

export const loginRouter = Router()

loginRouter.post('/', loginController)
