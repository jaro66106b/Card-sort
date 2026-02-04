import React, { useCallback } from 'react'

export default function CardItem({ card, onEdit, onDelete, onMove }) {
  const onDragStart = useCallback((e) => {
    e.dataTransfer.setData('text/plain', card.id)
    e.dataTransfer.effectAllowed = 'move'
  }, [card.id])

  const onDragOver = useCallback((e) => {
    e.preventDefault()
  }, [])

  const onDrop = useCallback((e) => {
    const draggedCardId = e.dataTransfer.getData('text/plain')
    if (!draggedCardId) return
    if (draggedCardId === card.id) return
    onMove(draggedCardId)
  }, [card.id, onMove])

  return (
    <div className="card" draggable onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop}>
      <div className="card-title">{card.title}</div>
      <div className="card-actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}
