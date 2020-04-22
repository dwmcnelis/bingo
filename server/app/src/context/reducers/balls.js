import intialState from '../state/balls'

export default (balls, action) => {

	//console.log('reducer balls: ', balls, 'action: ', action)
	if (action.type === 'balls.reset') {

		// console.log('do balls.call...')
		return intialState

	}
	else if (action.type === 'balls.call') {

		// console.log('do balls.call...')
		let uncalled = Object.values(balls).filter((ball) => !ball.called)
		if (uncalled.length > 0) {
			let randomball = uncalled[Math.floor(Math.random() * uncalled.length)]
			return Object.entries(balls).reduce((reduced, [key, value]) => {
				const ball = { letter: value.letter, number: value.number, called: value.called, active: false }
				if (ball.number === randomball.number) {
					ball.active = true
					ball.called = true
				}
				reduced[key] = ball
				return reduced
			}, {})

		} else {

			return balls

		}

	}
	return balls || intialState

}
