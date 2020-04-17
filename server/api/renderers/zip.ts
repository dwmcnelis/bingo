import * as Archiver from 'archiver'
import { pdf } from '.'
import * as fs from 'fs'
import { logger } from '../../lib'
import { cards } from '../routes'

const zip = {
	render: (data) => {
		// logger.debug(`render zip: data: ${JSON.stringify(data)}`)
		const archive = Archiver('zip', {
			zlib: { level: 9 }
		})

		archive.on('warning', function (err) {
			if (err.code === 'ENOENT') {
				logger.error(`Error: ${err} ${err.stack}`)
			} else {
				throw err
			}
		})

		archive.on('error', function (err) {
			throw err
		})

		// {
		// 	games: 8,
		// 	per: 4,
		// 	groups: [
		// 		{
		// 			name: 'mcnelis', players: 4, doublesided: true, cards: [
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
		let { games, per, groups }: any = data
		games = games || 1
		per = per || 1
		groups = groups || []

		groups.forEach((group) => {
			archive.append(pdf.render({ games, per, groups: [group] }), { name: `${group.name}.pdf` })
		})

		archive.finalize()

		return archive
	}
}

export default zip
