import Layout from '../components/Layout'
import List from '../components/List'
import Card from '../components/Card'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'

const initialState = {
  lists: [
    {id: 1, 'title': 'A', cards: [{id: 1}, {id: 2}]},
    {id: 2, 'title': 'B', cards: [{id: 3}]},
    {id: 3, 'title': 'C', cards: [{id: 4}]},
    {id: 4, 'title': 'D', cards: [{id: 5}]}
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

  }

  render() {
    return (
      <Layout>
        <div className='container'>
          <ContainerStyle />
          {this.state.lists.map(list =>
            <List
              key={list.id}
              cards={list.cards}
              moveCard={this.moveCard}
              listName={list.title} />
          )}
        </div>
      </Layout>
    )
  }

}

export default DragDropContext(HTML5Backend)(Board);
