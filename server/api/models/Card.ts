import logger from '../../lib/logger'

class Card {
	protected _title: string
	protected _numbers: any[]
	protected _chunks: any[]

	constructor(data: any = {}) {
		const { title, numbers } = data
		this._title = title || 'Bingo'
		this._numbers = numbers || [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59,
			60,
			61,
			62,
			63,
			64,
			65,
			66,
			67,
			68,
			69,
			70,
			71,
			72,
			73,
			74,
			75
		]
		this._chunks = []
		const total = this._numbers.length
		if (total >= 10 && total % 5 === 0) {
			let batch = Math.floor(total / 5)
			for (let i = 0, j = this._numbers.length; i < j; i += batch) {
				this._chunks.push(this._numbers.slice(i, i + batch))
			}
		}
	}

	_shuffle() {
		if (this._chunks.length === 5) {
			for (let i = 0; i < 5; i++) {
				let chunk = this._chunks[i]
				for (var j = chunk.length - 1; j > 0; j--) {
					var k = Math.floor(Math.random() * (j + 1))
					var temp = chunk[j]
					chunk[j] = chunk[k]
					chunk[k] = temp
				}
			}
		}
	}

	_card() {
		if (this._chunks.length === 5) {
			this._shuffle()
			let b = this._chunks[0].slice(0, 5)
			let i = this._chunks[1].slice(0, 5)
			let n = this._chunks[2].slice(0, 5)
			n[2] = 'Free'
			let g = this._chunks[3].slice(0, 5)
			let o = this._chunks[4].slice(0, 5)
			return {
				title: this._title,
				B: b,
				I: i,
				N: n,
				G: g,
				O: o,
			}
		}
	}

	validate() {
		let errors = []
		const total = this._numbers.length
		if (total < 10) {
			errors.push('Two few numbers')
		}
		if (total % 5 > 0) {
			errors.push('Numbers not disable by five')
		}
		if (errors.length) {
			return {
				valid: false,
				errors
			}
		}
		return {
			valid: true
		}
	}

	// {
	// 	games: 8,
	// 	per: 4,
	// 	title: 'Family Bingo',
	// 	groups: [
	// 		{ name: 'McNelis', players: 4, doublesided: true, id: 1 },
	// 		{ name: 'Micci-Smith', players: 5, doublesided: false, id: 2 }
	// 	]
	// }

	// {
	// 	games: 8,
	// 	per: 4,
	// 	groups: [
	// 		{
	// 			name: 'McNelis', players: 4, doublesided: true, cards: [
	// 				{
	// 					title: 'Bingo',
	// 					B: b,
	// 					I: i,
	// 					N: n,
	// 					G: g,
	// 					O: o,
	// 				}
	// 			]
	// 		}
	// 	]
	// }

	generate(games, per, groups) {
		let players = groups.reduce((reduced, group) => {
			reduced = reduced + group.players
			return reduced
		}, 0)
		let total = games * players

		let packs = []
		groups.forEach((group) => {
			let total = games * group.players
			let pack = { name: group.name, players: group.players, doublesided: group.doublesided, total }
			let cards = []
			for (let i = 0; i < total; i++) {
				cards.push(this._card())
			}
			pack['cards'] = cards
			packs.push(pack)
		})

		return {
			games,
			per,
			groups: packs
		}
	}

	debug() {
		logger.debug(`card: title: ${this._title}`)
		logger.debug(`card: numbers: ${JSON.stringify(this._numbers)}`)
		logger.debug(`card: chunks: ${JSON.stringify(this._chunks)}`)
	}
}

export default Card
