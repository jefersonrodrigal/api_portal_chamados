import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm'
import { Reports } from './Reports'

@Entity({ name: 'atendentes' })
export class Attendant {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Column({ name: 'nome' })
  name: string

  @Column({ name: 'sobrenome' })
  lastname: string

  @Column({ name: 'email' })
  email: string

  @Column({ name: 'password' })
  password: string

  @CreateDateColumn({ name: 'data_criacao' })
  created_at: Date

  @OneToMany(() => Reports, reports => reports.fkattendant)
  @JoinColumn({ name: 'fk_chamados' })
  fkreports: Reports[]
}
