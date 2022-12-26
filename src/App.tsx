import styles from './App.module.css'
import './global.css'
import { ViewPokemon } from './components/ViewPokemon'

function App() {
  return (
    <div className={styles.wrapper}>
      <ViewPokemon />
    </div>
  )
}

export default App
