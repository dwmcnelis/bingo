import React from 'react'

class BallDisplay extends React.Component {

	render() {
		let ballCount = Object.values(this.props.balls).filter((ball) => ball.called).length
		let currentBall = Object.values(this.props.balls).filter((ball) => ball.active)[0]
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
				<div id="ball" className={color + ' relative'}>
					<div id="ballcount">{ballCount}</div>
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
				<div id="ball" className="white relative">
					<div id="ballcount">{ballCount}</div>
					<div className="content">
						<span></span>
					</div>
				</div>
			)
		}
	}
}

export default BallDisplay
