import React from 'react'

const BallDisplay = ({ balls }) => {

	const ballCount = Object.values(balls).filter((ball) => ball.called).length
	const currentBall = Object.values(balls).filter((ball) => ball.active)[0]
	const colors = { 'B': 'indigo', 'I': 'ruby', 'N': 'kelly', 'G': 'alice', 'O': 'coral' }
	const color = currentBall ? colors[currentBall.letter] : 'white'

	return (
		<div id="ball" className={color + ' relative'}>
			<div id="ballcount">{ballCount}</div>
			<div className="content">
				{currentBall ? <span>{currentBall.letter}<br />{currentBall.number}</span> : <span></span>}
			</div>
		</div>
	)

}

export default BallDisplay
