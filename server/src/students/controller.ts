//src/students/controller.ts
import { JsonController, Authorized, Param, BodyParam, Get, NotFoundError, Body, HttpCode, Post, Delete } from 'routing-controllers'
import Batch from '../batches/entity'
import Student from './entity'

  @JsonController()
  export default class StudentController {
  
    @Authorized()
    @Get('/student/:id([0-9]+)')
    async getStudentById(
      @Param('id') studentId: number ) {
      const studentFromDb = await Student.findOneById(studentId)
      if(!studentFromDb) throw new NotFoundError('The student you are looking isn\'t here...')
      
      return studentFromDb
    }

      @Authorized()
      @Get('/students')
      async getAllStudents(){
        const AllStudents = await Student.find()

        if(!AllStudents) throw new NotFoundError('All the students are gone...')
        return AllStudents
      }
   
      @Post('/addstudent')
      @HttpCode(201)
      async createStudent(
        @Body() student: Student,
        @BodyParam('batchId', {required: true}) batchId: number) {

        const batchFromRequest = await Batch.findOneById(batchId)
        //Check if the batch we are adding to exists
        if(batchFromRequest instanceof Batch) student.batch = batchFromRequest
        return await student.save()
        
      }

      @Authorized()
      @Delete('/removestudent/:id([0-9]+)')
      async deleteStudent(
        @Param('id') id: number
      ) {
        const studentToDelete = await Student.findOneById(id)
        if (!studentToDelete) throw new NotFoundError('Student doesn\'t exist')
        if(studentToDelete) await studentToDelete.remove()
        
        return 'Take care..!'
      }




    
  }
  
  