//src/actions/batches.js
import * as request from 'superagent'
import { baseUrl } from '../collect/constants'
import { logout } from './users'
import { isExpired } from '../collect/jwt'

export const GET_BATCHES = 'GET_BATCHES'
export const ADD_BATCH = 'ADD_BATCH'

const updateBatches = batches => ({
    type: GET_BATCHES,
    payload: batches
})

const createBatch = batch => ({
    type: ADD_BATCH,
    payload: batch
  })

export const getBatches = () => (dispatch, getState) => {
    const state = getState()
    if (!state.currentUser) return null

    const jwt = state.currentUser.jwt
    if (isExpired(jwt)) return dispatch(logout())

    request
      .get(`${baseUrl}/batches`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(updateBatches(result.body)))
      .catch(err => console.error(err))
} 

export const addBatch = () => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt

    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .post(`${baseUrl}/batches`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(createBatch(result.body)))
      .catch(err => console.error(err))
}
