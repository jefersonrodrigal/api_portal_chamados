/*
Recebe os dados e faz as operações de banco
*/

import { User } from 'src/database/entyties/User'
import { ApiDataSource } from '../database/configs/cfg_datasource'
import { IUserDTO, IUserUpdateDTO } from 'src/controllers/user.controller'
import { logger } from 'src/logs/logs.cfg/log-cfg'

interface IUserQuery {
  name: string
  lastname: string
  email: string
}

export async function createUserRepository(userData: IUserDTO) {
  try {
    const newUser = await ApiDataSource.createQueryBuilder()
      .insert()
      .into(User)
      .values({
        email: userData.email,
        password: userData.password,
        name: userData.name,
        lastname: userData.lastname,
      })
      .execute()
    return newUser
  } catch (error) {
    logger.error('REPOSITORIE CREATE FUNCTION ERROR', error)
    console.error(error)
  }
}

export async function listUsersRepositorie() {
  try {
    const users: IUserQuery[] = await ApiDataSource.getRepository(User)
      .createQueryBuilder()
      .select('usuarios.nome', 'nome')
      .addSelect('usuarios.sobrenome', 'sobrenome')
      .addSelect('usuarios.email', 'email')
      .groupBy('usuarios.id')
      .from(User, 'usuarios')
      .getRawMany()
    return users
  } catch (error) {
    logger.error('REPOSITORIE READ FUNCTION ERROR', error)
    console.error(error)
  }
}

export async function listUserRepositorie(id: number) {
  try {
    const user: User = await ApiDataSource.getRepository(User)
      .createQueryBuilder()
      .select('usuarios.name', 'nome')
      .addSelect('usuarios.lastname', 'sobrenome')
      .addSelect('usuarios.email', 'email')
      .from(User, 'usuarios')
      .where('usuarios.id = :id', { id: id })
      .getRawOne()
    return user
  } catch (error) {
    logger.error('REPOSITORIE LISTBYID FUNCTION ERROR', error)
    console.error(error)
  }
}

export async function updateUserRepositorie(id: number, user: IUserUpdateDTO) {
  try {
    await ApiDataSource.getRepository(User)
      .createQueryBuilder()
      .update('usuarios')
      .set({ name: user.nome, lastname: user.sobrenome, email: user.email })
      .where('id = :id', { id: id })
      .execute()

    return
  } catch (error) {
    logger.error('REPOSITORIE UPDATE FUNCTION ERROR', error)
    console.error(error)
  }
}

export async function deleteUserRepositorie(id: number) {
  try {
    await ApiDataSource.getRepository(User)
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id: id })
      .execute()
    return
  } catch (error) {
    logger.error('REPOSITORIE DELETE FUNCTION ERROR', error)
    console.error(error)
  }
}
