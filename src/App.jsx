import { languages } from "./languages"
import { useState } from 'react'
import { clsx } from 'clsx'

function App() {

  const [word, setWord] = useState("react")

  const [guessedLetters, setGuessedLetters] = useState([])

  const alphabets = "abcdefghijklmnopqrstuvwxyz"

  function handleClick(letter) {
    setGuessedLetters(prevArr =>
      prevArr.includes(letter) ? prevArr : [...prevArr, letter]
    )
  }

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
          Array.from(word).map((char, index) => {

            const isGuessed = guessedLetters.includes(char);


            return <span className="char" key={index}>{isGuessed ? char : ''}</span>
          }
          )
        }

      </section>

      <section className="keyboard">
        {

          alphabets.split('').map(char => {
            const isGuessed = guessedLetters.includes(char);
            const isPresent = isGuessed && word.includes(char)
            const isAbsent = isGuessed && !word.includes(char)

            {/* const keyState = isGuessed ? isPresent ? 'present' : 'absent' : '' */ }

            const keyState = clsx({
              present: isPresent,
              absent: isAbsent
            })

            return (
              <button onClick={() => handleClick(char)} className={`key ${keyState}`} key={char}>{char}</button>
            )

          }
          )
        }
      </section>

      <button className="newgame">
        New Game
      </button>
    </main >
  )
}

export default App