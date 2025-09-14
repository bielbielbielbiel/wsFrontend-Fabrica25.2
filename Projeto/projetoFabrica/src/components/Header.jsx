import React, { useState } from 'react'
import Button from './Button'
import '../css/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    const [query, setQuery] = useState("");
    return (
        <header>
            <nav className='maxWidth'> 
                <Link to="/favorites">Favoritos</Link>
                <div className="title">Pokédex</div>
                <div className="search-bar">
                    <input type="text" placeholder='Pesquise seu pokémon'
                        value={query} onChange={(e) => setQuery(e.target.value)} />
                    <Link to={`/${query}`}>
                        <Button label={'Pesquisar'} />
                    </Link>

                </div>
            </nav>
        </header>
    )
}

export default Header