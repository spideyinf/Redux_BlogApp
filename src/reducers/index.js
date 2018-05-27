import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import PostsReducer from './PostsReducer'

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: FormReducer,
})

export default rootReducer
