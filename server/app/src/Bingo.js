import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Cards from './components/Cards.js'
import Patterns from './components/Patterns.js'
import Game from './components/Game.js'
import { ContextStore } from './context'

const Bingo = () => {
	return (
		<div className="App">
			<ContextStore>

				<header>
					<div className="row"></div>
				</header>

				<Tabs>

					<TabList>
						<Tab>Cards</Tab>
						<Tab>Patterns</Tab>
						<Tab>Game</Tab>
					</TabList>

					<TabPanel>
						<section className="padding">
							<Cards />
						</section>
					</TabPanel>

					<TabPanel>
						<Patterns />
					</TabPanel>

					<TabPanel>
						<Game />
					</TabPanel>
				</Tabs>

			</ContextStore>
		</div>
	)
}

export default Bingo
