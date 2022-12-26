import { FormEvent, useState } from 'react'
import styles from './SearchPokemon.module.css'
import logoPokemon from '../assets/logo_pokemon.svg'

interface SubmitNamePokmonProps {
  submitPokemon: (namePokemon: string) => void
}

export function SearchPokemon({ submitPokemon }: SubmitNamePokmonProps) {
  const [namePokemon, setNamePokemon] = useState('')

  function handleSearchPokemon(event: FormEvent) {
    event.preventDefault()

    submitPokemon(namePokemon)
    setNamePokemon('')
  }

  const isNewSearch = namePokemon.length === 0

  return (
    <div className={styles.containerFormPokemon}>
      <img src={logoPokemon} alt="" />

      <form className={styles.formPokemon} onSubmit={handleSearchPokemon}>
        <input
          type="text"
          name="pokemons"
          value={namePokemon}
          onChange={(e) => setNamePokemon(e.target.value)}
          placeholder="Pesquisar"
          required
        />

        <button type="submit" disabled={isNewSearch}>
          Search
        </button>
      </form>
    </div>
  )
}
