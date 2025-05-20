export default function Home() {
  return (
    <div className='min-h-[calc(100vh-102px)] max-4-xl flex items-center justify-center'>
      <main className='flex flex-col space-y-10 items-center '>
        <h1 className='text-4xl sm:text-5xl font-bold text-center'>
          Bem-vindo a Fodinha!
        </h1>
        <p className='text-lg text-center sm:text-xl max-w-2xl'>
          Jogue o clássico jogo de baralho com seus amigos. Divirta-se e veja quem será o vencedor!
        </p>
        <div className='flex gap-4 items-center flex-col sm:flex-row'>
          <a
            className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto'
            href='/room'
          >
            Iniciar Jogo
          </a>
          <a
            className='rounded-full border border-solid border-gray-300 dark:border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto'
            href='/rules'
          >
            Regras do Jogo
          </a>
        </div>
      </main>
    </div>
  );
}