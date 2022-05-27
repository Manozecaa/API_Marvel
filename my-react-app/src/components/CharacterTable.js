import React from "react"
import CharacterItem from "./CharacterItem"


const CharacterTable = ({itens,isLoading}) => {
    if (isLoading) return (<h1>Carregando...</h1>)

    return (
     <section className="contents">
         {
            itens.map(item =>(
                <CharacterItem key={item.id} item={item}></CharacterItem>
            ))
         }
    </section>)
}

export default CharacterTable