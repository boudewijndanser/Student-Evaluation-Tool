//src/batches/controller.ts
import { JsonController, Authorized, Param, Get, NotFoundError, Body, Post, HttpCode } from 'routing-controllers'
import { getRepository } from 'typeorm'
import Batch from './entity'
  
  @JsonController()
  export default class BatchController {
  
    @Authorized()
    @Get('/batch/:id([0-9]+)')
    async getBatchById(
      @Param('id') batchId: number ) {
      // Finally linked table magic!

      const batchFromDb = await getRepository(Batch)
        .createQueryBuilder('batch')
        .where('batch.id = :id', {id: batchId})
        .leftJoinAndSelect('batch.students','students')
        .leftJoinAndSelect('students.evaluations','evaluations')
        .getOne()

      if(!batchFromDb) throw new NotFoundError('The batch you are looking for doesn\'t exist...')
      return batchFromDb
    }
  
    @Authorized()
    @Get('/batches')
    async getBatches() {
      const batchesFromDb = await Batch.find()
      if(!batchesFromDb) throw new NotFoundError ('Can\'t find your batches.')
      
      return batchesFromDb
    }
    
    @Authorized()
    @Post('/addbatch')
    @HttpCode(201)
    async createBatch(
      @Body() batch: Batch
    ) {
      return await batch.save()
    
    }

  }