import { Request, Response } from 'express'
import { logger } from 'src/logs/logs.cfg/log-cfg'
import {
  createReportService,
  listReportsServices,
} from '../services/dashboard.services'

export interface IDataDTO {
  assunto: string
  chamado: string
}

export async function createReportController(req: Request, res: Response) {
  try {
    const data: IDataDTO = req.body
    const id = req.params.id

    await createReportService(data, id)

    res.send({ Message: 'Chamado registrado com sucesso' })
  } catch (error) {
    logger.error('DASHBOARD:CONTROLLER CREATE FUNCTION ERROR:', error)
    console.log(error)
  }
}

export async function getReportsDashboard(req: Request, res: Response) {
  try {
    const id = req.params.id
    const reports = await listReportsServices(id)

    res.send(reports)
  } catch (err) {
    console.log(err)
  }
}
