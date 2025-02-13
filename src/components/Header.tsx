export function Header() {
    return (
        <header className="flex h-20 w-full flex-col items-center justify-center gap-2 mb-10">
            <a href="/" className="text-indigo-400 text-7xl flex flex-col items-center">
                <p className="font-black">Comparador de Dados</p>
                <p className="font-black"> de COVID-19</p>
            </a>
        </header>
    );
}