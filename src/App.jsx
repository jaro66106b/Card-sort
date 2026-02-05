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
      { id: todoId, title: 'Column 1', cardIds: [c1] },
      { id: doingId, title: 'Column 2', cardIds: [] },
      { id: doneId, title: 'Column 3', cardIds: [] },
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
      const loaded = raw ? JSON.parse(raw) : defaultState()
      if (!loaded._migratedColumnTitles) {
        const defaultOld = ['To Do', 'Doing', 'Done']
        const matchesOldDefaults =
          Array.isArray(loaded.lanes) &&
          loaded.lanes.length === 3 &&
          loaded.lanes.every((l, i) => l?.title === defaultOld[i])
        if (matchesOldDefaults) {
          loaded.lanes = loaded.lanes.map((l, i) => ({ ...l, title: `Column ${i + 1}` }))
          loaded._migratedColumnTitles = true
        }
      }
      return loaded
    } catch {
      return defaultState()
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {}
  }, [state])

  function resetBoard() {
    if (!confirm('Reset board to defaults? This will clear local data.')) return
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
    setState(defaultState())
  }

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

  function saveResults() {
    let text = 'Card Sort Results\n'
    text += '='.repeat(40) + '\n\n'
    for (const lane of state.lanes) {
      text += `${lane.title}\n`
      text += '-'.repeat(lane.title.length) + '\n'
      const cards = lane.cardIds.map((id) => state.cards[id]).filter(Boolean)
      if (cards.length === 0) {
        text += '  (no cards)\n'
      } else {
        cards.forEach((card) => {
          text += `  • ${card.title}\n`
        })
      }
      text += '\n'
    }
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'card-sort-results.txt'
    a.click()
    URL.revokeObjectURL(url)
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
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={resetBoard}>Reset Board</button>
          <button className="primary" onClick={addLane}>Add Lane</button>
        </div>
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
      <button className="save-results-btn" onClick={saveResults}>
        Save Results
      </button>
    </div>
  )
}
