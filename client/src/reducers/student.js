//src/reducers/student.js
import { ADD_STUDENT, GET_STUDENT, ADD_STUDENT_FAILED } from '../actions/students'

export default (state = null , {type, payload}) => {
  switch (type) {
  
      case ADD_STUDENT:
      return state.concat(payload)
      

      case GET_STUDENT:
      return payload

      case ADD_STUDENT_FAILED:
      return payload
      

    default:
      return state
  }
}