import { REGISTER, LOGIN, UPDATE_USER } from '../constants/actionTypes'

export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        inProgress: false,
        user: action.payload ? action.payload : null
      }

      case UPDATE_USER:
      return {
        ...state,
        inProgress: false,
        user: action.payload ? action.payload : null
      }

    default:
      return state
  }
}
