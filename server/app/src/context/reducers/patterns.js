import intialState from '../state/patterns'

// dispatch({ type: 'patterns.reset' })
// dispatch({ type: 'patterns.select', payload: { selected: 'Blackout' } })
// dispatch({ type: 'patterns.next' })
// dispatch({ type: 'patterns.previous' })
// dispatch({ type: 'patterns.toggle', payload: { letter: 'B', row: 0 } })

export default (patterns, action) => {

  //console.log('reducer patterns: ', patterns, 'action: ', action)

  if (action.type === 'patterns.reset') {

    // console.log('do patterns.reset...')
    return intialState

  } else if (action.type === 'patterns.select') {

    // console.log('do patterns.select...')
    const { selected } = action.payload
    if (Object.keys(patterns.presets).includes(selected)) {

      const pattern = patterns.presets[selected]
      return {
        ...patterns,
        selected: selected,
        ways: pattern.length,
        way: 0,
        current: pattern[0]
      }

    }

  } else if (action.type === 'patterns.next') {

    // console.log('do patterns.next...')
    const { selected, ways } = patterns
    let way = patterns.way
    if (selected && ways > 0) {
      way = (way + 1) % ways
      const pattern = patterns.presets[selected]
      return {
        ...patterns,
        way: way,
        current: pattern[way]
      }
    }

  } else if (action.type === 'patterns.previous') {

    // console.log('do patterns.previous...')
    const { selected, ways } = patterns
    let way = patterns.way
    if (selected && ways > 0) {
      way = way - 1
      if (way < 0) {
        way = ways - 1
      }
      const pattern = patterns.presets[selected]
      return {
        ...patterns,
        way: way,
        current: pattern[way]
      }
    }

  } else if (action.type === 'patterns.toggle') {

    // console.log('do patterns.toggle...')
    const { letter, row } = action.payload
    if (patterns.selected === 'Custom') {
      const current = patterns.current
      current[letter][row] = !(current[letter][row])

      return {
        ...patterns,
        current: current
      }

    }

  }

  return patterns || intialState

}
