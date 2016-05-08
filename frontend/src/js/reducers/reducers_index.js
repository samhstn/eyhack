import { combineReducers } from 'redux'
import userDetails from './reducer_userDetails.js'
import currentEvent from './reducer_currentEvent.js'
import toggleModal from './reducer_toggleModal.js'
import lessons from './reducer_lessons.js'

const rootReducer = combineReducers({
  userDetails,
  currentEvent,
  toggleModal,
  lessons
})

export default rootReducer
