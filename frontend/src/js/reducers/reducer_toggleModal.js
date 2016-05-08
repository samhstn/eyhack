import { TOGGLE_MODAL } from '../actions/actions_index.js'

export default (state = {isOpen: false}, action) => {
  console.log(state, 'togModal<<<')
  switch (action.type) {
    case TOGGLE_MODAL:
      return {isOpen: !state.isOpen}
    default:
      return state
  }
}
