import { DropTarget } from 'react-dnd'
import { Types } from '../constants'
import Card from './Card'
import css from 'styled-jsx/css'

const style = css`
  .list {
    flex-grow: 1;
    width: 325px;
    min-height: 95vh;
    margin-right: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center
    align-content: flex-start;
    align-items: flex-start;
  }

  .list-header {
    width: 300px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
  }
`
const spec = {
  drop(props) {
    console.log(props)
    return {
      id: props.listId
    }
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const List = props => {
  const { connectDropTarget, isOver, cards = [], moveCard, listName } = props
  return connectDropTarget(
    <div className="list">
      <style jsx>{style}</style>
      <div>
        <div className="list-header"> {listName} </div>
        {cards.map(({ id, listId }) => (
          <Card moveCard={moveCard} key={id} id={id} listId={listId} />
        ))}
      </div>
    </div>
  )
}

export default DropTarget(Types.CARD, spec, collect)(List)
