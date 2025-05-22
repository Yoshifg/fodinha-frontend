import { Card } from '@/components/cards';

export default function Rules() {
    return (
        <div className='min-h-[calc(100vh-102px)] flex flex-col items-center justify-center py-12 mb-20'>
            <h1 className='text-4xl sm:text-5xl font-bold mb-12 sm:mb-20 text-center'>
                Regras do Jogo Fodinha
            </h1>
            <div className='max-w-4xl space-y-6 sm:space-y-10 px-6 text-sm sm:text-xl text-justify'>
                <p>
                    <strong>Fodinha</strong> é um jogo de baralho em que o objetivo é acertar o número de subrodadas que você vai vencer em cada rodada.
                </p>
                <p>
                    O jogo é dividido em várias rodadas. Na primeira, cada jogador recebe uma carta. Na segunda, duas cartas, e assim por diante, até atingir o número máximo possível com o baralho disponível.
                </p>

                <h2 className='text-3xl font-bold mt-4'>Fase de Apostas</h2>
                <p>
                    Após receber as cartas, os jogadores devem apostar quantas rodadas acham que vão vencer naquela mão.
                </p>
                <p>
                    A aposta é feita em ordem. O <strong>último a apostar</strong> não pode escolher um número que faça a soma total de apostas ser igual ao número de rodadas da rodada atual.
                </p>

                <h2 className='text-3xl font-bold mt-4'>Jogando as Rodadas</h2>
                <p>
                    As cartas são jogadas uma a uma. A subrodada é vencida por quem jogar a carta mais forte. As hierarquia de força das cartas, da mais fraca a mais forte, é a seguinte:
                </p>

                <div className='w-auto h-auto relative flex flex-col items-center justify-center'>
                    <div className='relative w-[calc(28px*9+127px)] h-[190px]'>
                        {['4', '5', '6', '7', 'Q', 'J', 'K', 'A', '2', '3'].map((front, index) => (
                            <div
                                key={front}
                                className='absolute transition-transform duration-300 hover:-translate-y-4'
                                style={{
                                    left: `${index * 28}px`,
                                    zIndex: index,
                                }}
                            >
                                <Card front={front} suit='club' size='w-28 sm:w-32 aspect-[2.5/3.5]' />
                            </div>
                        ))}
                    </div>
                    <p>1. Sequência Hierárquica das Cartas</p>
                </div>
                <p>
                    Antes de cada rodada iniciar, uma carta do baralho é virada para definir a <strong>“manilha”</strong>, ou seja, a carta mais forte daquela rodada.
                    A manilha é a próxima carta na sequência hierárquica, considerando a ordem cíclica das cartas.
                </p>
                <p>
                    Assim, se a carta virada for um <strong>4</strong>, a manilha será o <strong>5</strong>, já se for virado um <strong>3</strong>, a manilha será um <strong>4</strong>, e assim sucessivamente. Além disso, dentre as manilhas, há uma hierarquia de naipes, que define qual carta é mais forte em caso de empate.
                </p>

                <div className='w-full h-64 relative flex flex-col items-center justify-center'>
                    <div className='relative w-[calc(34px*3+128px)] h-[190px]'>
                        {(['diamond', 'spade', 'heart', 'club'] as const).map((suit, index) => (
                            <div
                                key={suit}
                                className='absolute transition-transform duration-300 hover:-translate-y-4'
                                style={{
                                    left: `${index * 34}px`,
                                    zIndex: index,
                                }}
                            >
                                <Card front='A' suit={suit} size='w-32 aspect-[2.5/3.5]' />
                            </div>
                        ))}
                    </div>
                    <p>2. Sequência Hierárquica dos Naipes das Manilhas</p>
                </div>
                <p>
                    O jogador que vencer a subrodada inicia a próxima, e assim por diante.
                </p>
                <p>
                    Só há desempate entre cartas iguais para manilhas, em caso de cartas comuns haverá um empate. Caso haja um empate entre as cartas mais fortes da subrodada, a carta mais forte em seguida ganha a subrodada.
                </p>
                <p>
                    Só haverá empate na subrodada caso todas as cartas se anulem.
                </p>

                <h2 className='text-3xl font-bold mt-4'>Sistema de Vidas</h2>
                <p>
                    Todos os jogadores iniciam com 3 vidas. Ao final de cada rodada:
                </p>
                <ul className='list-disc pl-6'>
                    <li>Jogadores que <strong>acertaram sua aposta</strong> mantêm suas vidas.</li>
                    <li>Jogadores que <strong>erraram</strong> perdem uma vida.</li>
                </ul>
                <p>
                    O jogo continua até que reste apenas um jogador com vidas. Ele é o vencedor!
                </p>
            </div>
        </div>
    );
}
