import 'dotenv/config'
import { NextFunction, Request, Response } from 'express'
import { logger } from 'src/logs/logs.cfg/log-cfg'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.SECRET_KEY

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  let authHeader = req.headers.authorization

  const [, token] = String(authHeader).split(' ')

  if (!token) {
    return res
      .status(400)
      .send({ Message: 'Necessario realizar login no ambiente' })
  }

  try {
    jwt.verify(token, SECRET_KEY)
    next()
  } catch (error) {
    logger.error('AUTH ERROR:', error)
  }
}

/*
Para testar o auth no insominia é necessario ir na aba auth e selecionar Beares Token
*/
