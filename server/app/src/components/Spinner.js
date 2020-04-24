import React from 'react'

const Spinner = ({ value, less, more }) => {
  return (
    <span className="spinner-container noselect">
      <span
        className="spinner-left noselect"
        onClick={() => {
          less()
        }}
      >
        -
				</span>
      <span className="spinner-text noselect">{value}</span>
      <span
        className="spinner-right noselect"
        onClick={() => {
          more()
        }}
      >
        +
				</span>
    </span>
  )
}

export default Spinner