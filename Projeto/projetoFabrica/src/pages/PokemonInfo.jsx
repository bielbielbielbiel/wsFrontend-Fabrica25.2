import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button';
import "../css/PokemonInfo.css"
import Stats from '../components/Stats';


const PokemonInfo = () => {

    const { pokemon } = useParams();
    const navigate = useNavigate();
    const [selectedPokemon, setSelectedPokemon] = useState({});
    const [stats, setStats] = useState({
        height: 0,
        weight: 0,
        exp: 0,
        hp: 0,
        attack: 0,
        defence: 0,
        splAttack: 0,
        splDefence: 0,
        speed: 0,
    });

    const [isFavorite, setIsFavorite] = useState(false);

    const colours = {
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
    };

    const handleFavorite = () => {
        const stored = localStorage.getItem("favorites");
        const favs = stored ? JSON.parse(stored) : [];

        if (favs.includes(selectedPokemon.name)) {
            const updatedFavs = favs.filter(name => name !== selectedPokemon.name);
            localStorage.setItem("favorites", JSON.stringify(updatedFavs));
            setIsFavorite(false);
            alert(`${selectedPokemon.name} removido dos favoritos!`);
        } else {
            favs.push(selectedPokemon.name);
            localStorage.setItem("favorites", JSON.stringify(favs));
            setIsFavorite(true);
            alert(`${selectedPokemon.name} adicionado aos favoritos!`);
        }
    };

    useEffect(() => {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

        async function fetchPokemon() {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    navigate('*');
                    return;
                }

                const data = await response.json();

                setSelectedPokemon(data);
                setStats({
                    height: (data.height / 3.048).toFixed(1),
                    weight: (data.weight / 10).toFixed(1),
                    exp: data.base_experience,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defence: data.stats[2].base_stat,
                });

                const stored = localStorage.getItem("favorites");
                const favs = stored ? JSON.parse(stored) : [];
                setIsFavorite(favs.includes(data.name));

            } catch (error) {
                navigate('*');
            }
        }
        fetchPokemon();
    }, [pokemon]);

    return (
        <div className='searched-pokemon maxWidth'>
            <div className="searched-pokemon-header">
                <Link to={"/"}>
                    <Button label="Voltar" />
                </Link>
                <Button
                    label={isFavorite ? "Desfavoritar" : "Favoritar"}
                    onclick={handleFavorite}
                />
            </div>

            <div className="pokemon-details">
                <div className="searched-pokemon-info">
                    <h3>{selectedPokemon.name}</h3>
                    <div className="type">
                        {selectedPokemon?.types?.map((type, index) => (
                            <span key={index} style={{
                                backgroundColor: colours[type.type.name],
                            }}>{type.type.name}</span>
                        ))}
                    </div>
                    <Stats stats={stats} />
                </div>

                <div className="previewImage">
                    <img src={selectedPokemon?.sprites?.other?.home?.front_default} alt={selectedPokemon.name} />
                </div>
            </div>
        </div>
    )
}

export default PokemonInfo;
