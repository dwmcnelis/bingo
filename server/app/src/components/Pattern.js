import React from 'react'

class Menu extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: null
		}
	}

	handleClick(m, index) {
		this.setState({ selected: index })
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(m)
		}
	}

	render() {
		var self = this

		let list = this.props.options.map(function (m, index) {
			const className = self.state.selected === index ? 'selected' : ''
			return (
				<li
					className={'menuitem ' + className}
					key={index}
					onClick={self.handleClick.bind(self, m, index)}
					data={m.value}
				>
					{m.label}
				</li>
			)
		})

		return <ul className={'menu ' + this.props.className}>{list}</ul>
	}
}

class Pattern extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: null,
			previous: null,
			ways: 0,
			offset: 0,
			pattern: {
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false]
			},
			presets: {
				Regular: [
					{
						B: [true, true, true, true, true],
						I: [false, false, false, false, false],
						N: [false, false, false, false, false],
						G: [false, false, false, false, false],
						O: [false, false, false, false, false]
					},
					{
						B: [false, false, false, false, false],
						I: [true, true, true, true, true],
						N: [false, false, false, false, false],
						G: [false, false, false, false, false],
						O: [false, false, false, false, false]
					},
					{
						B: [false, false, false, false, false],
						I: [false, false, false, false, false],
						N: [true, true, true, true, true],
						G: [false, false, false, false, false],
						O: [false, false, false, false, false]
					},
					{
						B: [false, false, false, false, false],
						I: [false, false, false, false, false],
						N: [false, false, false, false, false],
						G: [true, true, true, true, true],
						O: [false, false, false, false, false]
					},
					{
						B: [false, false, false, false, false],
						I: [false, false, false, false, false],
						N: [false, false, false, false, false],
						G: [false, false, false, false, false],
						O: [true, true, true, true, true]
					},
					{
						B: [true, false, false, false, false],
						I: [true, false, false, false, false],
						N: [true, false, false, false, false],
						G: [true, false, false, false, false],
						O: [true, false, false, false, false]
					},
					{
						B: [false, true, false, false, false],
						I: [false, true, false, false, false],
						N: [false, true, false, false, false],
						G: [false, true, false, false, false],
						O: [false, true, false, false, false]
					},
					{
						B: [false, false, true, false, false],
						I: [false, false, true, false, false],
						N: [false, false, true, false, false],
						G: [false, false, true, false, false],
						O: [false, false, true, false, false]
					},
					{
						B: [false, false, false, true, false],
						I: [false, false, false, true, false],
						N: [false, false, false, true, false],
						G: [false, false, false, true, false],
						O: [false, false, false, true, false]
					},
					{
						B: [false, false, false, false, true],
						I: [false, false, false, false, true],
						N: [false, false, false, false, true],
						G: [false, false, false, false, true],
						O: [false, false, false, false, true]
					},
					{
						B: [true, false, false, false, false],
						I: [false, true, false, false, false],
						N: [false, false, true, false, false],
						G: [false, false, false, true, false],
						O: [false, false, false, false, true]
					},
					{
						B: [false, false, false, false, true],
						I: [false, false, false, true, false],
						N: [false, false, true, false, false],
						G: [false, true, false, false, false],
						O: [true, false, false, false, false]
					}
				],
				'Regular or 4 Corners': [
					{
						B: [true, true, true, true, true],
						I: [false, false, false, false, false],
						N: [false, false, false, false, false],
						G: [false, false, false, false, false],
						O: [false, false, false, false, false]
					},
					{
						B: [false, false, false, false, false],
						I: [true, true, true, true, true],
						N: [false, false, false, false, false],
						G: [false, false, false, false, false],
						O: [false, false, false, false, false]
					},
					{
						B: [false, false, false, false, false],
						I: [false, false, false, false, false],
						N: [true, true, true, true, true],
						G: [false, false, false, false, false],
						O: [false, false, false, false, false]
					},
					{
						B: [false, false, false, false, false],
						I: [false, false, false, false, false],
						N: [false, false, false, false, false],
						G: [true, true, true, true, true],
						O: [false, false, false, false, false]
					},
					{
						B: [false, false, false, false, false],
						I: [false, false, false, false, false],
						N: [false, false, false, false, false],
						G: [false, false, false, false, false],
						O: [true, true, true, true, true]
					},
					{
						B: [true, false, false, false, false],
						I: [true, false, false, false, false],
						N: [true, false, false, false, false],
						G: [true, false, false, false, false],
						O: [true, false, false, false, false]
					},
					{
						B: [false, true, false, false, false],
						I: [false, true, false, false, false],
						N: [false, true, false, false, false],
						G: [false, true, false, false, false],
						O: [false, true, false, false, false]
					},
					{
						B: [false, false, true, false, false],
						I: [false, false, true, false, false],
						N: [false, false, true, false, false],
						G: [false, false, true, false, false],
						O: [false, false, true, false, false]
					},
					{
						B: [false, false, false, true, false],
						I: [false, false, false, true, false],
						N: [false, false, false, true, false],
						G: [false, false, false, true, false],
						O: [false, false, false, true, false]
					},
					{
						B: [false, false, false, false, true],
						I: [false, false, false, false, true],
						N: [false, false, false, false, true],
						G: [false, false, false, false, true],
						O: [false, false, false, false, true]
					},
					{
						B: [true, false, false, false, false],
						I: [false, true, false, false, false],
						N: [false, false, true, false, false],
						G: [false, false, false, true, false],
						O: [false, false, false, false, true]
					},
					{
						B: [false, false, false, false, true],
						I: [false, false, false, true, false],
						N: [false, false, true, false, false],
						G: [false, true, false, false, false],
						O: [true, false, false, false, false]
					},
					{
						B: [true, false, false, false, true],
						I: [false, false, false, false, false],
						N: [false, false, false, false, false],
						G: [false, false, false, false, false],
						O: [true, false, false, false, true]
					}
				],
				Horizontal: [
					{
						B: [true, false, false, false, false],
						I: [true, false, false, false, false],
						N: [true, false, false, false, false],
						G: [true, false, false, false, false],
						O: [true, false, false, false, false]
					},
					{
						B: [false, true, false, false, false],
						I: [false, true, false, false, false],
						N: [false, true, false, false, false],
						G: [false, true, false, false, false],
						O: [false, true, false, false, false]
					},
					{
						B: [false, false, true, false, false],
						I: [false, false, true, false, false],
						N: [false, false, true, false, false],
						G: [false, false, true, false, false],
						O: [false, false, true, false, false]
					},
					{
						B: [false, false, false, true, false],
						I: [false, false, false, true, false],
						N: [false, false, false, true, false],
						G: [false, false, false, true, false],
						O: [false, false, false, true, false]
					},
					{
						B: [false, false, false, false, true],
						I: [false, false, false, false, true],
						N: [false, false, false, false, true],
						G: [false, false, false, false, true],
						O: [false, false, false, false, true]
					}
				],
				Vertical: [
					{
						B: [true, true, true, true, true],
						I: [false, false, false, false, false],
						N: [false, false, false, false, false],
						G: [false, false, false, false, false],
						O: [false, false, false, false, false]
					},
					{
						B: [false, false, false, false, false],
						I: [true, true, true, true, true],
						N: [false, false, false, false, false],
						G: [false, false, false, false, false],
						O: [false, false, false, false, false]
					},
					{
						B: [false, false, false, false, false],
						I: [false, false, false, false, false],
						N: [true, true, true, true, true],
						G: [false, false, false, false, false],
						O: [false, false, false, false, false]
					},
					{
						B: [false, false, false, false, false],
						I: [false, false, false, false, false],
						N: [false, false, false, false, false],
						G: [true, true, true, true, true],
						O: [false, false, false, false, false]
					},
					{
						B: [false, false, false, false, false],
						I: [false, false, false, false, false],
						N: [false, false, false, false, false],
						G: [false, false, false, false, false],
						O: [true, true, true, true, true]
					}
				],
				'Top or Bottom': [
					{
						B: [true, false, false, false, false],
						I: [true, false, false, false, false],
						N: [true, false, false, false, false],
						G: [true, false, false, false, false],
						O: [true, false, false, false, false]
					},
					{
						B: [false, false, false, false, true],
						I: [false, false, false, false, true],
						N: [false, false, false, false, true],
						G: [false, false, false, false, true],
						O: [false, false, false, false, true]
					}
				],
				'Letter A': [
					{
						B: [false, false, true, true, true],
						I: [false, true, true, false, false],
						N: [true, false, true, false, false],
						G: [false, true, true, false, false],
						O: [false, false, true, true, true]
					}
				],
				'Letter H': [
					{
						B: [true, true, true, true, true],
						I: [false, false, true, false, false],
						N: [false, false, true, false, false],
						G: [false, false, true, false, false],
						O: [true, true, true, true, true]
					}
				],
				'Letter I': [
					{
						B: [true, false, false, false, true],
						I: [true, false, false, false, true],
						N: [true, true, true, true, true],
						G: [true, false, false, false, true],
						O: [true, false, false, false, true]
					}
				],
				'Letter N': [
					{
						B: [true, true, true, true, true],
						I: [false, true, false, false, false],
						N: [false, false, true, false, false],
						G: [false, false, false, true, false],
						O: [true, true, true, true, true]
					}
				],
				'Letter X': [
					{
						B: [true, false, false, false, true],
						I: [false, true, false, true, false],
						N: [false, false, true, false, false],
						G: [false, true, false, true, false],
						O: [true, false, false, false, true]
					}
				],
				'Letter Z': [
					{
						B: [true, false, false, false, true],
						I: [true, false, false, true, true],
						N: [true, false, true, false, true],
						G: [true, true, false, false, true],
						O: [true, false, false, false, true]
					}
				],
				'Number 0': [
					{
						B: [false, true, true, true, false],
						I: [true, false, false, false, true],
						N: [true, false, false, false, true],
						G: [true, false, false, false, true],
						O: [false, true, true, true, false]
					}
				],
				'Number 13': [
					{
						B: [true, true, true, true, true],
						I: [false, false, false, false, false],
						N: [true, false, true, false, true],
						G: [true, false, true, false, true],
						O: [true, true, true, true, true]
					}
				],
				'Bow Tie': [
					{
						B: [true, true, true, true, true],
						I: [false, true, true, true, false],
						N: [false, false, true, false, false],
						G: [false, true, true, true, false],
						O: [true, true, true, true, true]
					}
				],
				'Layer Cake': [
					{
						B: [true, false, true, false, true],
						I: [true, false, true, false, true],
						N: [true, false, true, false, true],
						G: [true, false, true, false, true],
						O: [true, false, true, false, true]
					}
				],
				'Champagne Glass': [
					{
						B: [true, false, false, false, true],
						I: [false, true, false, false, true],
						N: [false, false, true, true, true],
						G: [false, true, false, false, true],
						O: [true, false, false, false, true]
					}
				],
				'Christmas Tree': [
					{
						B: [false, false, true, false, false],
						I: [false, true, true, false, false],
						N: [true, true, true, true, true],
						G: [false, true, true, false, false],
						O: [false, false, true, false, false]
					}
				],
				'Maple Leaf': [
					{
						B: [false, true, false, false, false],
						I: [false, false, true, true, false],
						N: [true, true, true, true, true],
						G: [false, false, true, true, false],
						O: [false, true, false, false, false]
					}
				],
				'Postage Stamps': [
					{
						B: [true, true, false, false, false],
						I: [true, true, false, false, false],
						N: [false, false, false, false, false],
						G: [false, false, false, true, true],
						O: [false, false, false, true, true]
					},
					{
						B: [false, false, false, true, true],
						I: [false, false, false, true, true],
						N: [false, false, false, false, false],
						G: [true, true, false, false, false],
						O: [true, true, false, false, false]
					}
				],
				Checkers: [
					{
						B: [true, false, true, false, true],
						I: [false, true, false, true, false],
						N: [true, false, true, false, true],
						G: [false, true, false, true, false],
						O: [true, false, true, false, true]
					}
				],
				Sputnik: [
					{
						B: [true, false, false, false, true],
						I: [false, true, true, true, false],
						N: [false, true, true, true, false],
						G: [false, true, true, true, false],
						O: [true, false, false, false, true]
					}
				],
				'Swatter & Fly': [
					{
						B: [true, true, true, false, false],
						I: [true, true, true, true, true],
						N: [true, true, true, false, false],
						G: [false, false, false, false, false],
						O: [false, false, false, false, true]
					}
				],
				Cactus: [
					{
						B: [true, true, true, false, false],
						I: [false, false, true, false, false],
						N: [true, true, true, true, true],
						G: [false, false, true, false, false],
						O: [true, true, true, false, false]
					}
				],
				'Dog Bone': [
					{
						B: [false, true, true, true, false],
						I: [false, false, true, false, false],
						N: [false, false, true, false, false],
						G: [false, false, true, false, false],
						O: [false, true, true, true, false]
					}
				],
				'Hollow Diamond': [
					{
						B: [false, false, true, false, false],
						I: [false, true, false, true, false],
						N: [true, false, false, false, true],
						G: [false, true, false, true, false],
						O: [false, false, true, false, false]
					}
				],
				'Full Diamond': [
					{
						B: [false, false, true, false, false],
						I: [false, true, true, true, false],
						N: [true, true, true, true, true],
						G: [false, true, true, true, false],
						O: [false, false, true, false, false]
					}
				],
				Blackout: [
					{
						B: [true, true, true, true, true],
						I: [true, true, true, true, true],
						N: [true, true, true, true, true],
						G: [true, true, true, true, true],
						O: [true, true, true, true, true]
					}
				],
				Brackets: [
					{
						B: [true, true, false, true, true],
						I: [true, false, false, false, true],
						N: [false, false, false, false, false],
						G: [true, false, false, false, true],
						O: [true, true, false, true, true]
					}
				],
				'Crazy H': [
					{
						B: [true, false, false, false, true],
						I: [true, false, false, false, true],
						N: [true, true, true, true, true],
						G: [true, false, false, false, true],
						O: [true, false, false, false, true]
					},
					{
						B: [true, true, true, true, true],
						I: [false, false, true, false, false],
						N: [false, false, true, false, false],
						G: [false, false, true, false, false],
						O: [true, true, true, true, true]
					}
				],
				'Crazy L': [
					{
						B: [false, false, false, false, true],
						I: [false, false, false, false, true],
						N: [false, false, false, false, true],
						G: [false, false, false, false, true],
						O: [true, true, true, true, true]
					},
					{
						B: [true, false, false, false, false],
						I: [true, false, false, false, false],
						N: [true, false, false, false, false],
						G: [true, false, false, false, false],
						O: [true, true, true, true, true]
					},
					{
						B: [true, true, true, true, true],
						I: [true, false, false, false, false],
						N: [true, false, false, false, false],
						G: [true, false, false, false, false],
						O: [true, false, false, false, false]
					},
					{
						B: [true, true, true, true, true],
						I: [false, false, false, false, true],
						N: [false, false, false, false, true],
						G: [false, false, false, false, true],
						O: [false, false, false, false, true]
					}
				],
				'Crazy T': [
					{
						B: [true, true, true, true, true],
						I: [false, false, true, false, false],
						N: [false, false, true, false, false],
						G: [false, false, true, false, false],
						O: [false, false, true, false, false]
					},
					{
						B: [false, false, false, false, true],
						I: [false, false, false, false, true],
						N: [true, true, true, true, true],
						G: [false, false, false, false, true],
						O: [false, false, false, false, true]
					},
					{
						B: [false, false, true, false, false],
						I: [false, false, true, false, false],
						N: [false, false, true, false, false],
						G: [false, false, true, false, false],
						O: [true, true, true, true, true]
					},
					{
						B: [true, false, false, false, false],
						I: [true, false, false, false, false],
						N: [true, true, true, true, true],
						G: [true, false, false, false, false],
						O: [true, false, false, false, false]
					}
				],
				'Crazy Arrow': [
					{
						B: [false, false, false, false, true],
						I: [false, false, false, true, false],
						N: [true, false, true, false, false],
						G: [true, true, false, false, false],
						O: [true, true, true, false, false]
					},
					{
						B: [true, true, true, false, false],
						I: [true, true, false, false, false],
						N: [true, false, true, false, false],
						G: [false, false, false, true, false],
						O: [false, false, false, false, true]
					},
					{
						B: [false, false, true, true, true],
						I: [false, false, false, true, true],
						N: [false, false, true, false, true],
						G: [false, true, false, false, false],
						O: [true, false, false, false, false]
					},
					{
						B: [true, false, false, false, false],
						I: [false, true, false, false, false],
						N: [false, false, true, false, true],
						G: [false, false, false, true, true],
						O: [false, false, true, true, true]
					}
				],
				'Crazy Kite': [
					{
						B: [false, false, false, true, true],
						I: [false, false, false, true, true],
						N: [false, false, true, false, false],
						G: [false, true, false, false, false],
						O: [true, false, false, false, false]
					},
					{
						B: [true, false, false, false, false],
						I: [false, true, false, false, false],
						N: [false, false, true, false, false],
						G: [false, false, false, true, true],
						O: [false, false, false, true, true]
					},
					{
						B: [false, false, false, false, true],
						I: [false, false, false, true, false],
						N: [false, false, true, false, false],
						G: [true, true, false, false, false],
						O: [true, true, false, false, false]
					},
					{
						B: [true, true, false, false, false],
						I: [true, true, false, false, false],
						N: [false, false, true, false, false],
						G: [false, false, false, true, false],
						O: [false, false, false, false, true]
					}
				],
				'Crazy Pyramid': [
					{
						B: [false, false, false, false, false],
						I: [false, false, false, false, false],
						N: [false, false, true, false, false],
						G: [false, true, true, true, false],
						O: [true, true, true, true, true]
					},
					{
						B: [true, false, false, false, false],
						I: [true, true, false, false, false],
						N: [true, true, true, false, false],
						G: [true, true, false, false, false],
						O: [true, false, false, false, false]
					},
					{
						B: [true, true, true, true, true],
						I: [false, true, true, true, false],
						N: [false, false, true, false, false],
						G: [false, false, false, false, false],
						O: [false, false, false, false, false]
					},
					{
						B: [false, false, false, false, true],
						I: [false, false, false, true, true],
						N: [false, false, true, true, true],
						G: [false, false, false, true, true],
						O: [false, false, false, false, true]
					}
				],
				'6 Pack': [
					{
						B: [true, true, false, false, false],
						I: [true, true, false, false, false],
						N: [true, true, false, false, false],
						G: [false, false, false, false, false],
						O: [false, false, false, false, false]
					}
				],
				'8 Pack': [
					{
						B: [false, false, false, true, true],
						I: [false, false, false, true, true],
						N: [false, false, false, true, true],
						G: [false, false, false, true, true],
						O: [false, false, false, false, false]
					}
				],
				'9 Pack': [
					{
						B: [false, false, false, false, false],
						I: [false, false, false, false, false],
						N: [false, false, true, true, true],
						G: [false, false, true, true, true],
						O: [false, false, true, true, true]
					}
				],
				'Small Frame': [
					{
						B: [false, false, false, false, false],
						I: [false, true, true, true, false],
						N: [false, true, false, true, false],
						G: [false, true, true, true, false],
						O: [false, false, false, false, false]
					}
				],
				'Large Frame': [
					{
						B: [true, true, true, true, true],
						I: [true, false, false, false, true],
						N: [true, false, false, false, true],
						G: [true, false, false, false, true],
						O: [true, true, true, true, true]
					}
				],
				Custom: [
					{
						B: [false, false, false, false, false],
						I: [false, false, false, false, false],
						N: [false, false, false, false, false],
						G: [false, false, false, false, false],
						O: [false, false, false, false, false]
					}
				]
				// 'Template': [
				// 	{
				// 		B: [false, false, false, false, false],
				// 		I: [false, false, false, false, false],
				// 		N: [false, false, false, false, false],
				// 		G: [false, false, false, false, false],
				// 		O: [false, false, false, false, false]
				// 	}
				// ],
			}
		}
	}

	choosePattern = (e) => {
		if (e === null) {
			this.setState({
				selected: null,
				pattern: {
					B: [false, false, false, false, false],
					I: [false, false, false, false, false],
					N: [false, false, false, false, false],
					G: [false, false, false, false, false],
					O: [false, false, false, false, false]
				}
			})
		} else {
			let selected = e.value
			let previous = this.state.previous
			let pattern = this.state.presets[e.value]
			let ways = pattern.length
			var offset
			if (selected === previous) {
				offset = (this.state.offset + 1) % ways
			} else {
				offset = 0
			}
			pattern = pattern[offset]
			previous = selected
			this.setState({
				selected: selected,
				previous: previous,
				ways: ways,
				offset: offset,
				pattern: pattern
			})
		}
	}

	/*
	 *  Update Pattern Function
	 *  As user clicks on slots for the pattern, update the pattern in the state
	 */
	updatePattern = (letter, index, slot) => {
		if (this.state.selected === 'Custom') {
			let pattern = this.state.pattern
			pattern[letter][index] = !slot
			this.setState({ selected: 'Custom', pattern: pattern })
		}
	}

	/*
	 *  Render Pattern Function
	 *  This will display a bingo card where the user can create their own pattern
	 *  Or choose a pattern from the searchable drop down
	 */
	render() {
		let pattern = this.state.pattern
		let patternArray = Object.entries(this.state.presets).reduce((reduced, [name, pattern]) => {
			reduced.push({ value: name, label: name })
			return reduced
		}, [])

		return (
			<div className="row ">
				<div className="col c20 padding align-left">
					<Menu
						name="patternmenu"
						className="patternmenu"
						value={this.state.selected}
						onChange={this.choosePattern}
						options={patternArray}
					/>
				</div>
				<div className="col c80 padding align-left">
					{Object.entries(pattern).map(([letter, column]) => (
						<div key={letter} className="pattern-col">
							<div className="pattern-letter">{letter}</div>
							{column.map((slot, index) => (
								<div
									key={letter + index}
									className={slot ? 'selected pattern-slot' : 'pattern-slot'}
									onClick={(e) => this.updatePattern(letter, index, slot)}
								>
									&nbsp;
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default Pattern
