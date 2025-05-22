import { CardBack } from '@/components/cards';

export default function Adversaries({ adversaries }: { adversaries: { name: string; cards: number }[] }) {
    return (
        <div className='w-full max-w-xl'>
            <div className='flex flex-col gap-4 items-center'>
                {adversaries.map((adversary, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center'
                    >
                        <div className='relative h-32 w-40 flex justify-center items-center mb-6'>
                            {Array.from({ length: adversary.cards }).map((_, i) => (
                                <div
                                    key={i}
                                    className='absolute'
                                    style={{
                                        transform: `rotate(${(i - (adversary.cards - 1) / 2) * 10}deg)`,
                                        transformOrigin: 'bottom',
                                    }}
                                >
                                    <CardBack />
                                </div>
                            ))}
                        </div>
                        <span className='text-lg'>{adversary.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}