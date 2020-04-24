import React, { useContext } from 'react'
import Spinner from './Spinner'
import { StateContext, DispatchContext } from '../context'

const Group = ({ group }) => {
	const dispatch = useContext(DispatchContext)

	return (
		<li className="group noselect">
			<span className="group-name noselect">{group.name}</span>
			<span> | </span>
			<span className="spinner-container noselect">
				<span
					className="spinner-left noselect"
					onClick={() => dispatch({ type: 'packs.lessPlayers', payload: { id: group.id } })}
				>
					-
				</span>
				<span className="spinner-text noselect">{group.players}</span>
				<span
					className="spinner-right noselect"
					onClick={() => dispatch({ type: 'packs.morePlayers', payload: { id: group.id } })}
				>
					+
				</span>
				<span className="spinner-text noselect"> (players)</span>
				<span> | </span>
				<span
					className={group.doublesided ? 'checked noselect' : 'unchecked noselect'}
					onClick={() => dispatch({ type: 'packs.toggleDoubleSided', payload: { id: group.id } })}
				>
					✔
				</span>
				<span
					className="group-remove noselect"
					onClick={() => dispatch({ type: 'packs.removeGroup', payload: { id: group.id } })}
				>
					X
				</span><span> (double sided)</span>
			</span>
		</li>
	)
}

const GroupList = ({ groups }) => {
	return (
		<ul className="groups">
			{
				groups.map((group) => (<Group group={group} key={group.id} />))
			}
		</ul>
	)
}

const downloadUrl = (url, filename) => {
	const a = document.createElement('a')
	a.href = url
	a.download = filename || 'download'
	a.click()
	return
}

const download = (packs) => {
	if (packs.groups.length > 0) {
		downloadUrl(
			`/api/cards.zip?title=${packs.title}&games=${packs.games}&per=${
			packs.per
			}&groups=${JSON.stringify(packs.groups)}`,
			'cards.pdf'
		)
	}
}

const Packs = () => {
	const dispatch = useContext(DispatchContext)
	const state = useContext(StateContext)

	return (
		<>
			<div className="form">

				<div className="form-row">
					<div className="col">
						<span className="form-label">Title</span>
						<input
							className="form-input"
							onChange={(e) => dispatch({ type: 'packs.title', payload: { title: e.target.value } })}
							value={state.packs.title}
							tabIndex={1}
						/>
					</div>
				</div>

				<div className="form-row">
					<div className="col">
						<span className="form-label">Games</span>
						<Spinner value={state.packs.games} less={(e) => dispatch({ type: 'packs.lessGames' })} more={(e) => dispatch({ type: 'packs.moreGames' })} />
					</div>

				</div>

				<div className="form-row">
					<div className="col">
						<span className="form-label">Cards per Page</span>
						<Spinner value={state.packs.per} less={(e) => dispatch({ type: 'packs.lessPer' })} more={(e) => dispatch({ type: 'packs.morePer' })} />
					</div>
				</div>

				<div className="form-row">
					<div className="col c100">
						<span className="form-label">Group</span>
						<input
							className="form-input"
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									dispatch({ type: 'packs.addGroup' })
								}
							}}
							onChange={(e) => dispatch({ type: 'packs.group', payload: { group: e.target.value } })}
							value={state.packs.group}
							tabIndex={1}
						/>
						<button
							className="group-input-button"
							onClick={() => dispatch({ type: 'packs.addGroup' })}
						>+</button>
						<GroupList
							groups={state.packs.groups}
							remove={(e) => { }}
							toggleDoubleSided={(e) => { }}
							lessPlayers={(e) => { }}
							morePlayers={(e) => { }}
						/>
					</div>
				</div>


				<div className="form-row">
					<div className="col c40">
						<button disabled={state.packs.groups.length <= 0} onClick={(e) => download(state.packs)}>
							Download
						</button>
					</div>
					<div className="col c60 text-right">
						<button onClick={(e) => dispatch({ type: 'packs.reset' })}>Reset</button>
					</div>
				</div>

			</div>
		</>
	)
}

export default Packs
