import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED,
  HOME_PAGE_LOADED
} from '../constants/actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_PAGE_LOADED:
      return {
        ...state,
        article: action.payload[0].article
      }

    case ARTICLE_PAGE_UNLOADED:
      return {}

    case HOME_PAGE_LOADED:
      return {
        ...state,
        article: action.payload
      }

    default:
      return state
  }
}
