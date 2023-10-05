/*
Recebe a requisição, retorna a resposta para aplicação
*/

import { Request, Response } from 'express'
import {
  createUserService,
  deleteUserService,
  listUsersService,
  updateUserService,
} from '../services/user.services'
import { logger } from 'src/logs/logs.cfg/log-cfg'
import { IUserDTO, IUserUpdateDTO } from 'src/DTOs/UserDTO'


export async function createUserController(req: Request, res: Response) {
  try {
    const data: IUserDTO = req.body

    const userNew = await createUserService(data)

    if (userNew) {
      res
        .send({ MESSAGE: `Usuario ${data.name} cadastrado com sucesso` })

        .status(201)
    } else {
      res.send({ MESSAGE: 'Usuario não pode ser cadastrado.' })
    }
  } catch (error) {
    logger.error(logger.error('CONTROLLERS CREATE FUNCTION ERROR:', error))
    console.log(error)

    res.end().status(500)
  }
}

export async function listUsersController(req: Request, res: Response) {
  try {
    const id: string = req.params.id
    const listUsers = await listUsersService(id)

    res.send(listUsers).status(200).json()

    if (typeof listUsers === 'undefined') {
      res.send({ MESSAGE: 'Not Found' }).status(400)
    }
  } catch (error) {
    logger.error('CONTROLLERS READ FUNCTION ERROR:', error)
    console.log(error)
  }
}

export async function updateUserController(req: Request, res: Response) {
  try {
    const id: string = req.params.id
    const data: IUserUpdateDTO = req.body

    await updateUserService(id, data)

    const user = await listUsersService(id)

    if (typeof user === 'undefined') {
      res.send({ MESSAGE: 'Not Found' }).status(400)
    }

    res.send(user)
  } catch (error) {
    logger.error('CONTROLLERS UPDATE FUNCTION ERROR:', error)
    console.log(error)
  }
}

export async function deleteUserController(req: Request, res: Response) {
  try {
    const id: string = req.params.id

    await deleteUserService(id)

    res.send({ Message: 'Usuario deletado com sucesso' })
  } catch (error) {
    logger.error('CONTROLLERS DELETE FUNCTION ERROR:', error)
    console.log(error)
  }
}
