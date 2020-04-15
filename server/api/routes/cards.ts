import * as Router from 'koa-router'
import { Card } from '../models'
import { json, pdf, zip } from '../renderers'
import { logger } from '../../lib'

const base_url = '/api/cards'
const router = new Router()

router.get(`${base_url}`, async (ctx) => {
	ctx.body = {
		status: 'success',
		message: 'hello, cards!'
	}
})

router.get(`${base_url}:suffix?`, async (ctx, next) => {
	interface GetParms {
		suffix: string
	}


	let { suffix }: GetParms = ctx.params
	suffix = suffix || '.json'
	// logger.debug('suffix', JSON.stringify(suffix))

	interface QueryFields {
		numbers: any[]
		packs?: number
		pages?: number
		per?: number
	}

	let query = ctx.request.query

	let card = new Card(query)
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
		let { packs, pages, per }: QueryFields = query
		packs = packs || 1
		pages = pages || 1
		per = per || 1

		let cards = card.generate(packs, pages, per)

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

router.post(`${base_url}:suffix?`, async (ctx, next) => {
	interface PostParms {
		suffix: string
	}

	let { suffix }: PostParms = ctx.params
	suffix = suffix || '.json'
	// logger.debug('suffix', JSON.stringify(suffix))

	interface PostFields {
		numbers: any[]
		packs?: number
		pages?: number
		per?: number
	}

	const body = ctx.request.body

	let card = new Card(body)
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
		let { packs, pages, per }: PostFields = body
		packs = packs || 1
		pages = pages || 1
		per = per || 1

		let cards = card.generate(packs, pages, per)

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
