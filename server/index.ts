import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as serve from 'koa-static'
import * as mount from 'koa-mount'
import * as cors from '@koa/cors'
import { cards } from './api'
import { logger } from './lib'

const app = new Koa()
const PORT = process.env.PORT || 3000

app.use(bodyParser())
app.use(cors())

const root = new Koa()
logger.debug(`App at ${process.cwd() + '/server/app/build'}`)
root.use(serve(process.cwd() + '/server/app/build')) //serve the app build directory
logger.info(`Mount app on /`)
app.use(mount('/', root))
logger.info(`Mount card on /api/cards`)
app.use(cards.routes()).use(cards.allowedMethods())

app.listen(PORT, function () {
	logger.info(`Listening on http://localhost:${PORT}`)
})
