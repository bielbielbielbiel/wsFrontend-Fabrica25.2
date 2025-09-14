import React from "react";
import { Link } from "react-router-dom";
import "../css/NotFound.css"

const NotFound = () => {
    return (
        <div className="not-found">
            <img src="/images/snorlaxNotFound.png" alt="Not Found" className="not-found-img" />
            <h1>Pokémon não encontrado!</h1>
            <h3>Verifique se digitou o nome corretamente.</h3>
            <Link to="/">
                <button className="button">Voltar</button>
            </Link>
        </div>
    );
};

export default NotFound;
