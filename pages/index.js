import { Component } from 'react'
import Layout from '../components/Layout'
import List from '../components/List'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import css from 'styled-jsx/css'
import _ from 'lodash'

const style = css`
  .container {
    display: flex;
    justify-content: flex-start;
    padding: 20px;
  }
`

const initialState = {
  lists: [
    { id: 1, title: 'A' },
    { id: 2, title: 'B' },
    { id: 3, title: 'C' },
    { id: 4, title: 'D' }
  ],
  cards: [
    { id: 1, listId: 1 },
    { id: 2, listId: 2 },
    { id: 3, listId: 3 },
    { id: 4, listId: 4 },
    { id: 5, listId: 1 }
  ]
}

class Board extends Component {
  state = initialState

  moveCard = (sourceCardId, destinationList) => {
    const card = this.state.cards.find(card => card.id === sourceCardId)
    card.listId = destinationList
    this.setState({
      cards: this.state.cards
    })
  }

  render() {
    const listGroups = _.groupBy(this.state.cards, 'listId')

    return (
      <Layout>
        <div className="container">
          <style jsx>{style}</style>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              cards={listGroups[list.id]}
              moveCard={this.moveCard}
              listId={list.id}
              listName={list.title}
            />
          ))}
        </div>
      </Layout>
    )
  }
}

export default DragDropContext(HTML5Backend)(Board)
