import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../css/Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <Link to="/">
          <Button label="Voltar" />
        </Link>
        <h1>Pokémons Favoritos</h1>
      </div>

      {favorites.length === 0 ? (
        <p>Nenhum Pokémon favoritado ainda.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((name, index) => (
            <span key={index}>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
