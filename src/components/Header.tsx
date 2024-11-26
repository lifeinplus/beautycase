import { ThemeToggler } from '../features/theme'

const Header = () => {
    return (
        <div className="sticky top-0 border-b border-gray-300 sm:hidden dark:border-gray-700">
            <header className="z-10 mx-auto flex max-w-4xl items-center justify-between bg-white px-5 py-3.5 dark:bg-black">
                <h1 className="font-logo text-2xl font-bold">
                    <a href="/">Beautycase</a>
                </h1>

                <div className="sm:hidden">
                    <ThemeToggler />
                </div>
            </header>
        </div>
    )
}

export default Header