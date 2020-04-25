import React, { useContext } from 'react'
import { StateContext, DispatchContext } from '../context'

const Card = () => {
  const dispatch = useContext(DispatchContext)
  const state = useContext(StateContext)
  const colors = { 'B': 'indigo', 'I': 'ruby', 'N': 'kelly', 'G': 'alice', 'O': 'coral' }

  return (
    <div className="card">
      <div className="card-row">
        <div className="card-title">{state.packs.title}</div>
      </div >
      <div className="card-row">
        {
          Object.entries(state.patterns.current).map(([letter, column]) => (
            <div key={letter} className="pattern-col">
              <div className={`pattern-letter ${colors[letter]}`}>{letter}</div>
              {column.map((slot, index) => (
                <div
                  key={letter + index}
                  className={`pattern-slot${slot ? ' selected' : ''}`}
                  onClick={() => dispatch({ type: 'patterns.toggle', payload: { letter, row: index } })}
                >
                  &nbsp;
                </div>
              ))}
            </div>
          ))
        }
      </div >
    </div >
  )

}

export default Card