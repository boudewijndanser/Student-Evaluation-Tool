//src/students/controller.ts
import { JsonController, Authorized, Param, Get, NotFoundError, Body, HttpCode, Post } from 'routing-controllers'
import Student from './entity'

  
  @JsonController()
  export default class StudentController {
  
    
    //@Authorized()
    @Get('/student/:id([0-9]+)')
    async getStudentById(
      @Param('id') id: number ) {
      const studentFromDb = await Student.findOneById(id)
      if(!studentFromDb) throw new NotFoundError('The student you are looking isn\'t here...')
      return studentFromDb
    }
  
    //   //@Authorized()
    //   @Get('/studentsbybatchid/:id([0-9]+)')
    //   async getStudentsByBatchId(
    //     @Param('id') batchId: number ) {
    //         console.log('batchId: ', batchId)
    //         const studentsFromBatch = await Student.findByIds({batch: batchId})

    //     if(!studentsFromBatch) throw new NotFoundError('The students you are looking aren\'t here...')
    //     return studentsFromBatch
    //   }
   
      //@Authorized()
      @Get('/students')
      async getAllStudents(){
        const AllStudents = await Student.find()

        if(!AllStudents) throw new NotFoundError('All the students are gone...')
        return AllStudents
      }
   

    // @Authorized()
    // @Post('/students')
    // @HttpCode(200)
    // async createStudent(
    // @Body() student: Student) {
    //   const entity = await student.save()  
    //   return entity
    // }

  }
  
  