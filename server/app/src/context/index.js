import React, { createContext, useReducer } from 'react'
import intialState from './state'
import reducer from './reducers'

export const StateContext = createContext()
export const DispatchContext = createContext()

export const ContextStore = ({ children }) => {
	// console.log('intialState', intialState)
	const [state, dispatch] = useReducer(reducer, intialState)
	return (
		<>
			<DispatchContext.Provider value={dispatch}>
				<StateContext.Provider value={state}>{children}</StateContext.Provider>
			</DispatchContext.Provider>
		</>
	)
}
