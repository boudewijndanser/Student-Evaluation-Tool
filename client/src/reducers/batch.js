//src/reducers/batch.js
import { GET_BATCH } from '../actions/batches'

export default function (state = null, {type, payload}) {
	switch (type) {
		case GET_BATCH:
			return payload

		default:
      return state
	}
}