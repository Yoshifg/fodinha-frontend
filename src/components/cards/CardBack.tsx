interface CardBackProps {
    size?: string;
}

export default function CardBack({ size = "w-24 aspect-[2.5/3.5]" }: CardBackProps) {
    return (
        <div className={`${size} bg-zinc-100 p-[5px] rounded-lg shadow-lg`}>
            <div
                className={'bg-cover bg-center w-full h-full'}
                style={{
                    backgroundImage: "url('/blue-scale-pattern.svg')",
                    backgroundSize: '150%'
                }}
            >
            </div>
        </div >
    );
}