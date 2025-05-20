import { Diamond, Spade, Heart, Club } from 'lucide-react';

const SUITS = {
    ouros: Diamond,
    copas: Heart,
    espadas: Spade,
    paus: Club,
} as const;

type Suit = keyof typeof SUITS;

interface CardFrontProps {
    front: string;
    suit: Suit;
    size?: string
}

export default function CardFront({ front, suit, size = "w-24 aspect-[2.5/3.5]" }: CardFrontProps) {
    const textColor = suit === "ouros" || suit === "copas" ? "text-red-500" : "text-black";
    const SuitIcon = SUITS[suit];

    const iconSizes = {
        small: "w-3 h-3",
        medium: "w-4 h-4",
        large: "w-5 h-5",
    };

    let iconSize = iconSizes.small;
    if (size.includes("w-32")) iconSize = iconSizes.large;
    else if (size.includes("w-28")) iconSize = iconSizes.medium;
    else if (size.includes("w-24")) iconSize = iconSizes.small;

    return (
        <div className={`flex items-center justify-center relative ${size}`}>
            <div
                className={`bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center w-full h-full ${textColor}`}
                aria-label={`Carta ${front} de ${suit}`}
            >
                {/* Canto superior esquerdo */}
                <div className="absolute top-1 left-1 flex flex-col items-center">
                    <span className="text-sm font-extrabold">{front}</span>
                    <SuitIcon className={`${iconSize} fill-current ${textColor}`} />
                </div>

                {/* Canto inferior direito */}
                <div className="absolute bottom-1 right-1 flex flex-col items-center rotate-180">
                    <span className="text-sm font-extrabold">{front}</span>
                    <SuitIcon className={`${iconSize} fill-current ${textColor}`} />
                </div>

                {/* Ícone central */}
                <div className="flex items-center justify-center px-[15%] py-[40%] border border-black">
                    <SuitIcon className={`${iconSize} fill-current ${textColor}`} />
                </div>
            </div>
        </div>
    );
}
