
const json = {
  render: (data, ctx) => {

    ctx.attachment('cards.json')
    ctx.type = 'application/json; charset=utf-8'
    ctx.body = data
    ctx.status = 200

  }
}

export default json