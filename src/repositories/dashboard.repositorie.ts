import { IDataDTO } from 'src/controllers/dashboard.controller'
import { ApiDataSource } from '../database/configs/cfg_datasource'
import { Reports } from '../database/entyties/Reports'
import { logger } from 'src/logs/logs.cfg/log-cfg'

interface IReportsQuery {
  subject: string
  report: string
  pending: boolean
  inProgress: boolean
  finished: boolean
}

export async function createReportRepositorie(data: IDataDTO, id: string) {
  try {
    await ApiDataSource.createQueryBuilder()
      .insert()
      .into(Reports)
      .values({
        subject: data.assunto,
        report: data.chamado,
        fkuser: Number(id),
      })
      .execute()
  } catch (err) {
    console.error(err)
  }
}

async function getReports(id: string) {
  try {
    const reports: Object = await ApiDataSource.createQueryBuilder()
      .select(['assuntos', 'chamados', 'created_at', 'pendente', 'atendido'])
      .from(Reports, 'reports')
      .where('reports.user_id = :user_id')
      .setParameter('user_id', Number(id))
      .getRawMany()

    return reports
  } catch (err) {
    console.error(err)
  }
}

export default { getReports }

export async function listReportsUserRepositorie(id: number) {
  try {
    const reports: IReportsQuery[] = await ApiDataSource.getRepository(Reports)
      .createQueryBuilder()
      .select('chamados.assunto', 'assunto')
      .addSelect('chamados.chamado', 'chamado')
      .addSelect('chamados.pendente', 'pendente')
      .addSelect('chamados.em_progresso', 'em_progresso')
      .addSelect('chamados.concluido', 'concluido')
      .from(Reports, 'chamados')
      .where('chamados.fk_usuarios = :id', { id: id })
      .groupBy('chamados.id')
      .getRawMany()
    return reports
  } catch (error) {
    logger.error('REPOSITORIE LISTBYID FUNCTION ERROR', error)
    console.error(error)
  }
}
