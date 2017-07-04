import Layout from '../components/Layout'
import List from '../components/List'
import Card from '../components/Card'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'

const initialState = {
  lists: [
    {id: 1, 'title': 'A'},
    {id: 2, 'title': 'B'},
    {id: 3, 'title': 'C'},
    {id: 4, 'title': 'D'}
  ],
  cards: [
    {id: 1, listId: 1, sort: 1},
    {id: 2, listId: 2, sort: 2},
    {id: 3, listId: 3, sort: 3},
    {id: 4, listId: 4, sort: 4},
    {id: 5, listId: 1, sort: 5},
  ]
}

const ContainerStyle = () => (
  <style jsx>{`
    .container {
      display: flex;
      justify-content: flex-start;
      padding: 20px;
    }
  `}
  </style>
)

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
    this.moveCard = this.moveCard.bind(this);
  }

  moveCard(sourceCardId, destinationList) {
    const card = this.state.cards.find((card) => {
      return card.id === sourceCardId;
    })
    card.listId = destinationList;
    this.setState((prevState, props) => {
      return {
        cards: prevState.cards.sort(function (a, b) {
          return a.sort < b.sort
        })
      }
    })

  }

  render() {
    return (
      <Layout>
        <div className='container'>
          <ContainerStyle />
          {this.state.lists.map(list => {
            const cardsForList = this.state.cards.filter(({listId}) => listId === list.id);
            return (<List
              key={list.id}
              cards={cardsForList}
              moveCard={this.moveCard}
              listId={list.id}
              listName={list.title} />)
            }
          )}
        </div>
      </Layout>
    )
  }

}

export default DragDropContext(HTML5Backend)(Board);
