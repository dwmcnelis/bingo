import React from 'react'
import { Stage, Layer } from 'react-konva'
import HopperBall from './HopperBall'

const WIDTH = 250
const HEIGHT = 125
const RADIUS = 8
const SPEED = 30
const MARGIN = 12

const INDIGO = '#3c6478'
const RUBY = '#cd594a'
const KELLY = '#b5c689'
const ALICE = '#43abc9'
const CORAL = '#f58b4c'

const Hopper = ({ balls }) => {

  let colors = { 'B': INDIGO, 'I': RUBY, 'N': KELLY, 'G': ALICE, 'O': CORAL }

  return (
    <Stage className="hopper" width={WIDTH}
      height={HEIGHT}>
      <Layer>
        {
          Object.values(balls).filter((ball) => !ball.called).map((ball, index) => {
            return <HopperBall key={`ball-${index}`} radius={RADIUS} color={colors[ball.letter]} containerWidth={WIDTH} containerHeight={HEIGHT} margin={MARGIN} speed={SPEED} />
          })
        }
      </Layer>
    </Stage>
  )

}

export default Hopper
