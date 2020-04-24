import intialState from '../state/packs'

// dispatch({ type: 'packs.reset' })
// dispatch({ type: 'packs.title', payload: { title: 'Bingo' } })
// dispatch({ type: 'packs.lessGames' })
// dispatch({ type: 'packs.moreGames' })
// dispatch({ type: 'packs.group', payload: { group: 'Smith' } })
// dispatch({ type: 'packs.addGroup' })
// dispatch({ type: 'packs.lessGames' })}
// dispatch({ type: 'packs.moreGames' })
// dispatch({ type: 'packs.lessPlayers', payload: {id: id} })
// dispatch({ type: 'packs.morePlayers', payload: {id: id} })
// dispatch({ type: 'packs.toggleDoubleSided', payload: {id: id} })
// dispatch({ type: 'packs.removeGroup', payload: {id: id} })

export default (packs, action) => {

	// console.log('reducer packs: ', packs, 'action: ', action)

	if (action.type === 'packs.reset') {

		// console.log('do packs.reset...')
		return {
			...intialState,
			groups: []
		}

	} else if (action.type === 'packs.title') {

		// console.log('do packs.title...')
		const { title } = action.payload
		return {
			...packs,
			title: title
		}

	} else if (action.type === 'packs.lessGames') {

		// console.log('do packs.lessGames...')
		let games = packs.games
		games = games - 1
		if (games <= 1) {
			games = 1
		}
		return {
			...packs,
			games: games
		}

	} else if (action.type === 'packs.moreGames') {

		// console.log('do packs.moreGames...')
		let games = packs.games
		games = games + 1
		if (games > packs.maxGames) {
			games = packs.maxGames
		}
		return {
			...packs,
			games: games
		}

	} else if (action.type === 'packs.lessPer') {

		// console.log('do packs.lessPer...')
		let per = packs.per
		if (per === 6) {
			per = 4
		} else if (per === 4) {
			per = 2
		} else if (per === 2) {
			per = 1
		}
		return {
			...packs,
			per: per
		}

	} else if (action.type === 'packs.morePer') {

		// console.log('do packs.morePer...')
		let per = packs.per
		if (per === 1) {
			per = 2
		} else if (per === 2) {
			per = 4
		} else if (per === 4) {
			per = 6
		}
		return {
			...packs,
			per: per
		}

	} else if (action.type === 'packs.group') {

		// console.log('do packs.group...')
		const { group } = action.payload
		return {
			...packs,
			group: group
		}

	} else if (action.type === 'packs.addGroup') {

		// console.log('do packs.addGroup...')
		let { id, groups, group } = packs
		id = id + 1
		groups.push({ id: id, name: group, players: 4, doublesided: false })
		group = ''
		return {
			...packs,
			id: id,
			group: group,
			groups: groups
		}

	} else if (action.type === 'packs.lessPlayers') {

		// console.log('do packs.lessPlayers...')
		const { id } = action.payload
		let { groups } = packs
		return {
			...packs,
			groups: groups.map((group) => {
				if (group.id === id) {
					group.players = group.players - 1
					if (group.players <= 1) {
						group.players = 1
					}
				}
				return group
			})
		}

	} else if (action.type === 'packs.morePlayers') {

		// console.log('do packs.morePlayers...')
		const { id } = action.payload
		let { groups } = packs
		return {
			...packs,
			groups: groups.map((group) => {
				if (group.id === id) {
					group.players = group.players + 1
					if (group.players > packs.maxPlayers) {
						group.players = packs.maxPlayers
					}
				}
				return group
			})
		}

	} else if (action.type === 'packs.toggleDoubleSided') {

		// console.log('do packs.toggleDoubleSided...')
		const { id } = action.payload
		let { groups } = packs
		return {
			...packs,
			groups: groups.map((group) => {
				if (group.id === id) {
					group.doublesided = !group.doublesided
				}
				return group
			})
		}

	} else if (action.type === 'packs.removeGroup') {

		// console.log('do packs.removeGroup...')
		const { id } = action.payload
		let { groups } = packs
		return {
			...packs,
			groups: groups.filter((group) => group.id !== id)
		}

	}

	return packs || intialState

}
