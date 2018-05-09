//src/actions/batches.js
import * as request from 'superagent'
import { baseUrl } from '../collect/constants'
import { logout } from './users'
import { isExpired } from '../collect/jwt'

export const GET_STUDENTS = 'GET_STUDENTS'
export const GET_STUDENT = 'GET_STUDENT'
export const ADD_STUDENT = 'ADD_STUDENT'


const updateStudents = students => ({
    type: GET_STUDENTS,
    payload: students
})

const createStudent = student => ({
    type: ADD_STUDENT,
    payload: student
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