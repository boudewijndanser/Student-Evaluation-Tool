//src/actions/students.js
import * as request from 'superagent'
import { baseUrl } from '../collect/constants'
import { logout } from './users'
import { isExpired } from '../collect/jwt'
import { getBatch } from './batches'

export const GET_STUDENTS = 'GET_STUDENTS'
export const GET_STUDENT = 'GET_STUDENT'
export const ADD_STUDENT = 'ADD_STUDENT'
export const ADD_STUDENT_FAILED = 'ADD_STUDENT_FAILED'


const updateStudents = students => ({
    type: GET_STUDENTS,
    payload: students
})


const updateStudent = student => ({
    type: GET_STUDENT,
    payload: student
})

export const getStudents = () => (dispatch, getState) => {
    const state = getState()
    if (!state.currentUser) return null

    const jwt = state.currentUser.jwt
    if (isExpired(jwt)) return dispatch(logout())

    request
      .get(`${baseUrl}/students`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(updateStudents(result.body)))
      .catch(err => console.error(err))
}

export const getStudent = (id) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt

    if (isExpired(jwt)) return dispatch(logout())
    
    request
    .get(`${baseUrl}/student/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(updateStudent(result.body)))
    .catch(err => console.error(err))
}

export const removeStudent = (id,currentBatch) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .delete(`${baseUrl}/removestudent/${id}`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(getBatch(currentBatch)))
      .catch(err => console.error(err))
  }

export const addStudent = (firstName, lastName, photoUrl, batchId) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt

    if (isExpired(jwt)) return dispatch(logout())

    request
    .post(`${baseUrl}/addstudent`)
    .set('Authorization', `Bearer ${jwt}`)
	.send({ firstName, lastName, photoUrl, batchId })
	.then(result => dispatch(getBatch(batchId)))
      .catch(err => console.error(err))
}
