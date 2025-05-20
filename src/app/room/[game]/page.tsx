"use client";

import { useState, useEffect } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { Card } from "@/components/cards";

const sampleCards = ["4", "J", "A"];
const viraCard = "6";

function DraggableCard({ id, front }: { id: string; front: string }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

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
            <Card front={front} suit="paus" />
        </div>
    );
}

function DropZone({
    onCardDrop,
    mesaCards,
    vira,
}: {
    onCardDrop: (id: string) => void;
    mesaCards: string[];
    vira: string | null;
}) {
    const { setNodeRef, isOver } = useDroppable({ id: "mesa" });

    return (
        <div
            ref={setNodeRef}
            className={`w-full max-w-xl rounded-xl bg-[#1f1f1f] border-4 transition-colors duration-200 ${isOver ? "border-blue-600" : "border-blue-900"
                } flex flex-col items-center p-4`}
            style={{ minHeight: "220px" }}
        >
            <div className="mb-4">
                <span className="block text-white text-lg mb-1 text-center">Vira</span>
                {vira ? (
                    <Card front={vira} suit="copas" />
                ) : (
                    <div className="w-24 h-36 bg-gray-800 rounded-lg flex items-center justify-center">
                        ?
                    </div>
                )}
            </div>

            <div className="flex h-36 items-center gap-4">
                {mesaCards.length === 0 ? (
                    <span className="text-white text-lg">Arraste a carta aqui</span>
                ) : (
                    mesaCards.map((card) => <Card key={card} front={card} suit="paus" />)
                )}
            </div>
        </div>
    );
}

export default function GameTable() {
    const [hand, setHand] = useState(sampleCards);
    const [mesa, setMesa] = useState<string[]>([]);
    const [vira, setVira] = useState<string | null>(viraCard);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (over?.id === "mesa") {
            setMesa((prev) => [...prev, active.id]);
            setHand((prev) => prev.filter((c) => c !== active.id));
        }
    };

    if (!isClient) {
        return null;
    }

    return (
        <div className="min-h-[calc(100vh-102px)] bg-[#171717] flex flex-col items-center p-8">
            <h1 className="text-white text-3xl font-bold mb-6">Mesa da Fodinha</h1>

            <DndContext onDragEnd={handleDragEnd}>
                <DropZone mesaCards={mesa} onCardDrop={(id) => console.log("Jogou:", id)} vira={vira} />

                <div className="mt-10 flex gap-4">
                    {hand.map((card) => (
                        <DraggableCard key={card} id={card} front={card} />
                    ))}
                </div>
            </DndContext>
        </div>
    );
}