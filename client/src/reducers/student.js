//src/reducers/student.js
import { ADD_STUDENT, GET_STUDENT } from '../actions/students'

export default (state = null , {type, payload}) => {
  switch (type) {
  
      case ADD_STUDENT:
      return {
        ...state,
        [payload.id]: payload
      }

      case GET_STUDENT:
      return payload
      

    default:
      return state
  }
}