//src/reducers/batches.js
import { GET_BATCHES, ADD_BATCH } from '../actions/batches'

export default (state = null , {type, payload}) => {
  switch (type) {
    case GET_BATCHES:
      return payload.reduce((batches, batch) => {
        batches[batch.id] = batch
        return batches
      }, {})

      case ADD_BATCH:
      return {
        ...state,
        [payload.id]: payload
      }

    default:
      return state
  }
}