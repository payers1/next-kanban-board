import { Component } from 'react';
import { DragSource } from 'react-dnd';
import { Types } from '../constants'

const spec = {
  beginDrag(props, monitor, component) {
    return {
      id: props.id
    }
  },

  endDrag({moveCard}, monitor, component) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    moveCard();
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview()
  }
}

class Card extends Component {
  render () {
    const { connectDragSource, isDragging, connectDragPreview } = this.props;
    return connectDragSource(
      <div>
        <style jsx> {`
          .card {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 100px;
            margin-bottom: 8px;
            background: white;
            box-shadow: 0px 1px 1px lightgray;
          }
          .dragging {
            visibility: hidden;
          }
        `}</style>
      <div className={`card ${isDragging && 'dragging'}`} id={this.props.id}> CARD </div>
      </div>
    )
  }
}

export default DragSource(Types.CARD, spec, collect)(Card);
