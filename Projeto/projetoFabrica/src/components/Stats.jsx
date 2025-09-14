import React from 'react'
import Stat from "./Stat"

const Stats = ({stats}) => {
    return (
        <div className='stats'>
            <Stat parameter={"Altura"} value={stats.height} units={"ft"}/>
            <Stat parameter={"Peso"} value={stats.weight} units={"kg"}/>
            <Stat parameter={"Experiência Base"} value={stats.exp}/>
            <Stat parameter={"HP"} value={stats.hp}/>
            <Stat parameter={"Ataque"} value={stats.attack}/>
            <Stat parameter={"Defesa"} value={stats.defence}/>
        </div>
    )
}

export default Stats