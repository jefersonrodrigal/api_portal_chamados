import {
  IAttendantUpdateDTO,
  IAttendentsDTO,
} from 'src/controllers/attendants.controller'
import { ApiDataSource } from 'src/database/configs/cfg_datasource'
import { Attendant } from 'src/database/entyties/Attendants'
import { logger } from 'src/logs/logs.cfg/log-cfg'

interface IAttendantsQuery {
  name: string
  lastname: string
  email: string
}

export async function createAttendantRepositori(data: IAttendentsDTO) {
  try {
    await ApiDataSource.createQueryBuilder()
      .insert()
      .into(Attendant)
      .values({
        email: data.email,
        password: data.password,
        name: data.name,
        lastname: data.lastname,
      })
      .execute()

    return
  } catch (error) {
    logger.error('REPOSITORIE:CREATE ATTENDANTE FUNCTION ERROR:', error)
  }
}

export async function listAttendantsRepositorie() {
  try {
    const attendants: IAttendantsQuery[] = await ApiDataSource.getRepository(
      Attendant,
    )
      .createQueryBuilder()
      .select('atendentes.name', 'nome')
      .addSelect('atendentes.lastname', 'sobrenome')
      .addSelect('atendentes.email', 'email')
      .from(Attendant, 'atendentes')
      .groupBy('atendentes.id')
      .getRawMany()
    return attendants
  } catch (error) {
    logger.error('REPOSITORIE:LIST ATTENDANT FUNCTION ERROR:', error)
  }
}

export async function listAttendantRepositorie(id: number) {
  try {
    const attendant: Attendant = await ApiDataSource.getRepository(Attendant)
      .createQueryBuilder()
      .select('atendentes.name', 'nome')
      .addSelect('atendentes.lastname', 'sobrenome')
      .addSelect('atendentes.email', 'email')
      .from(Attendant, 'atendentes')
      .where('atendentes.id = :id', { id: id })
      .getRawOne()
    return attendant
  } catch (error) {
    logger.error('REPOSITORIE:LISTID ATTENDANT FUNCTION ERROR:', error)
    console.log(error)
  }
}

export async function updateAttendantRepositorie(
  id: number,
  attendant: IAttendantUpdateDTO,
) {
  try {
    await ApiDataSource.getRepository(Attendant)
      .createQueryBuilder()
      .update('atendentes')
      .set({
        name: attendant.nome,
        lastname: attendant.sobrenome,
        email: attendant.email,
      })
      .where('id = :id', { id: id })
      .execute()

    return
  } catch (error) {
    logger.error('REPOSITORIE:UPDATE ATTENDANT FUNCTION ERROR:', error)
    console.log(error)
  }
}
export async function deleteAttendantRepositori(id: number) {
  try {
    await ApiDataSource.getRepository(Attendant)
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id: id })
      .execute()
    return
  } catch (error) {
    logger.error('REPOSITORIE:DELETE ATTENDANT FUNCTION ERROR:', error)
    console.log(error)
  }
}
