import intialState from '../state/packs'

export default (packs, action) => {
	//console.log('reducer packs: ', packs, 'action: ', action)
	if (action.type === 'packs.reset') {
		// console.log('do packs.reset...')
		return intialState
	} else if (action.type === 'packs.verb') {
		// console.log('do balls.verb...')
		return packs
	}

	return packs || intialState
}
