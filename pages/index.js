import Layout from '../components/Layout'
import List from '../components/List'
import Card from '../components/Card'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'

const lists = [
  {id: 1, 'title': 'A', cards: [1, 2, 3, 4]},
  {id: 2, 'title': 'B', cards: []},
  {id: 3, 'title': 'C', cards: []},
  {id: 4, 'title': 'D', cards: []}
];

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

const Board = () => (
  <Layout>
    <div className='container'>
      <ContainerStyle />
      {lists.map(list =>
        <List key={list.id} cards={list.cards} listName={list.title} />
      )}
    </div>
  </Layout>
)

export default DragDropContext(HTML5Backend)(Board);
