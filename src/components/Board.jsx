import React from 'react'
import Lane from './Lane.jsx'

export default function Board({
  lanes,
  cardsByLane,
  onRenameLane,
  onDeleteLane,
  onAddCard,
  onEditCard,
  onDeleteCard,
  onMoveCard,
}) {
  return (
    <div className="board">
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          lane={lane}
          cards={cardsByLane[lane.id] || []}
          onRename={() => onRenameLane(lane.id)}
          onDelete={() => onDeleteLane(lane.id)}
          onAddCard={() => onAddCard(lane.id)}
          onEditCard={onEditCard}
          onDeleteCard={onDeleteCard}
          onMoveCard={(cardId, index) => onMoveCard(cardId, lane.id, index)}
        />
      ))}
    </div>
  )
}
