import { ATTEND_EVENT } from '../actions/actions_index.js'

export default (state = initialState, action) => {
  switch (action.type) {
    case ATTEND_EVENT:
      return state.slice(0, action.index)
                  .concat(action.event)
                  .concat(state.slice(action.index+1))
    default:
      return state
  }
}

const initialState = [
  {
    title: 'Head control',
    overview: 'working on head control muscles',
    timepd: '30 mins for 3 months',
    description: "You will be working the muscles for 30 mins for the child's own head stability",
    url: 'https://www.facebook.com/MyChildIsGreat/',
  },
  {
    title: 'Neck control',
    overview: 'working on head control muscles',
    timepd: '30 mins',
    timescale: '3 months',
    description: "You will be working the muscles for 30 mins for the child's own head stability",
    url: 'https://www.facebook.com/MyChildIsGreat/',
  },
  {
    title: 'Shoulder control',
    overview: 'working on head control muscles',
    timepd: '30 mins',
    timescale: '3 months',
    description: "You will be working the muscles for 30 mins for the child's own head stability",
    url: 'https://www.facebook.com/MyChildIsGreat/',
  },
  {
    title: 'Standing control',
    overview: 'working on head control muscles',
    timepd: '30 mins',
    timescale: '3 months',
    description: "You will be working the muscles for 30 mins for the child's own head stability",
    url: 'https://www.facebook.com/MyChildIsGreat/',
  }
]
