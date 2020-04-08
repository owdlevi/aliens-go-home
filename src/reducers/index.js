import { MOVE_OBJECTS } from '../actions'
import moveObjects from './moveObjescts'

const initialState = {
  angle: 45
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action)
    default:
      return state
  }
}

export default reducer
