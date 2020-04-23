import React from 'react'

const BallHopper = ({ balls }) => {
	let ballCount = Object.values(balls).filter((ball) => ball.called).length
	//const colors = ["#3c6478", "#43abc9", "#cd594a", "#f58b4c", "#b5c689"];
	let colors = { B: 'indigo', I: 'ruby', N: 'kelly', G: 'alice', O: 'coral' }
	let bounces = { B: 'bounce0', I: 'bounce1', N: 'bounce2', G: 'bounce3', O: 'bounce4' }

	const w = 250
	const h = 110
	const m = 10
	for (let i = 0; i < 300; i++) {
		const left = Math.floor(Math.random() * 100)
		const top = Math.floor(Math.random() * 100)
		let x = Math.floor(Math.random() * w * m)
		let y = Math.floor(Math.random() * h * m)
		const duration = Math.floor((Math.random() + 1) * 250)
		console.log(`
    @keyframes bounce${i} {
      0% {
        transform: translate(0, 0);  
        animation-timing-function:ease-in-out;
       }
       100% {
        transform: translate(${x}%, ${y}%);
        animation-timing-function:ease-in-out
       }
    }
    .bounce${i} {
      top: ${top}%;
      left: ${left}%;
      animation-name: bounce${i};
      animation-duration: ${duration}ms;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-fill-mode: both;
    }`)
	}

	return (
		<div className="ball-hopper">
			{Object.values(balls).map((ball, index) => {
				// Style
				const factor = 0.95
				const background = colors[ball.letter] || 'black'
				const bounce = `bounce${Math.floor(Math.random() * 300)}` //bounces[ball.letter] || ''
				const left = Math.floor(Math.random() * 100) + '%'
				const top = Math.floor(Math.random() * 100) + '%'
				let to = {
					x: Math.random() * (index % 2 === 0 ? -23 : 23) * factor,
					y: Math.random() * 24 * factor
				}
				const width = '0.5em'
				const height = width
				const style = {
					background,
					left: left,
					top: top,
					width,
					height,
					transformScale: Math.random(),

					animationDuration: (Math.random() + 1) * 250,
					animationDirection: 'alternate',
					animationFillMode: 'both',
					animationPlayState: 'running',
					animationIterationCount: 'infinite',
					transitionTimingFunction: 'ease-in-out'
				}

				return !ball.called ? (
					<div key={`hopper-ball-${index}`} className={'hopper-ball ' + background + ' ' + bounce} style={style}></div>
				) : (
					<></>
				)
			})}
		</div>
	)
}

export default BallHopper
