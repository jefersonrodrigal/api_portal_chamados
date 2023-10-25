import express from 'express'
import { userrouter } from './routers/user.route'
import { dashboardrouter } from './routers/dashboard.router'
import { errors } from 'celebrate'
import { attendantsrouter } from './routers/attendants.router'
import { loginRouter } from './routers/login.route'
import swaggerUi from 'swagger-ui-express'
import { docApi } from './docs/doc-api'

export const app = express()

app.use(express.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(docApi))
app.use('/users', userrouter)
app.use('/login', loginRouter)
app.use('/dashboard', dashboardrouter)
app.use('/atendentes', attendantsrouter)
app.use(errors())
