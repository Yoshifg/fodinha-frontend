'use client';

import { useDroppable } from '@dnd-kit/core';
import { Card } from '@/components/cards';

interface DropZoneProps {
    onCardDrop: (card: { id: string; suit: 'diamond' | 'heart' | 'spade' | 'club' }) => void;
    mesaCards: { id: string; front: string; suit: 'diamond' | 'heart' | 'spade' | 'club' }[];
    vira: { front: string; suit: 'diamond' | 'heart' | 'spade' | 'club' } | null;
}

export default function DropZone({ onCardDrop, mesaCards, vira }: DropZoneProps) {
    const { setNodeRef, isOver } = useDroppable({ id: 'mesa' });

    return (
        <div
            ref={setNodeRef}
            className={`w-[480px] rounded-xl bg-[#1f1f1f] border-4 transition-colors duration-200 ${isOver ? 'border-blue-600' : 'border-blue-900'
                } flex flex-col items-center p-4`}
            style={{ minHeight: '220px' }}
        >
            <div className="mb-4">
                <span className="block text-lg mb-1 text-center">Vira</span>
                {vira ? (
                    <Card front={vira.front} suit={vira.suit} />
                ) : (
                    <div className="w-24 h-36 bg-gray-800 rounded-lg flex items-center justify-center">?</div>
                )}
            </div>

            <div className="flex h-36 items-center gap-4">
                {mesaCards.length === 0 ? (
                    <span className="text-lg">Arraste a carta aqui</span>
                ) : (
                    mesaCards.map((card) => <Card key={card.id} front={card.front} suit={card.suit} />)
                )}
            </div>
        </div>
    );
}