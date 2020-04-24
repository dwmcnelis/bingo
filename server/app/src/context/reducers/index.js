import { combineReducers } from 'redux'
import packs from './packs'
import balls from './balls'
import patterns from './patterns'

export default combineReducers({
	packs,
	balls,
	patterns
})
