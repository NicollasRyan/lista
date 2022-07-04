import './styles.css'

export function Header() {
    return (
        <div>
            <nav>
                <header>
                    <h1><a href="/">Meus Filme e séries favoritos</a></h1>
                </header>

                <div className="list">
                    <a href="/lista">Minha lista</a>
                </div>
            </nav>
        </div>
    )
}