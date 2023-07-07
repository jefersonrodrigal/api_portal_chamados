import { Request, Response } from 'express'
import { loginService } from 'src/services/login.services'
import { logger } from 'src/logs/logs.cfg/log-cfg'

export interface ILoginDTO {
  email: string
  password: string
}

export async function loginController(req: Request, res: Response) {
  try {
    const submit: ILoginDTO = req.body

    const loginUser = await loginService(submit)

    if (!loginUser) {
      return res.json({ Message: 'Usuario ou senha Invalidos' })
    }

    res.send(loginUser).json()
  } catch (error) {
    logger.error('LOGIN:CONTROLLER LOGIN FUNCTION ERROR:', error)
    console.error(error)
  }
}
