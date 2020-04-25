import React from 'react'
import PatternMenu from './PatternMenu'
import Pattern from './Pattern'

const Patterns = () => {

	return (
		<div className="patterns">
			<div className="col c20 padding align-left">
				<PatternMenu />
			</div>
			<div className="col c80 pattern pattern-margin align-left">
				<Pattern />
			</div>
		</div>
	)

}

export default Patterns
