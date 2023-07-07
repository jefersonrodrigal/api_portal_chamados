import express from 'express'
import { ApiDataSource } from './database/configs/cfg_datasource'
import { userrouter } from './routers/user.route'
import { dashboardrouter } from './routers/dashboard.router'
import { logger } from './logs/logs.cfg/log-cfg'
import { errors } from 'celebrate'
import { attendantsrouter } from './routers/attendants.router'
import { loginRouter } from './routers/login.route'
import swaggerUi from 'swagger-ui-express'
import { docApi } from './docs/doc-api'

const app = express()

app.use(express.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(docApi))
app.use('/users', userrouter)
app.use('/login', loginRouter)
app.use('/dashboard', dashboardrouter)
app.use('/atendentes', attendantsrouter)
app.use(errors())

app.listen(3000, async () => {
  try {
    await ApiDataSource.initialize()
    console.log('API Started on http://localhost:3000')
  } catch (error) {
    logger.error('SERVER START ERROR', error)
  }
})
