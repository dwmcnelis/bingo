import * as PDFDocument from 'pdfkit'
import * as path from 'path'
import * as appRootDir from 'app-root-dir'

interface TableOptions {
	x?: number
	y?: number
	headers?: string[]
	rows: string[][]
	columnSpacing?: number
	rowSpacing?: number
	width?: number
	onHeader?: () => any
	onRow?: (row: string[], i: number) => any
}

const card = (pdf, options: TableOptions) => {
	let { x, y, headers, rows, width, columnSpacing, rowSpacing, onHeader, onRow } = options
	x = x || pdf.x
	y = y || pdf.y
	headers = headers || ['B', 'I', 'N', 'G', 'O']
	width = width || pdf.page.width - pdf.page.margins.left - pdf.page.margins.right
	columnSpacing = columnSpacing || 15
	rowSpacing = rowSpacing || 5
	onHeader = onHeader || (() => {})
	onRow = onRow || ((row: string[], i: number) => {})

	let startX = x
	let startY = y

	const columns = headers.length

	const computeRowHeight = (row) => {
		let result = 0

		row.forEach((cell) => {
			const cellHeight = pdf.heightOfString(cell, {
				width: columnWidth,
				align: 'left'
			})
			result = Math.max(result, cellHeight)
		})

		return result + rowSpacing
	}

	const containerWidth = width / columns
	const columnWidth = containerWidth - columnSpacing
	const maxY = pdf.page.height - pdf.page.margins.bottom

	let rowBottomY = 0

	pdf.on('pageAdded', () => {
		startY = pdf.page.margins.top
		rowBottomY = 0
	})

	onHeader()

	// Check to have enough room for header and first rows
	if (startY + 3 * computeRowHeight(headers) > maxY) pdf.addPage()

	// Print all headers
	headers.forEach((header, i) => {
		pdf.text(header, startX + i * containerWidth, startY, {
			width: columnWidth,
			align: 'left'
		})
	})

	// Refresh the y coordinate of the bottom of the headers row
	rowBottomY = Math.max(startY + computeRowHeight(headers), rowBottomY)

	// Separation line between headers and rows
	pdf
		.moveTo(startX, rowBottomY - rowSpacing * 0.5)
		.lineTo(startX + width, rowBottomY - rowSpacing * 0.5)
		.lineWidth(2)
		.stroke()

	rows.forEach((row, i) => {
		const rowHeight = computeRowHeight(row)

		// Switch to next page if we cannot go any further because the space is over.
		// For safety, consider 3 rows margin instead of just one
		if (startY + 3 * rowHeight < maxY) startY = rowBottomY + rowSpacing
		else pdf.addPage()

		// Allow the user to override style for rows
		onRow(row, i)

		// Print all cells of the current row
		row.forEach((cell, i) => {
			pdf.text(cell, startX + i * containerWidth, startY, {
				width: columnWidth,
				align: 'left'
			})
		})

		// Refresh the y coordinate of the bottom of this row
		rowBottomY = Math.max(startY + rowHeight, rowBottomY)

		// Separation line between rows
		pdf
			.moveTo(startX, rowBottomY - rowSpacing * 0.5)
			.lineTo(startX + width, rowBottomY - rowSpacing * 0.5)
			.lineWidth(1)
			.opacity(0.7)
			.stroke()
			.opacity(1) // Reset opacity after drawing the line
	})

	pdf.x = startX
	pdf.moveDown()
}

const pdf = {
	render: (data, ctx) => {
		let pdf = new PDFDocument({
			layout: 'landscape'
		})

		// pdf.font('Helvetica') // establishes the default font for forms
		// pdf.initForm()

		// let rootField = pdf.formField('rootField')
		// pdf.font('Courier')
		// let child1Field = pdf.formField('child1Field', { parent: rootField })
		// pdf.font('Helvetica')
		// let child2Field = pdf.formField('child2Field', { parent: rootField })

		// let y = 10
		// pdf.formCheckbox('check', 10, y, 10, 10, {
		// 	parent: child1Field,
		// 	value: '1',
		// 	align: 'center'
		// })

		// pdf
		// 	.font(path.join(appRootDir.get(), 'fonts/Viga-Regular.ttf'))
		// 	.fontSize(25)
		// 	.text('B  I  N  G  O', 100, 100)
		// 	.text('12 21 33 47 68', 100, 120)

		let file = data[0]
		let page = file[0]
		let per = page[0]

		card(pdf, {
			x: 36,
			y: 54,
			width: 324,
			headers: ['B', 'I', 'N', 'G', 'O'],
			rows: [
				[per.B[0], per.I[0], per.N[0], per.G[0], per.O[0]],
				[per.B[1], per.I[1], per.N[1], per.G[1], per.O[1]],
				[per.B[2], per.I[2], per.N[2], per.G[2], per.O[2]],
				[per.B[3], per.I[3], per.N[3], per.G[3], per.O[3]],
				[per.B[4], per.I[4], per.N[3], per.G[4], per.O[4]]
			],
			//width,
			//columnSpacing,
			//rowSpacing,
			onHeader: () => pdf.font('Helvetica-Bold'),
			onRow: () => pdf.font('Helvetica').fontSize(12)
		})

		per = page[1]

		card(pdf, {
			x: 396 + 36,
			y: 54,
			width: 324,
			headers: ['B', 'I', 'N', 'G', 'O'],
			rows: [
				[per.B[0], per.I[0], per.N[0], per.G[0], per.O[0]],
				[per.B[1], per.I[1], per.N[1], per.G[1], per.O[1]],
				[per.B[2], per.I[2], per.N[2], per.G[2], per.O[2]],
				[per.B[3], per.I[3], per.N[3], per.G[3], per.O[3]],
				[per.B[4], per.I[4], per.N[3], per.G[4], per.O[4]]
			],
			//width,
			//columnSpacing,
			//rowSpacing,
			onHeader: () => pdf.font('Helvetica-Bold'),
			onRow: () => pdf.font('Helvetica').fontSize(12)
		})

		per = page[2]

		card(pdf, {
			x: 36,
			y: 306 + 54,
			width: 324,
			headers: ['B', 'I', 'N', 'G', 'O'],
			rows: [
				[per.B[0], per.I[0], per.N[0], per.G[0], per.O[0]],
				[per.B[1], per.I[1], per.N[1], per.G[1], per.O[1]],
				[per.B[2], per.I[2], per.N[2], per.G[2], per.O[2]],
				[per.B[3], per.I[3], per.N[3], per.G[3], per.O[3]],
				[per.B[4], per.I[4], per.N[3], per.G[4], per.O[4]]
			],
			//width,
			//columnSpacing,
			//rowSpacing,
			onHeader: () => pdf.font('Helvetica-Bold'),
			onRow: () => pdf.font('Helvetica').fontSize(12)
		})

		per = page[3]

		card(pdf, {
			x: 396 + 36,
			y: 306 + 54,
			width: 324,
			headers: ['B', 'I', 'N', 'G', 'O'],
			rows: [
				[per.B[0], per.I[0], per.N[0], per.G[0], per.O[0]],
				[per.B[1], per.I[1], per.N[1], per.G[1], per.O[1]],
				[per.B[2], per.I[2], per.N[2], per.G[2], per.O[2]],
				[per.B[3], per.I[3], per.N[3], per.G[3], per.O[3]],
				[per.B[4], per.I[4], per.N[3], per.G[4], per.O[4]]
			],
			//width,
			//columnSpacing,
			//rowSpacing,
			onHeader: () => pdf.font('Helvetica-Bold'),
			onRow: () => pdf.font('Helvetica').fontSize(12)
		})
		pdf.end()

		ctx.attachment('cards.pdf')
		ctx.type = 'application/pdf'
		ctx.body = pdf
		ctx.status = 200

		//const pdf = new PDFDocument()

		// Embed a font, set the font size, and render some text
		// pdf
		//   //.font('fonts/PalatinoBold.ttf')
		//   .fontSize(25)
		//   .text('Some text with an embedded font!', 100, 100)

		// // Add an image, constrain it to a given size, and center it vertically and horizontally
		// pdf.image('path/to/image.png', {
		//   fit: [250, 300],
		//   align: 'center',
		//   valign: 'center'
		// })

		// // Add another page
		// pdf
		//   .addPage()
		//   .fontSize(25)
		//   .text('Here is some vector graphics...', 100, 100)

		// // Draw a triangle
		// pdf
		//   .save()
		//   .moveTo(100, 150)
		//   .lineTo(100, 250)
		//   .lineTo(200, 250)
		//   .fill('#FF3300')

		// // Apply some transforms and render an SVG path with the 'even-odd' fill rule
		// pdf
		//   .scale(0.6)
		//   .translate(470, -380)
		//   .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
		//   .fill('red', 'even-odd')
		//   .restore()

		// // Add some text with annotations
		// pdf
		//   .addPage()
		//   .fillColor('blue')
		//   .text('Here is a link!', 100, 100)
		//   .underline(100, 100, 160, 27, { color: '#0000FF' })
		//   .link(100, 100, 160, 27, 'http://google.com/')

		// // Finalize PDF file
		//pdf.end()
	}
}

export default pdf
