import { Request, Response } from 'express'
import {
  createAttendant,
  deleteAttendantService,
  listAttendantsService,
  updateAttendantService,
} from '../services/attendants.services'
import { logger } from 'src/logs/logs.cfg/log-cfg'
import { IAttendantUpdateDTO, IAttendentsDTO } from 'src/DTOs/AttendentsDTO'



export async function createAttendantsController(req: Request, res: Response) {
  const data: IAttendentsDTO = req.body

  const newAttendant = await createAttendant(data)

  res.send(newAttendant).status(201)
}

export async function listAttendantsController(req: Request, res: Response) {
  try {
    const id: string = req.params.id
    const attendants = await listAttendantsService(id)

    res.send(attendants).status(200).json()
  } catch (error) {
    logger.error(logger.error('CONTROLLERS READ FUNCTION:', error))
    console.log(error)
  }
}

export async function updateAttendantController(req: Request, res: Response) {
  const id: string = req.params.id
  const data: IAttendantUpdateDTO = req.body

  await updateAttendantService(id, data)

  const attendant = await listAttendantsService(id)

  res.send(attendant)
}

export async function deleteAttendantController(req: Request, res: Response) {
  const id: string = req.params.id

  await deleteAttendantService(id)

  res.send({ Message: 'Atendente deletado com sucesso' })
}
