import { DropTarget } from 'react-dnd'
import { Types } from '../constants'
import Card from './Card';

const spec = {
  drop(props) {
    console.log(props);
    return {
      id: props.listId
    }
  },

  // hover(props, monitor, component) {}
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const List = (props) => {
  const { connectDropTarget, isOver, cards } = props;
  return connectDropTarget(<div className={`list ${isOver && 'is-over'}`}>
      <style jsx>{`
          .list {
            flex-grow: 1;
            /*border: 1px solid black;*/
            width: 325px;
            min-height: 95vh;
            margin-right: 12px;
            /*max-height: 100vh;*/
            display: flex;
            flex-wrap: wrap;
            justify-content: center
            align-content: flex-start;

            align-items: flex-start;
          }
          .is-over {
            /*background: blue;*/
          }

          .list-header {
            width: 300px;
            height: 30px;
            /*display: flex;*/
            line-height: 30px;
            /*background: green;*/
            margin-bottom: 10px;
          }
    `}
    </style>
    <div>
      <div className='list-header'> {props.listName} </div>
      {props.cards.map(card => {
        return <Card moveCard={props.moveCard} id={card.id} listId={card.listId} />
      })}
    </div>
  </div>)
}

export default DropTarget(Types.CARD, spec, collect)(List);
