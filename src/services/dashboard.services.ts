
import { IDataDTO } from 'src/DTOs/DashboardDTO'
import {
  createReportRepositorie,
  listReportsUserRepositorie,
} from 'src/repositories/dashboard.repositorie'

export async function createReportService(data: IDataDTO, id: string) {
  if (data.assunto === '' || data.chamado === '') {
    return
  }

  if (typeof data.assunto !== 'string' || typeof data.chamado !== 'string') {
    return
  }

  const report = await createReportRepositorie(data, id)

  return report
}

export async function listReportsServices(id: string) {
  const reports = await listReportsUserRepositorie(Number(id))
  return reports
}
