import React, { PureComponent } from 'react'
import { Circle } from 'react-konva'

const randomCoord = (length, margin) => {
  return Math.floor(Math.random() * (length - margin - margin)) + margin
}

class HopperBall extends PureComponent {

  constructor(props) {

    super(props)

    this.state = {
      color: props.color || 'blue',
      radius: props.radius || 8,
      containerWidth: props.containerWidth || 250,
      containerHeight: props.containerHeight || 150,
      speed: props.speed || 30,
      x: randomCoord(props.containerWidth || 250, props.margin || 12),
      y: randomCoord(props.containerHeight || 150, props.margin || 12),
      direction: { x: 0, y: 0 }
    }

  }

  componentDidMount() {
    const x = Math.floor(Math.random() * this.props.speed)
    const y = this.props.speed - x
    this.setState({ direction: { x, y } })
    this.animate()
  }

  newCoord = (val, delta, max, min) => {
    let newVal = val + delta;
    let newDelta = delta

    if (newVal > max || newVal < min) {
      newDelta = -delta
    }

    if (newVal < min) {
      newVal = min - newVal
    }
    if (newVal > max) {
      newVal = newVal - (newVal - max)
    }

    return { val: newVal, delta: newDelta }
  };

  animate = () => {
    const { direction, x, y } = this.state

    if (direction.x !== 0 || direction.y !== 0) {
      const newX = this.newCoord(x, direction.x, this.props.containerWidth - this.props.margin, this.props.margin)
      const newY = this.newCoord(y, direction.y, this.props.containerHeight - this.props.margin, this.props.margin)

      this.setState({
        x: newX.val,
        y: newY.val,
        direction: {
          x: newX.delta,
          y: newY.delta
        }
      })
    }

    this.animationTimeout = setTimeout(this.animate, 50)
  };

  render() {

    const { x, y } = this.state

    return (
      <Circle
        ref={comp => {
          this.ball = comp;
        }}
        x={x}
        y={y}
        radius={this.props.radius}
        fill={this.props.color}
        shadowBlur={1}
      />
    );
  }

  componentWillUnmount() {
    clearTimeout(this.animationTimeout)
  }
}

export default HopperBall