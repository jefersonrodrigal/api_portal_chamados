import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm'
import { Reports } from './Reports'

@Entity({ name: 'usuarios' })
export class User {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
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

  @OneToMany(() => Reports, reports => reports.fkuser)
  @JoinColumn({ name: 'fk_chamados' })
  fkreports: Reports[]
}
