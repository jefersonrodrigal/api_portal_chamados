import bcrypt from 'bcrypt'
import {
  IAttendantUpdateDTO,
  IAttendentsDTO,
} from 'src/controllers/attendants.controller'
import { logger } from 'src/logs/logs.cfg/log-cfg'
import {
  createAttendantRepositori,
  deleteAttendantRepositori,
  listAttendantRepositorie,
  listAttendantsRepositorie,
  updateAttendantRepositorie,
} from 'src/repositories/attendants.repositorie'

export async function createAttendant(data: IAttendentsDTO) {
  try {
    if (
      data.email === '' ||
      data.password === '' ||
      data.name === '' ||
      data.lastname === ''
    ) {
      return
    }

    if (
      typeof data.email !== 'string' ||
      typeof data.password !== 'string' ||
      typeof data.name !== 'string' ||
      typeof data.lastname !== 'string'
    ) {
      return
    }

    const hash = await bcrypt.hash(data.password, 10)

    data.password = hash

    const attendant = await createAttendantRepositori(data)

    return attendant
  } catch (err) {
    console.error(err)
  }
}
export async function listAttendantsService(id?: string) {
  try {
    if (typeof id === 'undefined') {
      const attendants = await listAttendantsRepositorie()
      return attendants
    }
    const attendant = await listAttendantRepositorie(Number(id))
    return attendant
  } catch (error) {
    logger.error(error)
    console.log(error)
  }
}

export async function updateAttendantService(
  id: string,
  data: IAttendantUpdateDTO,
) {
  const attendant = await listAttendantRepositorie(Number(Number(id)))

  if (attendant) {
    const attendantUpdated = await updateAttendantRepositorie(Number(id), data)
    return attendantUpdated
  }
}

export async function deleteAttendantService(id: string) {
  const dataExistis = await listAttendantRepositorie(Number(Number(id)))

  if (dataExistis) {
    await deleteAttendantRepositori(Number(id))
  }
}
