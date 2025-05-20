import { Card } from "@/components/cards";

export default function Rules() {
    return (
        <div className="min-h-[calc(100vh-102px)] flex flex-col items-center py-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-20 text-center">
                Sobre a Fodinha
            </h1>
            <div className="max-w-4xl space-y-6 sm:space-y-10 px-6 text-sm sm:text-xl text-justify">
                <p>
                    Tudo começou com um sonho. Literalmente, em uma noite qualquer, entre um dia cheio de aula e outro, um de nós acordou suando frio com uma visão clara: um baralho místico, uma mesa imaginária e quatro estudantes jogando… <strong>Fodinha</strong>.
                </p>
                <p>
                    Durante anos, jogamos apenas durante os intervalos das aulas. Entre árvores binárias, protocolos de rede e café requentado, a Fodinha se tornou uma válvula de escape — um santuário para mentes cansadas e corações competitivos.
                </p>
                <p>
                    E foi aí que a mágica aconteceu. Percebemos que a Fodinha não era só um jogo. Era um estilo de vida. Um manifesto silencioso contra o tédio acadêmico. Uma aula prática de estratégia, psicologia e blefe — mais útil do que muita disciplina obrigatória.
                </p>
                <p>
                    Com apoio moral (e nenhuma verba) de colegas, criamos este jogo para que qualquer um possa viver a emoção de vencer — ou errar feio a previsão e sair zerado com dignidade.
                </p>
                <p>
                    Hoje, a Fodinha é mais que um jogo. É sobre sonhar alto, errar previsões, e mesmo assim continuar apostando. Porque no final, como dizem os grandes empreendedores: <strong>não se trata de quantas vezes você perde, mas de quantas vezes você manda ver no blefe</strong>.
                </p>
                <p className="text-center mt-10 italic text-base text-gray-500">
                    “Se a vida te der cartas ruins... jogue Fodinha.”
                </p>
            </div>
        </div>
    );
}