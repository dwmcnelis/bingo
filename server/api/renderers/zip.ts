import * as Archiver from 'archiver'
import { pdf } from '.'
import * as fs from 'fs'
import { logger } from '../../lib'
import { cards } from '../routes'

const zip = {
	render: (data) => {
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

		data.forEach((file, i) => {
			archive.append(pdf.render([file]), { name: `cards${i + 1}.pdf` })
		})

		archive.finalize()

		return archive
	}
}

export default zip
