import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Card } from './Card';
import { DeleteConfirmation } from './DeleteConfirmation';
import svgPaths from '../../imports/svg-211rcsmznl';

interface CardData {
  id: string;
  content: string;
  laneId: string;
}

interface LaneProps {
  id: string;
  name: string;
  cards: CardData[];
  onAddCard: (laneId: string) => void;
  onEditCard: (cardId: string, newContent: string) => void;
  onDeleteCard: (cardId: string) => void;
  onMoveCard: (cardId: string, fromLaneId: string, toLaneId: string) => void;
  onRenameLane: (laneId: string, newName: string) => void;
  onDeleteLane: (laneId: string) => void;
}

export function Lane({ 
  id, 
  name, 
  cards, 
  onAddCard, 
  onEditCard, 
  onDeleteCard, 
  onMoveCard,
  onRenameLane,
  onDeleteLane
}: LaneProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [editValue, setEditValue] = useState(name);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: { id: string; laneId: string }) => {
      if (item.laneId !== id) {
        onMoveCard(item.id, item.laneId, id);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const handleRename = () => {
    if (editValue.trim() && editValue !== name) {
      onRenameLane(id, editValue.trim());
    }
    setIsEditingName(false);
    setShowMenu(false);
  };

  const handleDeleteClick = () => {
    setShowMenu(false);
    setShowDeleteConfirm(true);
  };

  const handleDeleteConfirm = () => {
    onDeleteLane(id);
    setShowDeleteConfirm(false);
  };

  return (
    <div
      ref={drop}
      className="bg-[rgba(255,255,255,0.3)] content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[8px] shrink-0 min-w-[368px]"
      style={{ backgroundColor: isOver ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.3)' }}
    >
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        {isEditingName ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={handleRename}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleRename();
              } else if (e.key === 'Escape') {
                setEditValue(name);
                setIsEditingName(false);
              }
            }}
            className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-white bg-transparent border-none outline-none border-b-2 border-white"
            autoFocus
          />
        ) : (
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-white">
            {name}
          </p>
        )}
        <div className="relative">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="relative shrink-0 size-[16px] cursor-pointer border-none bg-transparent p-0"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g clipPath="url(#clip0_1_482)">
                <path d={svgPaths.pa554980} fill="var(--fill-0, white)" />
              </g>
              <defs>
                <clipPath id="clip0_1_482">
                  <rect fill="white" height="16" width="16" />
                </clipPath>
              </defs>
            </svg>
          </button>
          
          {showMenu && (
            <>
              <div 
                className="fixed inset-0 z-10"
                onClick={() => setShowMenu(false)}
              />
              <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-20 min-w-[160px]">
                <button
                  onClick={() => {
                    setIsEditingName(true);
                    setShowMenu(false);
                  }}
                  className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 transition-colors border-none bg-transparent cursor-pointer"
                >
                  Rename stack
                </button>
                <button
                  onClick={handleDeleteClick}
                  className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100 transition-colors border-none bg-transparent cursor-pointer"
                >
                  Delete stack
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          content={card.content}
          laneId={id}
          onEdit={onEditCard}
          onDelete={onDeleteCard}
        />
      ))}

      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] relative shrink-0">
          <button 
            onClick={() => onAddCard(id)}
            className="content-stretch flex items-center p-[16px] relative shrink-0 cursor-pointer border-none bg-transparent"
          >
            <div className="relative shrink-0 size-[32px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g>
                  <rect fill="var(--fill-0, white)" fillOpacity="0.3" height="31" rx="15.5" width="31" x="0.5" y="0.5" />
                  <rect height="31" rx="15.5" stroke="var(--stroke-0, white)" width="31" x="0.5" y="0.5" />
                  <path d={svgPaths.p273f9180} fill="var(--fill-0, white)" />
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {showDeleteConfirm && (
        <DeleteConfirmation
          onConfirm={handleDeleteConfirm}
          onCancel={() => setShowDeleteConfirm(false)}
        />
      )}
    </div>
  );
}