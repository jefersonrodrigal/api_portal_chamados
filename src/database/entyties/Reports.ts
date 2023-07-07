import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { User } from './User'
import { Attendant } from './Attendants'

@Entity({ name: 'chamados' })
export class Reports {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: Number

  @Column({ name: 'assunto' })
  subject: string

  @Column({ name: 'chamado' })
  report: string

  @Column({ name: 'pendente', default: true })
  pending: boolean

  @Column({ name: 'em_progresso', default: false })
  inProgress: boolean

  @Column({ name: 'concluido', default: false })
  finished: boolean

  @CreateDateColumn({ name: 'data_criacao' })
  createdAt: Date

  @ManyToOne(() => User, user => user.fkreports)
  @JoinColumn({
    name: 'fk_usuarios',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_usuarios',
  })
  fkuser: number

  @ManyToOne(() => Attendant, attendant => attendant.fkreports)
  @JoinColumn({
    name: 'fk_atendentes',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_atendentes',
  })
  fkattendant: number
}
