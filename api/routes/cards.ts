import * as Router from 'koa-router'
import { Card } from '../models'
import { json, pdf } from '../renderers'
import logger from '../lib/logger'

const base_url = '/api/cards'
const router = new Router()

router.get(`${base_url}`, async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, cards!'
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
    numbers: any[],
    files?: number
    pages?: number
    per?: number
  }

  const body = ctx.request.body

  let card = new Card(body)
  // card.debug()

  const validate = card.validate()
  if (!validate.valid) {
    validate.errors.forEach((error) => logger.error(`Validation Error: ${error}`))
    ctx.status = 400
    ctx.body = {
      status: 'error',
      message: validate.errors
    }
  }
  else {

    let { files, pages, per }: PostFields = body
    files = files || 1
    pages = pages || 1
    per = per || 1

    let cards = card.generate(files, pages, per)

    try {

      if (suffix === '.json') {
        json.render(cards, ctx)
      }
      else if (suffix === '.pdf') {
        pdf.render(cards, ctx)
      }

    } catch (err) {
      logger.error(`Error: ${err} ${err.stack}`)
    }

  }

})

export default router