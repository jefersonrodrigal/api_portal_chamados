/*
Recebe os dados da camada de Controller, realiza as validações de acordo com
regras de negocio e encaminha os dados para a camada Repositorie

*/

import bcrypt from 'bcrypt'
import {
  createUserRepository,
  deleteUserRepositorie,
} from 'src/repositories/user.repositorie'
import {
  listUsersRepositorie,
  listUserRepositorie,
  updateUserRepositorie,
} from 'src/repositories/user.repositorie'
import { logger } from 'src/logs/logs.cfg/log-cfg'
import { IUserDTO, IUserUpdateDTO } from 'src/DTOs/UserDTO'

export async function createUserService(data: IUserDTO) {
  try {
    const dataUser = data
    if (
      dataUser.email === '' ||
      dataUser.password === '' ||
      dataUser.name === '' ||
      dataUser.lastname === ''
    ) {
      return
    }
    if (
      typeof dataUser.email !== 'string' ||
      typeof dataUser.password !== 'string' ||
      typeof dataUser.name !== 'string' ||
      typeof dataUser.lastname !== 'string'
    ) {
      return
    }

    const hash = await bcrypt.hash(dataUser.password, 10)

    dataUser.password = hash

    const userNew = await createUserRepository(dataUser)

    return userNew
  } catch (error) {
    logger.error('SERVICE CREATE FUNCTION ERROR', error)
    console.log(error)
  }
}

export async function listUsersService(id?: string) {
  try {
    if (!id) {
      const usersList = await listUsersRepositorie()
      console.log(id)
      return usersList
    }
    const user = await listUserRepositorie(Number(id))
    return user
  } catch (error) {
    logger.error('SERVICE READ FUNCTION ERROR', error)
    console.log(error)
  }
}

export async function updateUserService(id: string, data: IUserUpdateDTO) {
  try {
    const dataExistis = await listUserRepositorie(Number(Number(id)))

    if (dataExistis) {
      const userUpdated = updateUserRepositorie(Number(id), data)
      return userUpdated
    }
  } catch (error) {
    logger.error('SERVICE UPDATE FUNCTION ERROR', error)
    console.log(error)
  }
}

export async function deleteUserService(id: string) {
  try {
    const dataExistis = await listUserRepositorie(Number(Number(id)))

    if (dataExistis) {
      await deleteUserRepositorie(Number(id))
    }
  } catch (error) {
    logger.error('SERVICE DELETE FUNCTION ERROR', error)
    console.log(error)
  }
}
