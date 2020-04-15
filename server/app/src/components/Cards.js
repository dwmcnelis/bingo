import React from 'react'
import _ from 'underscore'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

const Title = ({ title, setTitle }) => {
  let input = ''

  return (
    <span className="title-input-container" >
      <span className="title-label" >Title</span><input className="title-input" onChange={(e) => {
        setTitle(input.value)
      }} ref={node => {
        input = node
      }} value={title} tabIndex={1} />
    </span>
  )
}

const Games = ({ games, lessGames, moreGames }) => {
  return (
    <div className="games noselect" >
      <span className="game-label noselect">Games</span>
      <span className="spinner-container noselect">
        <span className="spinner-left noselect" onClick={() => { lessGames() }}>-</span>
        <span className="spinner-text noselect" >{games}</span>
        <span className="spinner-right noselect" onClick={() => { moreGames() }}>+</span>
      </span>
    </div >
  )
}

const CardsPerPage = ({ per, lessPer, morePer }) => {
  return (
    <div className="per noselect" >
      <span className="per-label noselect">Cards per Page</span>
      <span className="spinner-container noselect">
        <span className="spinner-left noselect" onClick={() => { lessPer() }}>-</span>
        <span className="spinner-text noselect" >{per}</span>
        <span className="spinner-right noselect" onClick={() => { morePer() }}>+</span>
      </span>
    </div >
  )
}

const GroupForm = ({ addGroup }) => {
  let input = ''

  return (
    <span className="group-input-container" >
      <span className="group-input-label" >Group</span>
      <input className="group-input" onKeyDown={(e) => {
        if (e.key === 'Enter') {
          addGroup(input.value)
          input.value = ''
        }
      }} ref={node => {
        input = node
      }} tabIndex={2} />
      <button className="group-input-button" onClick={() => {
        addGroup(input.value)
        input.value = ''
      }}>
        +
      </button>
    </span>
  )
}

const Group = ({ group, lessPlayers, morePlayers, remove }) => {
  return (
    <li className="group noselect" >
      <span className="group-name noselect">{group.name}</span>
      <span className="spinner-container noselect">
        <span className="spinner-left noselect" onClick={() => { lessPlayers(group.id) }}>-</span>
        <span className="spinner-text noselect" >{group.players}</span>
        <span className="spinner-right noselect" onClick={() => { morePlayers(group.id) }}>+</span>
        <span className="group-remove noselect" onClick={() => { remove(group.id) }}>X</span>
      </span>
    </li >
  )
}

const GroupList = ({ groups, remove, lessPlayers, morePlayers }) => {
  const groupNode = groups.map((group) => {
    return (<Group group={group} key={group.id} remove={remove} lessPlayers={lessPlayers} morePlayers={morePlayers} />)
  })
  return (<ul className="groups" ><li className="group-header">Groups</li>{groupNode}</ul>)
}

window.group_id = 0
window.max_groups = 50
window.max_players = 25
window.max_games = 25

class Cards extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'Bingo',
      groups: [],
      games: 8,
      per: 4
    }
  }

  handleSetTitle(val) {
    if (val) {
      this.setState({ title: val })
    }
  }

  addGroup(val) {
    if (val && val.length > 0) {
      if (this.state.groups.length < window.max_groups) {
        const group = { name: val, players: 4, id: window.group_id++ }
        this.state.groups.push(group)
        this.setState({ groups: this.state.groups })
      }
    }
  }

  handleRemove(id) {
    const remainder = this.state.groups.filter((group) => {
      if (group.id !== id) return group
    })
    this.setState({ groups: remainder })
  }

  handleMorePlayers(id) {
    const groups = this.state.groups.map((group) => {
      if (group.id === id) {
        group.players = group.players + 1
        if (group.players > window.max_players) {
          group.players = window.max_players
        }
        return group
      } else {
        return group
      }
    })
    this.setState({ groups: groups })
  }

  handleLessPlayers(id) {
    const groups = this.state.groups.map((group) => {
      if (group.id === id) {
        group.players = group.players - 1
        if (group.players <= 1) {
          group.players = 1
        }
        return group
      } else {
        return group
      }
    })
    this.setState({ groups: groups })
  }

  handleMoreGames() {
    let games = this.state.games
    games = games + 1
    if (games > window.max_games) {
      games = window.max_games
    }
    this.setState({ games: games })
  }

  handleLessGames() {
    let games = this.state.games
    games = games - 1
    if (games <= 1) {
      games = 1
    }
    this.setState({ games: games })
  }

  handleMorePer() {
    let per = this.state.per
    if (per === 1) {
      per = 2
    } else if (per === 2) {
      per = 4
    }
    this.setState({ per: per })
  }

  handleLessPer() {
    let per = this.state.per
    if (per === 4) {
      per = 2
    } else if (per === 2) {
      per = 1
    }
    this.setState({ per: per })
  }

  handleDownload() {
    if (this.state.groups.length > 0) {
      console.log('download', this.state)
      window.open('/api/cards.pdf?title="Bingo"&packs=1&pages=1&per=4')

    } else {
      console.log('<empty>')
    }
  }

  formPreventDefault(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div id="bingocards" className="">
        <form className="card-form-container" onSubmit={this.formPreventDefault.bind(this)} >
          <Title
            title={this.state.title}
            setTitle={this.handleSetTitle.bind(this)}
          />
          <Games
            games={this.state.games}
            lessGames={this.handleLessGames.bind(this)}
            moreGames={this.handleMoreGames.bind(this)}
          />
          <CardsPerPage
            per={this.state.per}
            lessPer={this.handleLessPer.bind(this)}
            morePer={this.handleMorePer.bind(this)}
          />
          <GroupList
            groups={this.state.groups}
            remove={this.handleRemove.bind(this)}
            lessPlayers={this.handleLessPlayers.bind(this)}
            morePlayers={this.handleMorePlayers.bind(this)}
          />
          <GroupForm addGroup={this.addGroup.bind(this)} />
          {/* <input type="submit" value="Submit" /> */}
        </form>

        {/* "title": "Family Bingo",
"groups": [
{
"name": "mcnelis",
"players": 4
},
{
"name": "micci-smith",
"players": 6
}
],
"games": 8,
"per": 4 */}


        <div className="row">
          <div className="col c100">
            <button onClick={this.handleDownload.bind(this)} disabled={this.state.groups.length <= 0}>
              Download
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Cards
