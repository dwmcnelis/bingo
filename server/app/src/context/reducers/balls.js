export default (balls, action) => {
	console.log('reducer balls: ', balls, 'action: ', action)
	if (action.type == 'RESET_BALLS') {
		return Object.entries(balls).reduce((reduced, [key, value]) => {
			reduced[key] = { letter: value.letter, number: value.number, called: false, active: false }
			return reduced
		}, {})
	}
}
