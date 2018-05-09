import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'
import Student from '../students/entity'
import User from '../users/entity'

@Entity()
export default class Evaluation extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  remark: string

  @IsString()
  @Column('text')
  color: string

  @CreateDateColumn()
  evaluationDate: Date

  @ManyToOne(_ => Student, student => student.evaluations, {eager: true})
  student: Student

  @ManyToOne(_ => User, user => user.evaluations, {eager: true})
  user: User
}