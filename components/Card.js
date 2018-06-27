import { Component } from 'react'
import { DragSource } from 'react-dnd'
import { Types } from '../constants'
import css from 'styled-jsx/css'

const style = css`
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin-bottom: 8px;
    background: white;
    box-shadow: 0px 1px 1px lightgray;
  }
  .dragging {
    visibility: hidden;
  }
`

const spec = {
  beginDrag(props, monitor, component) {
    return {
      id: props.id
    }
  },

  endDrag({ moveCard }, monitor, component) {
    if (!monitor.didDrop()) {
      return
    }

    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()
    moveCard(item.id, dropResult.id)
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
  connectDragPreview: connect.dragPreview()
})

class Card extends Component {
  render() {
    const { connectDragSource, isDragging, id } = this.props
    return connectDragSource(
      <div>
        <style jsx>{style}</style>
        <div className={`card ${isDragging && 'dragging'}`} id={id}>
          CARD {id}
        </div>
      </div>
    )
  }
}

export default DragSource(Types.CARD, spec, collect)(Card)
