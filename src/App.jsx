import { languages } from "./languages"
import { useState } from 'react'
import { clsx } from 'clsx'

function App() {

  const [word, setWord] = useState("react")

  const [guessedLetters, setGuessedLetters] = useState([])

  const wrongGuessCount = guessedLetters.filter(letter => !word.includes(letter)).length

  const isGameLost = wrongGuessCount >= languages.length - 1

  const isGameWon = word.split('').every(char => guessedLetters.includes(char))

  const isGameOver = isGameLost || isGameWon

  const alphabets = "abcdefghijklmnopqrstuvwxyz"

  function addGuessedLetters(letter) {
    setGuessedLetters(prevArr =>
      prevArr.includes(letter) ? prevArr : [...prevArr, letter]
    )
  }
  function renderGameStatus() {
    // if (!isGameOver) {
    //   return null
    // }

    if (isGameOver) {
      if (isGameWon) {
        return (
          <section className="game-won">
            <h2>You win!</h2>
            <p>Well done! 🎉</p>
          </section>
        )
      } else {
        return (
          <section className="game-lost">
            <h2>Game Over!</h2>
            <p>You lose! Better start learning Assembly 😭</p>
          </section>
        )
      }
    }
  }

  return (
    <main className="container">
      <header>
        <h1>Assembly Endgame</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </header>

      <section className="game-result">

        {renderGameStatus()}

      </section>

      <section className="languages__container">
        <ul className="languages">
          {
            languages.map((language, index) => {

              const langLost = index < wrongGuessCount

              return (
                <li key={language.name}><button
                  className={langLost ? 'lost' : ''}
                  style={{
                    backgroundColor: language.backgroundColor,
                    color: language.color
                  }}>{language.name}</button></li>
              )
            })
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
              <button onClick={() => addGuessedLetters(char)} className={`key ${keyState}`} key={char}>{char}</button>
            )

          }
          )
        }
      </section>

      <section className="btn__container">
        {
          isGameOver && (
            <button className="newgame">
              New Game
            </button>
          )
        }
      </section>

    </main >
  )
}

export default App