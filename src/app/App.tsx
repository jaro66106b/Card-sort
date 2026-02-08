import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Lane } from './components/Lane';
import svgPaths from '../imports/svg-211rcsmznl';

interface CardData {
  id: string;
  content: string;
  laneId: string;
}

interface LaneData {
  id: string;
  name: string;
}

export default function App() {
  const [lanes, setLanes] = useState<LaneData[]>([
    { id: '1', name: 'Stack 1' },
    { id: '2', name: 'Stack 2' },
    { id: '3', name: 'Stack 3' },
  ]);

  const [newlyCreatedLaneId, setNewlyCreatedLaneId] = useState<string | null>(null);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleValue, setTitleValue] = useState('Card Sort');

  const [cards, setCards] = useState<CardData[]>([
    { id: 'c1', content: 'Card data 1', laneId: '1' },
    { id: 'c2', content: 'Card data 2', laneId: '1' },
    { id: 'c3', content: 'Card data 3', laneId: '1' },
    { id: 'c10', content: 'Card data 1', laneId: '2' },
    { id: 'c11', content: 'Card data 2', laneId: '2' },
    { id: 'c16', content: 'Card data 1', laneId: '3' },
  ]);

  const addLane = () => {
    const newLane: LaneData = {
      id: Date.now().toString(),
      name: 'Stack name',
    };
    setLanes([...lanes, newLane]);
    setNewlyCreatedLaneId(newLane.id);
    setTimeout(() => setNewlyCreatedLaneId(null), 100);
  };

  const addCard = (laneId: string) => {
    const newCard: CardData = {
      id: Date.now().toString(),
      content: 'Card data',
      laneId,
    };
    setCards([...cards, newCard]);
  };

  const editCard = (cardId: string, newContent: string) => {
    setCards(cards.map(card => 
      card.id === cardId ? { ...card, content: newContent } : card
    ));
  };

  const deleteCard = (cardId: string) => {
    setCards(cards.filter(card => card.id !== cardId));
  };

  const moveCard = (cardId: string, fromLaneId: string, toLaneId: string) => {
    setCards(cards.map(card =>
      card.id === cardId ? { ...card, laneId: toLaneId } : card
    ));
  };

  const renameLane = (laneId: string, newName: string) => {
    setLanes(lanes.map(lane =>
      lane.id === laneId ? { ...lane, name: newName } : lane
    ));
  };

  const deleteLane = (laneId: string) => {
    setLanes(lanes.filter(lane => lane.id !== laneId));
    setCards(cards.filter(card => card.laneId !== laneId));
  };

  const moveLane = (dragIndex: number, hoverIndex: number) => {
    if (dragIndex < 0 || dragIndex >= lanes.length || hoverIndex < 0 || hoverIndex >= lanes.length) return;
    if (dragIndex === hoverIndex) return;
    
    const newLanes = [...lanes];
    const [draggedLane] = newLanes.splice(dragIndex, 1);
    newLanes.splice(hoverIndex, 0, draggedLane);
    setLanes(newLanes);
  };

  const resetBoard = () => {
    setLanes([
      { id: '1', name: 'Stack name' },
      { id: '2', name: 'Stack name' },
      { id: '3', name: 'Stack name' },
    ]);
    setCards([
      { id: 'c1', content: 'Card data', laneId: '1' },
      { id: 'c2', content: 'Card data', laneId: '1' },
      { id: 'c3', content: 'Card data', laneId: '1' },
      { id: 'c4', content: 'Card data', laneId: '1' },
      { id: 'c5', content: 'Card data', laneId: '1' },
      { id: 'c6', content: 'Card data', laneId: '1' },
      { id: 'c7', content: 'Card data', laneId: '1' },
      { id: 'c8', content: 'Card data', laneId: '2' },
      { id: 'c9', content: 'Card data', laneId: '2' },
      { id: 'c10', content: 'Card data', laneId: '2' },
      { id: 'c11', content: 'Card data', laneId: '2' },
      { id: 'c12', content: 'Card data', laneId: '2' },
      { id: 'c13', content: 'Card data', laneId: '2' },
      { id: 'c14', content: 'Card data', laneId: '2' },
      { id: 'c15', content: 'Card data', laneId: '2' },
      { id: 'c16', content: 'Card data', laneId: '3' },
      { id: 'c17', content: 'Card data', laneId: '3' },
      { id: 'c18', content: 'Card data', laneId: '3' },
      { id: 'c19', content: 'Card data', laneId: '3' },
      { id: 'c20', content: 'Card data', laneId: '3' },
      { id: 'c21', content: 'Card data', laneId: '3' },
    ]);
  };

  const exportAsTxt = () => {
    let content = `${titleValue} Export\n\n`;
    lanes.forEach(lane => {
      content += `${lane.name}\n`;
      content += '='.repeat(lane.name.length) + '\n';
      const laneCards = cards.filter(card => card.laneId === lane.id);
      laneCards.forEach(card => {
        content += `- ${card.content}\n`;
      });
      content += '\n';
    });

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'card-sort.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleTitleSave = () => {
    if (titleValue.trim()) {
      setIsEditingTitle(false);
    } else {
      setTitleValue('Card Sort');
      setIsEditingTitle(false);
    }
  };

  const exportAsCsv = () => {
    // Create header row with lane names
    const header = lanes.map(lane => `"${lane.name}"`).join(',');
    
    // Find max number of cards in any lane
    const maxCards = Math.max(...lanes.map(lane => 
      cards.filter(card => card.laneId === lane.id).length
    ));
    
    // Build rows
    const rows: string[] = [];
    for (let i = 0; i < maxCards; i++) {
      const row = lanes.map(lane => {
        const laneCards = cards.filter(card => card.laneId === lane.id);
        const card = laneCards[i];
        return card ? `"${card.content}"` : '';
      }).join(',');
      rows.push(row);
    }
    
    const content = header + '\n' + rows.join('\n') + '\n';

    const blob = new Blob([content], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'card-sort.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="size-full min-h-screen flex flex-col bg-gradient-to-br from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-cover overflow-auto">
        {/* Header */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
              {isEditingTitle ? (
                <input
                  type="text"
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)}
                  onBlur={handleTitleSave}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleTitleSave();
                    } else if (e.key === 'Escape') {
                      setTitleValue(titleValue);
                      setIsEditingTitle(false);
                    }
                  }}
                  className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[32px] text-white bg-transparent border-none outline-none border-b-2 border-white w-full"
                  autoFocus
                />
              ) : (
                <p 
                  onClick={() => setIsEditingTitle(true)}
                  className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[32px] text-white cursor-pointer"
                >
                  {titleValue}
                </p>
              )}
              <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
                <button 
                  className="bg-[rgba(255,255,255,0.25)] content-stretch flex items-center justify-center px-[16px] py-[4px] relative rounded-[100px] shrink-0 cursor-pointer border border-solid border-white"
                  onClick={() => {}}
                >
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white">
                    Configuration
                  </p>
                </button>
                <button 
                  className="bg-[rgba(255,255,255,0.25)] content-stretch flex items-center justify-center px-[16px] py-[4px] relative rounded-[100px] shrink-0 cursor-pointer border border-solid border-white"
                  onClick={resetBoard}
                >
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white">
                    Reset board
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lanes */}
        <div className="flex-1 px-[24px] py-[16px] overflow-x-auto">
          <div className="flex gap-[16px] items-start min-h-full">
            {lanes.map((lane, index) => (
              <Lane
                key={lane.id}
                id={lane.id}
                name={lane.name}
                cards={cards.filter(card => card.laneId === lane.id)}
                index={index}
                startEditing={newlyCreatedLaneId === lane.id}
                onAddCard={addCard}
                onEditCard={editCard}
                onDeleteCard={deleteCard}
                onMoveCard={moveCard}
                onRenameLane={renameLane}
                onDeleteLane={deleteLane}
                onMoveLane={moveLane}
              />
            ))}
            
            {/* Add Lane Button */}
            <button 
              onClick={addLane}
              className="bg-[rgba(255,255,255,0.3)] rounded-full size-[48px] flex items-center justify-center cursor-pointer border-none shrink-0"
            >
              <svg className="size-[32px]" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g>
                  <rect fill="var(--fill-0, white)" fillOpacity="0.3" height="31" rx="15.5" width="31" x="0.5" y="0.5" />
                  <rect height="31" rx="15.5" stroke="var(--stroke-0, white)" width="31" x="0.5" y="0.5" />
                  <path d={svgPaths.p273f9180} fill="var(--fill-0, white)" />
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* Export Buttons */}
        <div className="px-[24px] py-[16px] flex gap-[8px] items-center justify-end">
          <button
            onClick={exportAsTxt}
            className="bg-[rgba(255,255,255,0.25)] content-stretch flex items-center justify-center px-[16px] py-[4px] relative rounded-[100px] shrink-0 cursor-pointer border border-solid border-white"
          >
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white">
              Save as .txt
            </p>
          </button>
          <button
            onClick={exportAsCsv}
            className="bg-[rgba(255,255,255,0.25)] content-stretch flex items-center justify-center px-[16px] py-[4px] relative rounded-[100px] shrink-0 cursor-pointer border border-solid border-white"
          >
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white">
              Save as .csv
            </p>
          </button>
        </div>
      </div>
    </DndProvider>
  );
}