import React, { useContext } from 'react'
import { StateContext, DispatchContext } from '../context'

const Pattern = () => {
  const dispatch = useContext(DispatchContext)
  const state = useContext(StateContext)
  const selected = state.patterns.selected
  const pattern = state.patterns.presets[selected]
  const colors = { 'B': 'indigo', 'I': 'ruby', 'N': 'kelly', 'G': 'alice', 'O': 'coral' }

  return (
    <div className="pattern">
      <div className="pattern-row">
        <div className="pattern-title">{pattern.length > 1 ? `${selected} (${pattern.length})` : selected}</div>
      </div >
      <div className="pattern-row">
        <div
          className={`pattern-prev${state.patterns.selected && state.patterns.ways > 1 ? '' : '--disabled'}`}
          onClick={() => dispatch({ type: 'patterns.previous' })}
        >◀</div>
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
        <div
          className={`pattern-next${state.patterns.selected && state.patterns.ways > 1 ? '' : '--disabled'}`}
          onClick={() => dispatch({ type: 'patterns.next' })}
        >▶</div>
      </div >
    </div >
  )

}

export default Pattern