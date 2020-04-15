import React from 'react'
import _ from 'underscore'

class BallDisplay extends React.Component {
	render() {
		let currentBall = _.where(this.props.balls, { active: true })[0]
		if (currentBall) {
			let color = 'white'
			switch (currentBall.letter) {
				case 'B':
					color = 'indigo'
					break
				case 'I':
					color = 'ruby'
					break
				case 'N':
					color = 'kelly'
					break
				case 'G':
					color = 'alice'
					break
				case 'O':
					color = 'coral'
					break
				default:
					break
			}
			return (
				<div id="ball" className={color + ' relative notranslate'}>
					<div id="ballcount">{_.where(this.props.balls, { called: true }).length}</div>
					<div className="content">
						<span>
							{currentBall.letter}
							<br />
							{currentBall.number}
						</span>
					</div>
				</div>
			)
		} else {
			return (
				<div id="ball" className="white relative notranslate">
					<div id="ballcount">{_.where(this.props.balls, { called: true }).length}</div>
					<div className="content">
						<span>{/* <img src={logo} alt="Lets Play Bingo Logo"/> */}</span>
					</div>
				</div>
			)
		}
	}
}

export default BallDisplay
