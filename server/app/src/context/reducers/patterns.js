import intialState from '../state/patterns'

export default (patterns, action) => {
  // console.log('patterns balls: ', patterns, 'action: ', action)
  return patterns || intialState
}
