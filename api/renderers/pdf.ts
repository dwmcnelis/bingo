import * as PDFDocument from 'pdfkit'
import * as path from 'path'
import * as appRootDir from 'app-root-dir'

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

const card = (pdf, options: TableOptions) => {
	let { x, y, headers, rows, width, height, columnSpacing, rowSpacing, onHeader, onRow } = options
	x = x || pdf.x
	y = y || pdf.y
	headers = headers || ['B', 'I', 'N', 'G', 'O']
	columnSpacing = columnSpacing || 15
	rowSpacing = rowSpacing || 5
	width = width || pdf.page.width - pdf.page.margins.left - pdf.page.margins.right
	height = height || 7 * (pdf.heightOfString('X') + rowSpacing)
	onHeader = onHeader || (() => { })
	onRow = onRow || ((row: string[], i: number) => { })
	const headerColor = '#666666'

	let startX = x
	let startY = y
	let rowHeight = pdf.heightOfString('')

	const columns = headers.length

	const computeRowHeight = (row) => {
		let result = 0

		row.forEach((cell) => {
			const cellHeight = pdf.heightOfString(cell, {
				width: columnWidth,
				align: 'center'
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

	// Outline card
	//let rowHeight = computeRowHeight(headers)
	pdf
		.rect(startX, startY, 5 * (columnWidth + columnSpacing), height)
		.stroke(headerColor)


	// Print header background
	rowHeight = computeRowHeight(headers)
	pdf
		.rect(startX, startY, 5 * (columnWidth + columnSpacing), rowHeight + rowSpacing)
		.fill(headerColor)

	// Print header tiles
	headers.forEach((header, i) => {
		pdf
			.fillColor('white')
			.text(header, startX + i * containerWidth + columnSpacing / 2, startY + 3 / 2 * rowSpacing, {
				width: columnWidth,
				align: 'center'
			})
			.fillColor('black')
	})

	// Print column lines
	headers.forEach((header, i) => {
		pdf
			.moveTo(startX + i * containerWidth, startY)
			.lineTo(startX + i * containerWidth, startY + height)
			.stroke(headerColor)
	})

	rows.forEach((row, i) => {
		pdf
			.moveTo(startX, startY + (i + 1) * (rowHeight + rowSpacing))
			.lineTo(startX + 5 * containerWidth, startY + (i + 1) * (rowHeight + rowSpacing))
			.stroke(headerColor)
	})

	// Refresh the y coordinate of the bottom of the headers row
	rowBottomY = Math.max(startY + computeRowHeight(headers), rowBottomY)

	// Separation line between headers and rows
	// pdf
	// 	.moveTo(startX, rowBottomY - rowSpacing * 0.5)
	// 	.lineTo(startX + width, rowBottomY - rowSpacing * 0.5)
	// 	.lineWidth(2)
	// 	.stroke()

	rows.forEach((row, i) => {
		let rowHeight = computeRowHeight(row)

		// Switch to next page if we cannot go any further because the space is over.
		// For safety, consider 3 rows margin instead of just one
		if (startY + 3 * rowHeight < maxY) startY = rowBottomY + rowSpacing
		else pdf.addPage()

		// Allow the user to override style for rows
		onRow(row, i)

		// Print all cells of the current row
		row.forEach((cell, i) => {
			pdf
				// .rect(startX + i * containerWidth, startY, columnWidth, rowHeight)
				// .fill('black')
				.text(cell, startX + i * containerWidth + columnSpacing / 2, startY + 3 / 2 * rowSpacing, {
					width: columnWidth,
					align: 'center'
				})
		})

		// Refresh the y coordinate of the bottom of this row
		rowBottomY = Math.max(startY + rowHeight, rowBottomY)

		// // Separation line between rows
		// pdf
		// 	.moveTo(startX, rowBottomY - rowSpacing * 0.5)
		// 	.lineTo(startX + width, rowBottomY - rowSpacing * 0.5)
		// 	.lineWidth(1)
		// 	.opacity(0.7)
		// 	.stroke()
		// 	.opacity(1) // Reset opacity after drawing the line
	})

	pdf.x = startX
	pdf.moveDown()
}

const pdf = {
	render: (data) => {
		let pdf = new PDFDocument({
			layout: 'landscape'
		})
		pdf.font('Helvetica-Bold').fontSize(18)
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

		data.forEach((file, i) => {
			file.forEach((page, j) => {
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
						[per.B[4], per.I[4], per.N[4], per.G[4], per.O[4]]
					],
					//width,
					//columnSpacing,
					//rowSpacing,
					onHeader: () => pdf.font('Helvetica-Bold').fontSize(18),
					onRow: () => pdf.font('Helvetica').fontSize(18)
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
						[per.B[4], per.I[4], per.N[4], per.G[4], per.O[4]]
					],
					//width,
					//columnSpacing,
					//rowSpacing,
					onHeader: () => pdf.font('Helvetica-Bold').fontSize(18),
					onRow: () => pdf.font('Helvetica').fontSize(18)
				})

				per = page[2]

				card(pdf, {
					x: 36,
					y: 306 + 54 - 40,
					width: 324,
					headers: ['B', 'I', 'N', 'G', 'O'],
					rows: [
						[per.B[0], per.I[0], per.N[0], per.G[0], per.O[0]],
						[per.B[1], per.I[1], per.N[1], per.G[1], per.O[1]],
						[per.B[2], per.I[2], per.N[2], per.G[2], per.O[2]],
						[per.B[3], per.I[3], per.N[3], per.G[3], per.O[3]],
						[per.B[4], per.I[4], per.N[4], per.G[4], per.O[4]]
					],
					//width,
					//columnSpacing,
					//rowSpacing,
					onHeader: () => pdf.font('Helvetica-Bold').fontSize(18),
					onRow: () => pdf.font('Helvetica').fontSize(18)
				})

				per = page[3]

				card(pdf, {
					x: 396 + 36,
					y: 306 + 54 - 40,
					width: 324,
					headers: ['B', 'I', 'N', 'G', 'O'],
					rows: [
						[per.B[0], per.I[0], per.N[0], per.G[0], per.O[0]],
						[per.B[1], per.I[1], per.N[1], per.G[1], per.O[1]],
						[per.B[2], per.I[2], per.N[2], per.G[2], per.O[2]],
						[per.B[3], per.I[3], per.N[3], per.G[3], per.O[3]],
						[per.B[4], per.I[4], per.N[4], per.G[4], per.O[4]]
					],
					//width,
					//columnSpacing,
					//rowSpacing,
					onHeader: () => pdf.font('Helvetica-Bold').fontSize(18),
					onRow: () => pdf.font('Helvetica').fontSize(18)
				})
				if (file.length > 1 && j <= page.length) {
					pdf.addPage()
				}
			})
			if (data.length > 1 && i < file.length) {
				pdf.addPage()
			}
		})

		pdf.end()

		return pdf

	}
}

export default pdf
