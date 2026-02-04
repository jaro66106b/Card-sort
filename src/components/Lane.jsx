import React from 'react'
import CardItem from './Card.jsx'

export default function Lane({ lane, cards, onRename, onDelete, onAddCard, onEditCard, onDeleteCard, onMoveCard }) {
  function handleDragOver(e) {
    e.preventDefault()
  }

  function handleDrop(e) {
    const cardId = e.dataTransfer.getData('text/plain')
    if (cardId) {
      onMoveCard(cardId, null)
    }
  }

  return (
    <div className="lane" onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="lane-header">
        <h2>{lane.title}</h2>
        <div className="lane-actions">
          <button onClick={onAddCard}>+ Card</button>
          <button onClick={onRename}>Rename</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
      <div className="lane-cards">
        {cards.map((card, idx) => (
          <CardItem
            key={card.id}
            card={card}
            onEdit={() => onEditCard(card.id)}
            onDelete={() => onDeleteCard(card.id)}
            onMove={(cardId) => onMoveCard(cardId, idx)}
          />
        ))}
      </div>
    </div>
  )
}
