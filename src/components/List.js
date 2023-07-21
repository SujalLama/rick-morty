import { useEffect, useState } from "react";
import Character from "./Character";

export default function List() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function () {
            const data = await fetch('https://rickandmortyapi.com/api/character');
            const {results} = await data.json();
            setCharacters(results);
            setLoading(false);
        })() 
    }, [characters.length])

    console.log(characters);
    return (
        <div>
            <h2>Characters</h2>
            <div className="row">
                {
                    loading ? (
                        <div>Loading...</div>
                    ) : (
                        characters.map((character) => (
                            <Character
                                key={character.id}
                                character={character}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
}