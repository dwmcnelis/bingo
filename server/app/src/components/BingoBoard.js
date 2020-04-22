import React from 'react'

const BingoBoard = ({ balls }) => {

	balls = Object.values(balls)
	let rows = {
		B: balls.filter((ball) => ball.letter === 'B'),
		I: balls.filter((ball) => ball.letter === 'I'),
		N: balls.filter((ball) => ball.letter === 'N'),
		G: balls.filter((ball) => ball.letter === 'G'),
		O: balls.filter((ball) => ball.letter === 'O')
	}

	return (
		<div className="board">
			{Object.keys(rows).map((letter) => (
				<div key={'row' + letter} className="board-row">
					<div key={letter} className="letter">
						{letter}
					</div>
					{Object.values(rows[letter]).map((ball) => (
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

export default BingoBoard
