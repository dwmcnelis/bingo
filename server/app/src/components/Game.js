import React, { useContext } from 'react'
import BingoBoard from './BingoBoard.js'
import Hopper from './Hopper.js'
import BallDisplay from './BallDisplay.js'
import { StateContext, DispatchContext } from '../context'

const Game = () => {
	const dispatch = useContext(DispatchContext)
	const state = useContext(StateContext)
	const ballCount = Object.values(state.balls).filter((ball) => !ball.called).length

	return (
		<div>
			<section className="separator"></section>
			<section id="board">
				<div className="row">
					<div className="w200">
						<Hopper balls={state.balls} />
						<BallDisplay balls={state.balls} />
					</div>
					<div className="col c100">
						<BingoBoard balls={state.balls} />
					</div>
				</div>
			</section>
			<section id="buttons">
				<div className="row">
					<div className="col c40">
						<button disabled={ballCount <= 0} onClick={(e) => dispatch({ type: 'balls.call' })}>Next</button>
					</div>
					<div className="col c60 text-right">
						<button onClick={(e) => dispatch({ type: 'balls.reset' })}>Reset</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Game
