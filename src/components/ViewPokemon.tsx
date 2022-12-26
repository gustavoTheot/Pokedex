import { useEffect, useState } from 'react'
import api from '../server/api'
import { SearchPokemon } from './SearchPokemon'
import styles from './ViewPokemon.module.css'

interface Pokemon {
  id: number
  name: string
  life: number
  image: string
  attack: number
  type: string
}

export function ViewPokemon() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [pokemonName, setPokemonName] = useState<string>('')

  function searchPokemon(namePokemon: string) {
    setPokemonName(namePokemon)
  }

  useEffect(() => {
    async function getFetchUrl() {
      try {
        const response = await api.get(`/${pokemonName}`)
        setPokemons([
          ...pokemons,
          {
            id: response.data.id,
            name: response.data.name,
            life: response.data.weight,
            image: response.data.sprites.front_default,
            attack: response.data.stats[2].base_stat,
            type: response.data.types[0].type.name,
          },
        ])
      } catch (err) {
        console.log('Error', err)
      }
    }

    getFetchUrl()
  }, [pokemonName])

  /*
  useEffect(() => {
    api.get(`${pokemonName}`).then((res) => {
      setPokemons([
        ...pokemons,
        {
          id: res.data.id,
          name: res.data.name,
          life: res.data.weight,
          image: res.data.sprites.front_default,
          attack: res.data.stats[2].base_stat,
          type: res.data.types[0].type.name,
        },
      ])
    })
  }, [pokemonName])
  */

  return (
    <div className={styles.containerViewPokemons}>
      <SearchPokemon submitPokemon={searchPokemon} />

      <div className={styles.viewPokemons}>
        <ul>
          {pokemons.map((pokemon, index) => {
            return (
              <li key={index}>
                <div className={styles.boxPokemon}>
                  <img src={pokemon.image} alt="" />
                </div>
                <div className={styles.statusPokemon}>
                  <h2>Status</h2>
                  <p>N°: {pokemon.id}</p>
                  <p>Name: {pokemon.name}</p>
                  <p>Type: {pokemon.type}</p>
                  <p>HP: {pokemon.life}</p>
                  <p>Attack: {pokemon.attack}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
