import { logger } from 'src/logs/logs.cfg/log-cfg'
import { ApiDataSource } from '../database/configs/cfg_datasource'
import { User } from '../database/entyties/User'

export async function loginUserRepositori(email: string) {
  try {
    const user: User = await ApiDataSource.getRepository(User)
      .createQueryBuilder()
      .select('usuarios.id', 'id')
      .addSelect('usuarios.email', 'email')
      .addSelect('usuarios.password', 'password')
      .from(User, 'usuarios')
      .where('usuarios.email = :email', { email: email })
      .getRawOne()
    return user
  } catch (error) {
    logger.error('REPOSITORIE LOGIN FUNCTION ERROR', error)
    console.error(error)
  }
}
