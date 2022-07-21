import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import article from './redux/reducers/article'
import common from './redux/reducers/common'
import auth from './redux/reducers/auth'

const reducers = combineReducers({
    article,
    common,
    auth
})

const middleware = []

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
