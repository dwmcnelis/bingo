import * as PDFDocument from 'pdfkit'
import * as path from 'path'
import * as appRootDir from 'app-root-dir'
import { logger } from '../../lib'

interface LayoutOptions {
	per?: number
	pageLayout?: string
	pageWidth?: number
	pageHeight?: number
	marginTop?: number
	marginBottom?: number
	marginLeft?: number
	marginRight?: number
	marginCard?: number
	cardWidth?: number
	cardHeight?: number
	titleFontSize?: number
	headerFontSize?: number
	cellFontSize?: number
	footerFontSize?: number
}

interface ThemeOptions {
	customFonts?: any
	marksStrokeColor?: string
	cardStrokeColor?: string
	titleFontFamily?: string
	titlePadding?: number
	titleStrokeColor?: string
	titleFillColor?: string
	headerFontFamily?: string
	headerPadding?: number
	headerStrokeColor?: string
	headerFillColor?: string
	headerBorderColor?: string
	cellFontFamily?: string
	cellStrokeColor?: string
	cellFillColor?: string
	cellBorderColor?: string
	footerFontFamily?: string
	footerPadding?: number
	footerStrokeColor?: string
	footerFillColor?: string
}

interface MarksOptions {
	outline?: boolean
	cards?: boolean
}

interface TableOptions {
	x?: number
	y?: number
	width?: number
	height?: number
	headers?: string[]
	rows: string[][]
	columnSpacing?: number
	rowSpacing?: number
	onHeader?: () => any
	onRow?: (row: string[], i: number) => any
}

const points = 72
const eightHalf = 8.5 * points
const eleven = 11.0 * points


const themes = {
	default: {
		customFonts: {
			'OpenSans-Light': path.join(appRootDir.get(), 'fonts/OpenSans-Light.ttf'),
			'OpenSans-Regular': path.join(appRootDir.get(), 'fonts/OpenSans-Regular.ttf'),
			'OpenSans-Bold': path.join(appRootDir.get(), 'fonts/OpenSans-Bold.ttf'),
			'Roboto-Thin': path.join(appRootDir.get(), 'fonts/Roboto-Thin.ttf'),
			'Roboto-Light': path.join(appRootDir.get(), 'fonts/Roboto-Light.ttf'),
			'Roboto-Regular': path.join(appRootDir.get(), 'fonts/Roboto-Regular.ttf'),
			'Roboto-Bold': path.join(appRootDir.get(), 'fonts/Roboto-Bold.ttf')
		},
		marksStrokeColor: '#dddddd',
		cardStrokeColor: '#666666',
		titleFontFamily: 'OpenSans-Regular',
		titlePadding: 4,
		titleStrokeColor: 'black',
		titleFillColor: '#efefef',
		headerFontFamily: 'Roboto-Bold',
		headerPadding: 4,
		headerStrokeColor: 'white',
		headerFillColor: '#666666',
		headerBorderColor: '#666666',
		cellFontFamily: 'Roboto-Light',
		cellStrokeColor: 'black',
		cellFillColor: 'none',
		cellBorderColor: '#666666',
		footerFontFamily: 'Roboto-Regular',
		footerPadding: 2,
		footerStrokeColor: 'black',
		footerFillColor: '#efefef'
	}
}

const layouts = {
	1: {
		per: 1,
		pageLayout: 'landscape',
		pageWidth: eleven,
		pageHeight: eightHalf,
		marginTop: 0.5 * points,
		marginBottom: 0.5 * points,
		marginLeft: 0.5 * points,
		marginRight: 0.5 * points,
		marginCard: 0.5 * points,
		cardWidth: eleven - (0.5 * points + 0.5 * points),
		cardHeight: eightHalf - (0.5 * points + 0.5 * points),
		titleFontSize: 42,
		headerFontSize: 48,
		cellFontSize: 48,
		footerFontSize: 22
	},
	2: {
		per: 2,
		pageLayout: 'portrait',
		pageWidth: eightHalf,
		pageHeight: eleven,
		marginTop: 0.5 * points,
		marginBottom: 0.5 * points,
		marginLeft: 0.5 * points,
		marginRight: 0.5 * points,
		marginCard: 0.5 * points,
		cardWidth: eightHalf - (0.5 * points + 0.5 * points),
		cardHeight: (eleven - (0.5 * points + 0.5 * points + 0.5 * points)) / 2.0,
		titleFontSize: 26,
		headerFontSize: 32,
		cellFontSize: 32,
		footerFontSize: 16
	},
	4: {
		per: 4,
		pageLayout: 'landscape',
		pageWidth: eleven,
		pageHeight: eightHalf,
		marginTop: 0.5 * points,
		marginBottom: 0.5 * points,
		marginLeft: 0.5 * points,
		marginRight: 0.5 * points,
		marginCard: 0.5 * points,
		cardWidth: (eleven - (0.5 * points + 0.5 * points + 0.5 * points)) / 2.0,
		cardHeight: (eightHalf - (0.5 * points + 0.5 * points + 0.5 * points)) / 2.0,
		titleFontSize: 18,
		headerFontSize: 20,
		cellFontSize: 20,
		footerFontSize: 14
	},
	6: {
		per: 6,
		pageLayout: 'portrait',
		pageWidth: eightHalf,
		pageHeight: eleven,
		marginTop: 0.5 * points,
		marginBottom: 0.5 * points,
		marginLeft: 0.5 * points,
		marginRight: 0.5 * points,
		marginCard: 0.5 * points,
		cardWidth: (eightHalf - (0.5 * points + 0.5 * points + 0.5 * points)) / 2.0,
		cardHeight: (eleven - (0.5 * points + 0.5 * points + 0.5 * points + 0.5 * points)) / 3.0,
		titleFontSize: 18,
		headerFontSize: 16,
		cellFontSize: 16,
		footerFontSize: 12
	}
}


const fonts = (pdf, fonts) => {
	Object.entries(fonts).forEach(([name, path]) => {
		pdf.registerFont(name, path)
	})
}

const marks = (pdf, options: MarksOptions, layout: LayoutOptions, theme: ThemeOptions) => {
	let { outline, cards } = options
	let { per, pageLayout, pageWidth, pageHeight, marginTop, marginBottom, marginLeft, marginRight, marginCard, cardWidth, cardHeight, titleFontSize, headerFontSize, cellFontSize, footerFontSize } = layout
	let { marksStrokeColor, titleFontFamily, titlePadding, titleStrokeColor, headerFontFamily, headerPadding, headerStrokeColor, headerFillColor, headerBorderColor, cellFontFamily, cellStrokeColor, cellFillColor, cellBorderColor, footerFontFamily, footerPadding, footerStrokeColor } = theme
	let extra = 12

	pdf.font(theme.titleFontFamily).fontSize(titleFontSize)
	const titleHeight = pdf.heightOfString('A') + 2 * titlePadding + 2
	pdf.font(theme.headerFontFamily).fontSize(headerFontSize)
	let headerHeight = pdf.heightOfString('A') + 2 * headerPadding + 2
	pdf.font(theme.cellFontFamily).fontSize(cellFontSize)
	const cellHeight = pdf.heightOfString('A')
	pdf.font(theme.footerFontFamily).fontSize(footerFontSize)
	const footerHeight = pdf.heightOfString('A') + 2 * footerPadding + 2
	const contentHeight = cardHeight - titleHeight - footerHeight

	if (outline) {
		// top
		pdf
			.moveTo(marginLeft - extra, marginTop)
			.lineTo(pageWidth - marginRight + extra, marginTop)
			.lineWidth(1)
			.dash(2, { space: 4 })
			.stroke(marksStrokeColor)
			.undash()

		// right
		pdf
			.moveTo(pageWidth - marginRight, marginTop - extra)
			.lineTo(pageWidth - marginRight, pageHeight - marginBottom + extra)
			.lineWidth(1)
			.dash(2, { space: 4 })
			.stroke(marksStrokeColor)
			.undash()

		// bottom
		pdf
			.moveTo(pageWidth - marginRight + extra, pageHeight - marginBottom)
			.lineTo(marginLeft - extra, pageHeight - marginBottom)
			.lineWidth(1)
			.dash(2, { space: 4 })
			.stroke(marksStrokeColor)
			.undash()

		// left
		pdf
			.moveTo(marginLeft, pageHeight - marginBottom + extra)
			.lineTo(marginLeft, marginTop - extra)
			.lineWidth(1)
			.dash(2, { space: 4 })
			.stroke(marksStrokeColor)

		// center
		pdf
			.moveTo(pageWidth / 2.0, marginTop - extra)
			.lineTo(pageWidth / 2.0, pageHeight - marginBottom + extra)
			.lineWidth(1)
			.dash(2, { space: 4 })
			.stroke(marksStrokeColor)
			.undash()

		// middle
		pdf
			.moveTo(marginLeft - extra, pageHeight / 2.0)
			.lineTo(pageWidth - marginRight + extra, pageHeight / 2.0)
			.lineWidth(1)
			.dash(2, { space: 4 })
			.stroke(marksStrokeColor)
			.undash()
	}

	if (cards) {
		// cards
		for (let i = 0; i < per; i++) {
			let xm, ym
			if (per === 1) {
				xm = 0
				ym = 0
			} else if (per === 2) {
				xm = 0
				ym = i
			} else if (per === 4) {
				xm = (i % 2)
				ym = (Math.floor(i / 2) % 2)
			} else if (per === 6) {
				xm = (i % 2)
				ym = (Math.floor(i / 2) % 3)
			}
			const x1 = marginLeft + xm * cardWidth + xm * marginCard
			const y1 = marginTop + ym * cardHeight + ym * marginCard
			const x2 = x1 + cardWidth
			const y2 = y1 + cardHeight

			let columnWidth = cardWidth / 5

			let cellHeight = (cardHeight - titleHeight - footerHeight) / 6
			headerHeight = cellHeight

			// Card outline
			pdf
				.moveTo(x1, y1)
				.lineTo(x2, y1)
				.lineTo(x2, y2)
				.lineTo(x1, y2)
				.lineTo(x1, y1)
				.lineWidth(1)
				.dash(2, { space: 4 })
				.stroke(marksStrokeColor)
				.undash()

			// Title bottom
			pdf
				.moveTo(x1, y1 + titleHeight)
				.lineTo(x2, y1 + titleHeight)
				.dash(2, { space: 4 })
				.stroke(marksStrokeColor)
				.undash()

			// Header bottom
			pdf
				.moveTo(x1, y1 + titleHeight + headerHeight)
				.lineTo(x2, y1 + titleHeight + headerHeight)
				.dash(2, { space: 4 })
				.stroke(marksStrokeColor)
				.undash()

			// Footer top
			pdf
				.moveTo(x1, y2 - footerHeight)
				.lineTo(x2, y2 - footerHeight)
				.dash(2, { space: 4 })
				.stroke(marksStrokeColor)
				.undash()

			// Header verticals
			for (let j = 1; j < 5; j++) {
				pdf
					.moveTo(x1 + j * columnWidth, y1 + titleHeight)
					.lineTo(x1 + j * columnWidth, y1 + titleHeight + headerHeight)
					.dash(2, { space: 4 })
					.stroke(marksStrokeColor)
					.undash()
			}

			// Cell horizontals
			for (let j = 1; j < 5; j++) {
				pdf
					.moveTo(x1, y1 + titleHeight + headerHeight + j * cellHeight)
					.lineTo(x2, y1 + titleHeight + headerHeight + j * cellHeight)
					.dash(2, { space: 4 })
					.stroke(marksStrokeColor)
					.undash()
			}

			// Cell verticals
			for (let j = 1; j < 5; j++) {
				pdf
					.moveTo(x1 + j * columnWidth, y1 + titleHeight + headerHeight)
					.lineTo(x1 + j * columnWidth, y2 - footerHeight)
					.dash(2, { space: 4 })
					.stroke(marksStrokeColor)
					.undash()
			}

			const bingo = ['B', 'I', 'N', 'G', 'O']

			// Header labels
			pdf
				.font(headerFontFamily)
				.fontSize(headerFontSize)

			for (let j = 0; j < 5; j++) {
				let label = bingo[j], x = x1 + j * columnWidth, y = y1 + titleHeight, h = headerHeight, w = columnWidth
				let options = { width: w, align: 'center' }
				pdf
					.rect(x, y, w, h).fill(headerFillColor)
					.fillColor(headerStrokeColor)
					.text(label, x, y + 0.5 * (h - pdf.heightOfString(label, options)), options)
			}

			// Cell labels
			pdf
				.font(cellFontFamily)
				.fontSize(cellFontSize)
			let fontHeight = pdf.heightOfString('X')
			let offset = 0.5 * (cellHeight - fontHeight)

			for (let j = 0; j < 5; j++) {
				let yr = y1 + titleHeight + headerHeight + j * cellHeight
				for (let k = 0; k < 5; k++) {
					let label = `${bingo[k]}${j + 1}`, x = x1 + k * columnWidth, y = yr, h = cellHeight, w = columnWidth
					let options = { width: w, align: 'center' }
					pdf
						.rect(x, y, w, h)
						.fill(cellFillColor)
						.fillColor(cellStrokeColor)
						.text(label, x, y + offset, options)
				}
			}
		}

	}
}

const cards = (pdf, games, per, groups, layout: LayoutOptions, theme: ThemeOptions) => {
	let { pageLayout, pageWidth, pageHeight, marginTop, marginBottom, marginLeft, marginRight, marginCard, cardWidth, cardHeight, titleFontSize, headerFontSize, cellFontSize, footerFontSize } = layout
	let { cardStrokeColor, titleFontFamily, titlePadding, titleStrokeColor, titleFillColor, headerFontFamily, headerPadding, headerStrokeColor, headerFillColor, headerBorderColor, cellFontFamily, cellStrokeColor, cellFillColor, cellBorderColor, footerFontFamily, footerPadding, footerStrokeColor, footerFillColor } = theme

	pdf.font(theme.titleFontFamily).fontSize(titleFontSize)
	const titleHeight = pdf.heightOfString('A') + 2 * titlePadding + 2
	pdf.font(theme.headerFontFamily).fontSize(headerFontSize)
	let headerHeight = pdf.heightOfString('A') + 2 * headerPadding + 2
	pdf.font(theme.cellFontFamily).fontSize(cellFontSize)
	const cellHeight = pdf.heightOfString('A')
	pdf.font(theme.footerFontFamily).fontSize(footerFontSize)
	const footerHeight = pdf.heightOfString('A') + 2 * footerPadding + 2
	const contentHeight = cardHeight - titleHeight - footerHeight

	groups.forEach((group, igroup) => {

		const { name, players, total, cards } = group

		let ipage = 0
		for (let iplayer = 0; iplayer < players; iplayer += 1) {

			ipage = 1
			for (let igame = 0; igame < games; igame++) {

				const icard = iplayer * games + igame

				const card = cards[icard]

				const slot = igame % per

				let xm, ym
				if (per === 1) {
					xm = 0
					ym = 0
				} else if (per === 2) {
					xm = 0
					ym = slot
				} else if (per === 4) {
					xm = (slot % 2)
					ym = (Math.floor(slot / 2) % 2)
				} else if (per === 6) {
					xm = (slot % 2)
					ym = (Math.floor(slot / 2) % 3)
				}
				const x1 = marginLeft + xm * cardWidth + xm * marginCard
				const y1 = marginTop + ym * cardHeight + ym * marginCard
				const x2 = x1 + cardWidth
				const y2 = y1 + cardHeight

				let columnWidth = cardWidth / 5

				let cellHeight = (cardHeight - titleHeight - footerHeight) / 6
				headerHeight = cellHeight

				// Card outline
				pdf
					.moveTo(x1, y1)
					.lineTo(x2, y1)
					.lineTo(x2, y2)
					.lineTo(x1, y2)
					.lineTo(x1, y1)
					.lineWidth(1)
					.stroke(cardStrokeColor)

				// Title bottom
				pdf
					.moveTo(x1, y1 + titleHeight)
					.lineTo(x2, y1 + titleHeight)
					.stroke(cardStrokeColor)

				// Header bottom
				pdf
					.moveTo(x1, y1 + titleHeight + headerHeight)
					.lineTo(x2, y1 + titleHeight + headerHeight)
					.stroke(cardStrokeColor)

				// Footer top
				pdf
					.moveTo(x1, y2 - footerHeight)
					.lineTo(x2, y2 - footerHeight)
					.stroke(cardStrokeColor)

				// Header verticals
				for (let j = 1; j < 5; j++) {
					pdf
						.moveTo(x1 + j * columnWidth, y1 + titleHeight)
						.lineTo(x1 + j * columnWidth, y1 + titleHeight + headerHeight)
						.stroke(headerBorderColor)
				}

				// Cell horizontals
				for (let j = 1; j < 5; j++) {
					pdf
						.moveTo(x1, y1 + titleHeight + headerHeight + j * cellHeight)
						.lineTo(x2, y1 + titleHeight + headerHeight + j * cellHeight)
						.stroke(cardStrokeColor)
				}

				// Cell verticals
				for (let j = 1; j < 5; j++) {
					pdf
						.moveTo(x1 + j * columnWidth, y1 + titleHeight + headerHeight)
						.lineTo(x1 + j * columnWidth, y2 - footerHeight)
						.stroke(cardStrokeColor)
				}

				// Title
				let label = card.title, x = x1 + 1, y = y1 + 1, h = titleHeight - 2, w = cardWidth - 2
				let options = { width: w, align: 'center' }
				if (titleFillColor !== 'none') {
					pdf
						.rect(x, y, w, h)
						.fill(titleFillColor)
				}
				pdf
					.font(titleFontFamily).fontSize(titleFontSize)
					.fillColor(titleStrokeColor)
					.text(label, x, y + 0.5 * (h - pdf.heightOfString(label, options)), options)

				// Footer
				label = `${group.name} Player${iplayer + 1} - Game${igame + 1}`, x = x1 + 1, y = y2 + 1 - footerHeight, h = footerHeight - 2, w = cardWidth - 2
				options = { width: w, align: 'center' }
				if (footerFillColor !== 'none') {
					pdf
						.rect(x, y, w, h)
						.fill(footerFillColor)
				}
				pdf
					.font(footerFontFamily).fontSize(footerFontSize)
					.fillColor(footerStrokeColor)
					.text(label, x, y + 0.5 * (h - pdf.heightOfString(label, options)), options)

				// const bingo = ['B', 'I', 'N', 'G', 'O']
				const bingo = Object.keys(card).filter((key) => key !== 'title')

				// Header labels
				pdf
					.font(headerFontFamily)
					.fontSize(headerFontSize)

				for (let j = 0; j < 5; j++) {
					let label = bingo[j], x = x1 + 1 + j * columnWidth, y = y1 + 1 + titleHeight, h = headerHeight - 2, w = columnWidth - 2
					let options = { width: w, align: 'center' }

					if (headerFillColor !== 'none') {
						pdf
							.rect(x, y, w, h)
							.fill(headerFillColor)
							.fillColor(headerBorderColor)
							.stroke(headerBorderColor)
					}
					pdf
						.fillColor(headerStrokeColor)
						.text(label, x, y + 0.5 * (h - pdf.heightOfString(label, options)), options)

				}

				// Cell labels
				pdf
					.font(cellFontFamily)
					.fontSize(cellFontSize)
				let fontHeight = pdf.heightOfString('X')
				let offset = 0.5 * (cellHeight - fontHeight)

				for (let j = 0; j < 5; j++) {
					let yr = y1 + 1 + titleHeight + headerHeight + j * cellHeight, h = cellHeight - 2, w = columnWidth - 2
					for (let k = 0; k < 5; k++) {
						let label = card[bingo[k]][j], x = x1 + 1 + k * columnWidth, y = yr
						let options = { width: w, align: 'center' }
						if (cellFillColor !== 'none') {
							pdf
								.rect(x, y, w, h)
								.fill(cellFillColor)
						}
						pdf
							.fillColor(cellStrokeColor)
							.text(label, x, y + offset, options)
					}
				}

				if (slot === (per - 1) && igame < (games - 1)) {
					pdf.addPage()
					ipage = ipage + 1
				}

			}

			if (group.doublesided && (ipage % 2) > 0) {
				pdf.addPage()
			}

			if (iplayer < (players - 1)) {
				pdf.addPage()
			}

		}

		if (igroup < (groups.length - 1)) {
			pdf.addPage()
		}

	})

}

const pdf = {
	render: (data) => {
		// logger.debug(`render pdf: data: ${JSON.stringify(data)}`)
		let { games, per, groups }: any = data
		games = games || 1
		per = per || 1
		groups = groups || [{}]
		let layout = layouts[per]
		let theme = themes.default

		let pdf = new PDFDocument({
			layout: layout.pageLayout,
			margins: {
				top: layout.marginTop,
				bottom: layout.marginBottom,
				left: layout.marginLeft,
				right: layout.marginRight
			}
		})

		fonts(pdf, theme.customFonts)

		// marks(pdf, { cards: true }, layout, theme)

		cards(pdf, games, per, groups, layout, theme)

		pdf.end()

		return pdf

	}
}

export default pdf
