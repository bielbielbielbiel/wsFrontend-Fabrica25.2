import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Feed from '../components/Feed'

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offSet, setOffSet] = useState(() => {
        const storedOffSet = sessionStorage.getItem("offset");
        return storedOffSet ? parseInt(storedOffSet, 10) : 0;
    });

    function handleNextPage() {
        const newOffset = offSet + 50;
        setOffSet(newOffset);
        sessionStorage.setItem("offset", newOffset.toString());
    }

    function handlePreviousPage() {
        const newOffset = offSet <= 50 ? 0 : offSet - 50;
        setOffSet(newOffset);
        sessionStorage.setItem('offset', newOffset.toString())
    }

    useEffect(() => {
        async function fetchPokemon() {
            const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offSet}`;

            const res = await fetch(apiUrl);
            const data = await res.json();

            setPokemons(data.results);
        }
        fetchPokemon()
    }, [offSet])
    return (
        <div className="home maxWidth">
            <Header />
            <Feed pokemons={pokemons} />
            <div className="pagination">
                <button onClick={handlePreviousPage} className="button">Anterior</button>
                <button onClick={handleNextPage} className="button">Próxima</button>
            </div>
        </div>
    )
}

export default Home