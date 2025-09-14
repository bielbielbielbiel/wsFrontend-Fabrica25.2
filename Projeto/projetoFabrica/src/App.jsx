import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PokemonInfo from './pages/PokemonInfo'
import Favorites from './pages/Favorites'
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/:pokemon"} element={<PokemonInfo />} />
        <Route path={"/favorites"} element={<Favorites />} />
        <Route path="*" element={<NotFound />} /> {/* fallback para URLs inválidas */}
      </Routes>
    </div>
  )
}

export default App