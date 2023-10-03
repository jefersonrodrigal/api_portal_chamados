import { DataSource } from 'typeorm'
import { User } from '../entyties/User'
import { Attendant } from '../entyties/Attendants'
import { Reports } from '../entyties/Reports'
import { createDatabase1688071208975 } from '../migrations/1688071208975-create_database'
import { CreateTableUsers1688003742204 } from '../migrations/1688071344479-create_table_users'
import { createTableReports1688074400750 } from '../migrations/1688074400750-create_table_reports'
import { createTableAtendentes1688403130973 } from '../migrations/1688403130973-create-table-atendentes'
import { createRelationshipUsuarios1Nchamados1688449083118 } from '../migrations/1688449083118-create-relationship-usuarios1-nchamados'
import { createRelationshipAtendentes1Nchamados1688563727576 } from '../migrations/1688563727576-create-relationship-atendentes1-nchamados'

export const ApiDataSource = new DataSource({
  type: 'sqlite',
  database: './homologdb.sqlite',
  synchronize: true,
  entities: [User, Attendant, Reports],
  migrations: [
    createDatabase1688071208975,
    CreateTableUsers1688003742204,
    createTableReports1688074400750,
    createTableAtendentes1688403130973,
    createRelationshipUsuarios1Nchamados1688449083118,
    createRelationshipAtendentes1Nchamados1688563727576,
  ],
})
