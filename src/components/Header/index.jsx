import { Link } from 'react-router-dom'
import './styles.css'

export function Header() {
    return (
        <div>
            <nav>
                <header>
                    <h1>Meus Filme e séries favoritos</h1>
                </header>

                <div className="myList">
                    <a to="/lista">Minha lista</a>
                </div>
            </nav>
        </div>
    )
}