export default function Footer() {
    return (
        <footer className="w-full bg-white dark:bg-gray-950 border-t-2 border-blue-900 text-center px-4 py-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    © {new Date().getFullYear()} Fodinha Online. Todos os direitos reservados.
                </div>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-end text-blue-700 dark:text-blue-400">
                    <a href="/" className="hover:underline">Início</a>
                    <a href="/rules" className="hover:underline">Regras</a>
                    <a href="/about" className="hover:underline">Sobre</a>
                    <a href="https://github.com/Yoshifg/projeto_diagnostico_frontend" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                </div>
            </div>
            <p className="mt-4 italic text-gray-500 text-xs">
                “Sua melhor aposta é sempre a próxima.”
            </p>
        </footer>
    );
}
