import React, { useContext } from 'react'
import { StateContext, DispatchContext } from '../context'

const PatternMenu = () => {
  const dispatch = useContext(DispatchContext)
  const state = useContext(StateContext)
  let options = Object.entries(state.patterns.presets).reduce((reduced, [name, pattern]) => {
    reduced.push({ value: name, label: pattern.length > 1 ? `${name} (${pattern.length})` : name })
    return reduced
  }, [])

  return (
    <ul className="pattern-menu">
      {
        options.map((option, index) => (
          <li
            className={`pattern-menu-item${option.value === state.patterns.selected ? ' selected' : ''}`}
            key={`pattern-menu-item-${index}`}
            onClick={() => dispatch({ type: 'patterns.select', payload: { selected: option.value } })}
            data={option.value}
          >
            {option.label}
          </li>
        ))
      }
    </ul>
  )
}

export default PatternMenu
