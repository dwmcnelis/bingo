import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Packs from './components/Packs.js'
import Patterns from './components/Patterns.js'
import Hopper from './components/Hopper.js'
import Card from './components/Card.js'
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
						<Tab>Packs</Tab>
						<Tab>Patterns</Tab>
						<Tab>Hopper</Tab>
						<Tab>Card</Tab>
					</TabList>

					<TabPanel>
						<section className="padding">
							<Packs />
						</section>
					</TabPanel>

					<TabPanel>
						<Patterns />
					</TabPanel>

					<TabPanel>
						<Hopper />
					</TabPanel>


					<TabPanel>
						<Card />
					</TabPanel>


				</Tabs>
			</ContextStore>
		</div>
	)
}

export default Bingo
