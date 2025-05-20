interface CardBackProps {
    size?: string; // Tailwind size, e.g., "w-24"
}

export default function CardBack({ size = "w-24 aspect-[2.5/3.5]" }: CardBackProps) {
    return (
        <div className={`relative ${size}`}>
            <div className="w-full h-full rounded-lg border-2 border-blue-900 bg-gradient-to-br from-blue-900 to-[#171717] shadow-lg flex items-center justify-center">
                {/* Padrão mandala-like: círculos concêntricos */}
                <div className="w-4/5 h-4/5 rounded-full border-2 border-blue-300 flex items-center justify-center">
                    <div className="w-3/5 h-3/5 rounded-full border-2 border-blue-500 flex items-center justify-center">
                        <div className="w-2/5 h-2/5 rounded-full bg-blue-700" />
                    </div>
                </div>
            </div>
        </div>
    );
}
