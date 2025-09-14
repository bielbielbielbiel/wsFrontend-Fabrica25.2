import React, { useEffect, useState } from 'react'

const Card = ({ data }) => {

    const [types, setTypes] = useState([]);
    const urlParts = data.url.split("/");
    const pokeId = urlParts[urlParts.length - 2];
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeId}.png`;

    useEffect(() => {
        async function fetchTypes() {
            const response = await fetch(data.url);
            const pokemonData = await response.json();
            setTypes(pokemonData.types);
        }
        fetchTypes();
    }, [data.url]);

    return (
        <div className="card">
            <img src={imgUrl} />
            <div className="text">
                <h4 className="name">
                    <span className='pokeId'>{pokeId}</span>
                    {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
                </h4>
                <div className="types">
                    {types.map((t,index) => (
                        <span key={index} className={`type-name ${t.type.name}`}>
                            {t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Card