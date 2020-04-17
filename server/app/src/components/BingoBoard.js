import React from 'react'

class BingoBoard extends React.Component {
	render() {
		let balls = Object.values(this.props.balls)
		let rows = {
			B: balls.filter((ball) => ball.letter === 'B'),
			I: balls.filter((ball) => ball.letter === 'I'),
			N: balls.filter((ball) => ball.letter === 'N'),
			G: balls.filter((ball) => ball.letter === 'G'),
			O: balls.filter((ball) => ball.letter === 'O')
		}

		return (
			<div className="board">
				{Object.values(rows).map((row, letter) => (
					<div key={'row' + letter} className="board-row">
						<div key={letter} className="letter">
							{letter}
						</div>
						{Object.values(row).map((ball) => (
							<div
								key={ball.letter + ball.number}
								className={
									(ball.called && ball.active ? 'active ball' : ball.called ? 'called ball' : 'ball')
								}
							>
								{ball.number}
							</div>
						))}
					</div>
				))}
			</div>
		)
	}
}

export default BingoBoard
