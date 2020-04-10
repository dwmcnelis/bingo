import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import { cards } from './routes'
import { logger } from './lib'

const app = new Koa()
const PORT = process.env.PORT || 3000
app.use(bodyParser())

logger.info(`Mount cards on /api/cards`)
app.use(cards.routes())

const server = app.listen(PORT, () => {
  logger.info(`Listening on http://localhost:${PORT}`)
})
