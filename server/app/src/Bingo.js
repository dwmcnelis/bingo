import React, { Component } from 'react'
import _ from 'underscore'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Cards from './components/Cards.js'
import BingoBoard from './components/BingoBoard.js'
import Pattern from './components/Pattern.js'
import BallDisplay from './components/BallDisplay.js'

class Bingo extends Component {
	/*
	 * Constructor
	 * State Variables
	 * balls: balls object, holds letter, number, called and active statues
	 */
	constructor(props) {
		super(props)
		this.state = {
			balls: {
				1: { letter: 'B', number: 1, called: false, active: false },
				2: { letter: 'B', number: 2, called: false, active: false },
				3: { letter: 'B', number: 3, called: false, active: false },
				4: { letter: 'B', number: 4, called: false, active: false },
				5: { letter: 'B', number: 5, called: false, active: false },
				6: { letter: 'B', number: 6, called: false, active: false },
				7: { letter: 'B', number: 7, called: false, active: false },
				8: { letter: 'B', number: 8, called: false, active: false },
				9: { letter: 'B', number: 9, called: false, active: false },
				10: { letter: 'B', number: 10, called: false, active: false },
				11: { letter: 'B', number: 11, called: false, active: false },
				12: { letter: 'B', number: 12, called: false, active: false },
				13: { letter: 'B', number: 13, called: false, active: false },
				14: { letter: 'B', number: 14, called: false, active: false },
				15: { letter: 'B', number: 15, called: false, active: false },
				16: { letter: 'I', number: 16, called: false, active: false },
				17: { letter: 'I', number: 17, called: false, active: false },
				18: { letter: 'I', number: 18, called: false, active: false },
				19: { letter: 'I', number: 19, called: false, active: false },
				20: { letter: 'I', number: 20, called: false, active: false },
				21: { letter: 'I', number: 21, called: false, active: false },
				22: { letter: 'I', number: 22, called: false, active: false },
				23: { letter: 'I', number: 23, called: false, active: false },
				24: { letter: 'I', number: 24, called: false, active: false },
				25: { letter: 'I', number: 25, called: false, active: false },
				26: { letter: 'I', number: 26, called: false, active: false },
				27: { letter: 'I', number: 27, called: false, active: false },
				28: { letter: 'I', number: 28, called: false, active: false },
				29: { letter: 'I', number: 29, called: false, active: false },
				30: { letter: 'I', number: 30, called: false, active: false },
				31: { letter: 'N', number: 31, called: false, active: false },
				32: { letter: 'N', number: 32, called: false, active: false },
				33: { letter: 'N', number: 33, called: false, active: false },
				34: { letter: 'N', number: 34, called: false, active: false },
				35: { letter: 'N', number: 35, called: false, active: false },
				36: { letter: 'N', number: 36, called: false, active: false },
				37: { letter: 'N', number: 37, called: false, active: false },
				38: { letter: 'N', number: 38, called: false, active: false },
				39: { letter: 'N', number: 39, called: false, active: false },
				40: { letter: 'N', number: 40, called: false, active: false },
				41: { letter: 'N', number: 41, called: false, active: false },
				42: { letter: 'N', number: 42, called: false, active: false },
				43: { letter: 'N', number: 43, called: false, active: false },
				44: { letter: 'N', number: 44, called: false, active: false },
				45: { letter: 'N', number: 45, called: false, active: false },
				46: { letter: 'G', number: 46, called: false, active: false },
				47: { letter: 'G', number: 47, called: false, active: false },
				48: { letter: 'G', number: 48, called: false, active: false },
				49: { letter: 'G', number: 49, called: false, active: false },
				50: { letter: 'G', number: 50, called: false, active: false },
				51: { letter: 'G', number: 51, called: false, active: false },
				52: { letter: 'G', number: 52, called: false, active: false },
				53: { letter: 'G', number: 53, called: false, active: false },
				54: { letter: 'G', number: 54, called: false, active: false },
				55: { letter: 'G', number: 55, called: false, active: false },
				56: { letter: 'G', number: 56, called: false, active: false },
				57: { letter: 'G', number: 57, called: false, active: false },
				58: { letter: 'G', number: 58, called: false, active: false },
				59: { letter: 'G', number: 59, called: false, active: false },
				60: { letter: 'G', number: 60, called: false, active: false },
				61: { letter: 'O', number: 61, called: false, active: false },
				62: { letter: 'O', number: 62, called: false, active: false },
				63: { letter: 'O', number: 63, called: false, active: false },
				64: { letter: 'O', number: 64, called: false, active: false },
				65: { letter: 'O', number: 65, called: false, active: false },
				66: { letter: 'O', number: 66, called: false, active: false },
				67: { letter: 'O', number: 67, called: false, active: false },
				68: { letter: 'O', number: 68, called: false, active: false },
				69: { letter: 'O', number: 69, called: false, active: false },
				70: { letter: 'O', number: 70, called: false, active: false },
				71: { letter: 'O', number: 71, called: false, active: false },
				72: { letter: 'O', number: 72, called: false, active: false },
				73: { letter: 'O', number: 73, called: false, active: false },
				74: { letter: 'O', number: 74, called: false, active: false },
				75: { letter: 'O', number: 75, called: false, active: false }
			}
		}
	}

	/*
	 *  Reset Game Function
	 *  Map out the original balls array and update
	 *  active and called statuses to false
	 */
	resetGame = () => {
		let resetBalls = this.state.balls
		_.map(resetBalls, (ball, index) => {
			resetBalls[index].active = false
			resetBalls[index].called = false
		})
		this.setState({ balls: resetBalls })
	}

	/*
	 *  Call Number Function
	 *  Will get all of the balls, find the active one and reset it
	 *  Grabs uncalled balls and determines if there are still uncalled balls
	 *  Otherwise, it'll generate a random ball, set it to called and active
	 */
	callNumber = () => {
		// get all balls
		let balls = this.state.balls
		// get active bll and reset
		let active = _.where(balls, { active: true })
		active.forEach((ball) => {
			ball.active = false
		})
		// get all uncalled balls
		let uncalled = _.where(balls, { called: false })
		if (uncalled.length === 0) {
			alert('All numbers called!')
		} else {
			// choose a random ball
			let randomball = uncalled[Math.floor(Math.random() * uncalled.length)]
			let newBall = balls[randomball.number]
			// set status of ball as called and active
			newBall.called = true
			newBall.active = true
			// call the new ball, first call it all together, then call each character individually
			this.setState({ balls: balls })
		}
	}

	/*
	 *  Render Method
	 *  Displays the bingo page
	 */
	render() {
		return (
			<div className="App">
				<header>
					<div className="row"></div>
				</header>
				<Tabs>

					<TabList>
						<Tab>Cards</Tab>
						<Tab>Pattern</Tab>
						<Tab>Game</Tab>
					</TabList>

					<TabPanel>
						<section className="padding">
							<Cards />
						</section>
					</TabPanel>

					<TabPanel>
						<section className="padding">
							<Pattern />
						</section>
					</TabPanel>

					<TabPanel>
						<section id="board">
							<div className="row flex">
								<div className="col c15 ballcol">
									<BallDisplay balls={this.state.balls} />
								</div>
								<div className="col c85">
									<BingoBoard balls={this.state.balls} />
								</div>
							</div>
						</section>

						<section id="buttons">
							<div className="row">
								<div className="col c40">
									<button onClick={this.callNumber}>
										Next
									</button>
								</div>
								<div className="col c60 text-right">
									<button onClick={this.resetGame}>Reset</button>
								</div>
							</div>
						</section>
					</TabPanel>
				</Tabs>
			</div >
		)
	}
}

export default Bingo
