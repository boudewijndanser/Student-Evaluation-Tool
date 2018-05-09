//src/batches/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
// import { IsNumber, IsDate } from 'class-validator'


@Entity()
export default class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  // @IsNumber()
  @Column('integer', {nullable: false})
  batchNumber: number

  // @IsDate()
  @Column('text', {nullable: false})
  startDate: string

  // @IsDate()
  @Column('text', {nullable: false})
  endDate: string

}