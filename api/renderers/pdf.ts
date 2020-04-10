import * as PDFDocument from 'pdfkit'
import * as path from 'path'
import * as appRootDir from 'app-root-dir'

const pdf = {
  render: (data, ctx) => {

    let pdf = new PDFDocument()

    pdf
      .font(path.join(appRootDir.get(), 'fonts/Viga-Regular.ttf'))
      .fontSize(25)
      .text('B  I  N  G  O', 100, 100)
      .text('12 21 33 47 68', 100, 120)

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