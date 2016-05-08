import axios from 'axios'

export const GET_USER_DETAILS = 'GET_USER_DETAILS'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const CHANGE_CURRENT_EVENT = 'CHANGE_CURRENT_EVENT'

export const getUserDetails = () => {
  const details = axios.get('/user-request')
  return {
    type: GET_USER_DETAILS,
    payload: 'some user details'
  }
}

export const toggleModal = () => {
  return {
    type: TOGGLE_MODAL
  }
}

export const changeCurrentEvent = (event) => {
  return {
    type: CHANGE_CURRENT_EVENT,
    payload: event
  }
}
