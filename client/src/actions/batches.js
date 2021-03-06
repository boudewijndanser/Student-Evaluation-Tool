//src/actions/batches.js
import * as request from 'superagent'
import { baseUrl } from '../collect/constants'
import { logout } from './users'
import { isExpired } from '../collect/jwt'

export const GET_BATCHES = 'GET_BATCHES'
export const ADDED_BATCH = 'ADD_BATCH'
export const GET_BATCH = 'GET_BATCH'
export const BATCH_CREATED = 'BATCH_CREATED'

const updateBatches = batches => ({
    type: GET_BATCHES,
    payload: batches
})

const createdBatch = batch => ({
    type: BATCH_CREATED,
    payload: batch
  })

  const updateBatch = batch => ({
    type: GET_BATCH,
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

export const addBatch = (batchNumber, startDate, endDate) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt

    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .post(`${baseUrl}/addbatch`)
      .set('Authorization', `Bearer ${jwt}`)
      .send({ batchNumber, startDate, endDate })
      .then(result => dispatch(createdBatch(result.body)))
      .catch(err => console.error(err))
}

export const getBatch = (id) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt

    if (isExpired(jwt)) return dispatch(logout())
    
    request
      .get(`${baseUrl}/batch/${id}`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(updateBatch(result.body)))
      .catch(err => console.error(err))
}

