import React, { useEffect, useMemo, useState } from 'react'
import Board from './components/Board.jsx'

const STORAGE_KEY = 'card-sort-board-v1'

function createId(prefix = 'id') {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}`
}

function defaultState() {
  const todoId = createId('lane')
  const doingId = createId('lane')
  const doneId = createId('lane')
  const c1 = createId('card')
  return {
    lanes: [
      { id: todoId, title: 'To Do', cardIds: [c1] },
      { id: doingId, title: 'Doing', cardIds: [] },
      { id: doneId, title: 'Done', cardIds: [] },
    ],
    cards: {
      [c1]: { id: c1, title: 'Welcome! Drag me to another lane.' },
    },
  }
}

export default function App() {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : defaultState()
    } catch {
      return defaultState()
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {}
  }, [state])

  const cardsByLane = useMemo(() => {
    const map = {}
    for (const lane of state.lanes) {
      map[lane.id] = lane.cardIds.map((id) => state.cards[id]).filter(Boolean)
    }
    return map
  }, [state])

  function addLane() {
    const title = prompt('Lane name:')?.trim()
    if (!title) return
    const id = createId('lane')
    setState((s) => ({
      ...s,
      lanes: [...s.lanes, { id, title, cardIds: [] }],
    }))
  }

  function renameLane(laneId) {
    const title = prompt('New lane name:')?.trim()
    if (!title) return
    setState((s) => ({
      ...s,
      lanes: s.lanes.map((l) => (l.id === laneId ? { ...l, title } : l)),
    }))
  }

  function deleteLane(laneId) {
    if (!confirm('Delete this lane and its cards?')) return
    setState((s) => {
      const lane = s.lanes.find((l) => l.id === laneId)
      const newCards = { ...s.cards }
      lane.cardIds.forEach((id) => delete newCards[id])
      return {
        cards: newCards,
        lanes: s.lanes.filter((l) => l.id !== laneId),
      }
    })
  }

  function addCard(laneId) {
    const title = prompt('Card title:')?.trim()
    if (!title) return
    const id = createId('card')
    setState((s) => ({
      cards: { ...s.cards, [id]: { id, title } },
      lanes: s.lanes.map((l) =>
        l.id === laneId ? { ...l, cardIds: [...l.cardIds, id] } : l
      ),
    }))
  }

  function editCard(cardId) {
    const current = state.cards[cardId]
    const title = prompt('Edit card title:', current?.title || '')?.trim()
    if (!title) return
    setState((s) => ({
      ...s,
      cards: { ...s.cards, [cardId]: { ...s.cards[cardId], title } },
    }))
  }

  function deleteCard(cardId) {
    if (!confirm('Delete this card?')) return
    setState((s) => {
      const newCards = { ...s.cards }
      delete newCards[cardId]
      return {
        cards: newCards,
        lanes: s.lanes.map((l) => ({
          ...l,
          cardIds: l.cardIds.filter((id) => id !== cardId),
        })),
      }
    })
  }

  function moveCard(cardId, toLaneId, toIndex = null) {
    setState((s) => {
      let fromLaneId = null
      for (const l of s.lanes) {
        if (l.cardIds.includes(cardId)) {
          fromLaneId = l.id
          break
        }
      }
      if (!fromLaneId) return s

      const lanes = s.lanes.map((l) => {
        if (l.id === fromLaneId) {
          return { ...l, cardIds: l.cardIds.filter((id) => id !== cardId) }
        }
        return l
      })

      const idx = lanes.findIndex((l) => l.id === toLaneId)
      if (idx === -1) return s

      const target = lanes[idx]
      const insertAt = toIndex == null ? target.cardIds.length : Math.max(0, Math.min(toIndex, target.cardIds.length))
      const newIds = [...target.cardIds]
      newIds.splice(insertAt, 0, cardId)
      lanes[idx] = { ...target, cardIds: newIds }

      return { ...s, lanes }
    })
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Card Sort</h1>
        <button className="primary" onClick={addLane}>Add Lane</button>
      </header>
      <Board
        lanes={state.lanes}
        cardsByLane={cardsByLane}
        onAddLane={addLane}
        onRenameLane={renameLane}
        onDeleteLane={deleteLane}
        onAddCard={addCard}
        onEditCard={editCard}
        onDeleteCard={deleteCard}
        onMoveCard={moveCard}
      />
    </div>
  )
}
