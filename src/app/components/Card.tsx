import { useState } from 'react';
import { useDrag } from 'react-dnd';
import svgPaths from '../../imports/svg-211rcsmznl';

interface CardProps {
  id: string;
  content: string;
  laneId: string;
  onEdit: (id: string, newContent: string) => void;
  onDelete: (id: string) => void;
}

export function Card({ id, content, laneId, onEdit, onDelete }: CardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(content);
  const [isHovered, setIsHovered] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { id, laneId },
    canDrag: !isEditing,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [id, laneId, isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editValue.trim()) {
      onEdit(id, editValue.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setEditValue(content);
      setIsEditing(false);
    }
  };

  return (
    <div
      ref={drag}
      className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[280px] cursor-move"
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isEditing ? (
        <textarea
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          className="flex flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold text-[#14455c] text-[18px] bg-transparent border-none outline-none resize-none"
          autoFocus
          rows={3}
        />
      ) : (
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
          <p className="leading-[normal] whitespace-pre-wrap break-words overflow-wrap-anywhere">{content}</p>
        </div>
      )}
      <div
        className="content-stretch flex flex-col items-center justify-between min-h-[56px] relative self-stretch shrink-0 w-[16px]"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <button onClick={handleEdit} className="h-[16px] overflow-clip relative shrink-0 w-full cursor-pointer border-none bg-transparent p-0">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
              <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
            </svg>
          </div>
        </button>
        <button onClick={() => onDelete(id)} className="h-[16px] relative shrink-0 w-[14px] cursor-pointer border-none bg-transparent p-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
            <g clipPath="url(#clip0_1_477)" id="trash-can">
              <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
            </g>
            <defs>
              <clipPath id="clip0_1_477">
                <rect fill="white" height="16" width="14" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
}