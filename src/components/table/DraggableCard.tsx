'use client';

import { useDraggable } from '@dnd-kit/core';
import { Card } from '@/components/cards';

interface DraggableCardProps {
    id: string;
    front: string;
    suit: 'diamond' | 'heart' | 'spade' | 'club';
}

export default function DraggableCard({ id, front, suit }: DraggableCardProps) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: JSON.stringify({ id, suit, front }), // Passa os dados completos da carta
    });

    const style = transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        }
        : undefined;

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="cursor-grab"
        >
            <Card front={front} suit={suit} />
        </div>
    );
}