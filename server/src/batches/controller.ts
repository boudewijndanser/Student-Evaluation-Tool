//src/batches/controller.ts
import { JsonController, Authorized, Param, Get, NotFoundError, Body, HttpCode, Post } from 'routing-controllers'
import Batch from './entity'
  
  @JsonController()
  export default class BatchController {
  
    @Authorized()
    @Get('/batches/:id([0-9]+)')
    async getBatchById(
      @Param('id') id: number ) {
      const batchFromDb = await Batch.findOneById(id)
      if(!batchFromDb) throw new NotFoundError('The batch you are looking for doesn\'t exist...')
      return batchFromDb
    }
  
    @Authorized()
    @Get('/batches')
    async getBatches() {
      const batchesFromDb = await Batch.find()
      if(!batchesFromDb) throw new NotFoundError ('Can\'t find your batch...')
      return batchesFromDb
    }

    @Authorized()
    @Post('/batches')
    @HttpCode(200)
    createBatch(
    @Body() batch: Batch) {
        return batch.save()
    }

  }
  
  