import { APP_LOAD, REDIRECT, LOGIN } from '../constants/actionTypes'

const initialState = {
    appname: 'conduit',
    token: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null
      }

    case REDIRECT:
      return {
        ...state,
        redirectTo: null
      }

      case LOGIN:
        return {
          ...state,
          currentUser : action.payload ? action.payload.user : null,
          token: action.payload ? action.payload.user.token : null
        }

    default:
      return state
  }
}
