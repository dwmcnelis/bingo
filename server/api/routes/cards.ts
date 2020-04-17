import * as Router from 'koa-router'
import { pick } from 'lodash'
import { Card } from '../models'
import { json, pdf, zip } from '../renderers'
import { logger } from '../../lib'

const base_url = '/api/cards'
const router = new Router()

router.get(`${base_url}:suffix?`, async (ctx, next) => {
	interface GetParms {
		suffix: string
	}

	let { suffix }: GetParms = ctx.params
	suffix = suffix || '.json'

	interface QueryFields {
		title?: string
		numbers?: string
		games?: string
		per?: string
		groups?: string
	}

	// /api/cards.pdf?title=Family Bingo&games=8&per=4&groups=[{"name":"McNelis","players":4,"doublesided":true,"id":1},{"name":"Micci-Smith","players":5,"doublesided":true,"id":2}]
	// console.log('query:', ctx.request.query)
	let query = Object.entries(ctx.request.query).reduce((reduced, [key, value]: [string, string]) => {
		if (['numbers', 'groups'].includes(key)) {
			reduced[key] = JSON.parse(value)
		} else if (['games', 'per'].includes(key)) {
			reduced[key] = parseInt(value, 10)
		} else {
			reduced[key] = value
		}
		return reduced
	}, {})
	// console.log('parsed query:', query)
	// {
	// 	title: 'Family Bingo',
	// 	groups: [
	// 		{ name: 'McNelis', players: 4, doublesided: true, id: 1 },
	// 		{ name: 'Micci-Smith', players: 5, doublesided: false, id: 2 }
	// 	],
	// 	games: 8,
	// 	per: 4,
	// }

	let card = new Card(pick(query, ['title', 'numbers']))
	// card.debug()

	const validate = card.validate()
	if (!validate.valid) {
		validate.errors.forEach((error) => logger.error(`Validation Error: ${error}`))
		ctx.type = 'application/json; charset=utf-8'
		ctx.status = 400
		ctx.body = {
			status: 'error',
			message: validate.errors
		}
	} else {
		let { games, per, groups, }: any = pick(query, ['games', 'per', 'groups'])
		games = games || 1
		per = per || 1
		groups = groups || [{ name: 'untitled', players: 1 }]

		let cards = card.generate(games, per, groups)

		try {
			if (suffix === '.json') {
				ctx.attachment('cards.json')
				ctx.type = 'application/json; charset=utf-8'
				ctx.status = 200
				ctx.body = json.render(cards)
			} else if (suffix === '.pdf') {
				ctx.attachment('cards.pdf')
				ctx.type = 'application/pdf'
				ctx.status = 200
				ctx.body = pdf.render(cards)
			} else if (suffix === '.zip') {
				ctx.attachment('cards.zip')
				ctx.type = 'application/zip'
				ctx.status = 200
				ctx.body = zip.render(cards)
			} else {
				ctx.type = 'application/json; charset=utf-8'
				ctx.status = 400
				ctx.body = {
					status: 'error',
					message: `Type ${suffix} unsupported`
				}
			}
		} catch (err) {
			logger.error(`Error: ${err} ${err.stack}`)
		}
	}
})

export default router
