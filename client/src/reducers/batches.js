//src/reducers/batches.js
import { GET_BATCHES, BATCH_CREATED } from '../actions/batches'

export default (state = null , {type, payload}) => {
  switch (type) {
    case GET_BATCHES:
        return payload
    
    case BATCH_CREATED:
        return state.concat(payload)

    default:
      return state
  }
}