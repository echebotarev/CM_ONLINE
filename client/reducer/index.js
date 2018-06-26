import { combineReducers } from 'redux'
import buttons from './buttons'
import templates from './templates'
import editor from './editor'
import isAuthenticate from './isAuthenticate'
import {routerReducer as router} from 'react-router-redux'

export default combineReducers({
	buttons, templates, isAuthenticate, editor, router
})