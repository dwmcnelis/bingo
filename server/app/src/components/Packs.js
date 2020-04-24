import React, { useContext } from 'react'
import { StateContext, DispatchContext } from '../context'

const Packs = () => {
	const dispatch = useContext(DispatchContext)
	const state = useContext(StateContext)
	const length = 3

	return (
		<>
			<section id="packs">
				<div className="row">
					<div className="col c40">Label</div>
					<div className="col c60">Input</div>
				</div>
			</section>
			<section id="buttons">
				<div className="row">
					<div className="col c40">
						<button disabled={length <= 0} onClick={(e) => dispatch({ type: 'packs.xxx' })}>
							Download
						</button>
					</div>
					<div className="col c60 text-right">
						<button onClick={(e) => dispatch({ type: 'packs.xxx' })}>Reset</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default Packs
