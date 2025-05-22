'use client';

import { useState, useEffect } from 'react';
import { DndContext } from '@dnd-kit/core';
import DraggableCard from '@/components/table/DraggableCard';
import DropZone from '@/components/table/DropZone';
import Adversaries from '@/components/table/Adversaries';

export default function GameTable() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const [hand, setHand] = useState<{ id: string; front: string; suit: 'diamond' | 'heart' | 'spade' | 'club' }[]>([
        { id: 'card1', front: 'A', suit: 'diamond' },
        { id: 'card2', front: 'K', suit: 'heart' },
        { id: 'card3', front: 'A', suit: 'diamond' },
        { id: 'card4', front: 'K', suit: 'heart' },
    ]);
    const [mesa, setMesa] = useState<{ id: string; front: string; suit: 'diamond' | 'heart' | 'spade' | 'club' }[]>([]);
    const [vira, setVira] = useState<{ front: string; suit: 'diamond' | 'heart' | 'spade' | 'club' }>({
        front: '6',
        suit: 'spade',
    });
    const [adversaries, setAdversaries] = useState([
        { name: 'Jogador 1', cards: 3 },
        { name: 'Jogador 2', cards: 3 },
        { name: 'Jogador 3', cards: 3 },
    ]);

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (over?.id === 'mesa') {
            const card = JSON.parse(active.id);
            setMesa((prev) => [...prev, card]);
            setHand((prev) => prev.filter((c) => c.id !== card.id));
        }
    };

    if (!isClient) {
        return null; // Evita renderizar no servidor
    }

    return (
        <div className='min-h-[calc(100vh-102px)] bg-[#171717] flex flex-col items-center p-8'>
            <div className='grid grid-cols-3 gap-12 justify-items-center'>
                <DndContext onDragEnd={handleDragEnd}>
                    <div className='row-start-1 col-start-2'>
                        {adversaries.length > 0 && (
                            <div className='rotate-180'>
                                <Adversaries adversaries={[adversaries[0]]} />
                            </div>
                        )}
                    </div>
                    <div className='row-start-2 col-start-1 flex items-center'>
                        {adversaries.length > 1 && (
                            <div className='rotate-90'>
                                <Adversaries adversaries={[adversaries[1]]} />
                            </div>
                        )}
                    </div>
                    <div className='row-start-2 col-start-3 flex items-center'>
                        {adversaries.length > 2 && (
                            <div className='rotate-270'>
                                <Adversaries adversaries={[adversaries[2]]} />
                            </div>
                        )}
                    </div>
                    <div className='row-start-2 col-start-2 flex'>
                        <DropZone
                            onCardDrop={(card) => console.log('Carta jogada:', card)}
                            mesaCards={mesa}
                            vira={vira}
                        />
                    </div>
                    <div className='row-start-3 col-start-2 flex space-x-4'>
                        {hand.map((card) => (
                            <DraggableCard key={card.id} id={card.id} front={card.front} suit={card.suit} />
                        ))}
                    </div>
                </DndContext>
            </div>
        </div>
    );
}