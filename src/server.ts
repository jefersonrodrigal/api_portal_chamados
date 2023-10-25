import { app } from './app'
import { logger } from './logs/logs.cfg/log-cfg'

app.listen(3000, async () => {
  try {
    console.log('API Started on http://localhost:3000')
  } catch (error) {
    logger.error('SERVER START ERROR', error)
  }
})
