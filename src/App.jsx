import { languages } from "./languages"
import { useState } from 'react'

function App() {

  const [word, setWord] = useState('react')

  const alphabets = "abcdefghijklmnopqrstuvwxyz"

  return (
    <main className="container">
      <header>
        <h1>Assembly Endgame</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </header>

      <section className="game-result">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>

      <section className="languages__container">
        <ul className="languages">
          {
            languages.map(language => (
              <li key={language.name}><button style={{
                backgroundColor: language.backgroundColor,
                color: language.color
              }}>{language.name}</button></li>
            ))
          }
        </ul>
      </section>

      <section className="word">
        {
          Array.from(word).map((char, index) => (
            <span className="char" key={index}>{char}</span>
          ))
        }

      </section>

      <section className="keyboard">
        {
          alphabets.split('').map(char => (
            <button className="key" key={char}>{char}</button>
          ))
        }
      </section>

      <button className="newgame">
        New Game
      </button>
    </main>
  )
}

export default App