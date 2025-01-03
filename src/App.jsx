import { languages } from "./languages"
import { useState } from 'react'
import { clsx } from 'clsx'
import { getFarewellText, chooseRandomWord } from "./utils"

function App() {

  // state variables
  const [word, setWord] = useState(() => chooseRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])

  // derived varaibles
  const wrongGuessCount = guessedLetters.filter(letter => !word.includes(letter)).length

  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameWon = word.split('').every(char => guessedLetters.includes(char))
  const isGameOver = isGameLost || isGameWon

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessCorrect = lastGuessedLetter && word.includes(lastGuessedLetter)

  // static varaibles
  const alphabets = "abcdefghijklmnopqrstuvwxyz"

  function addGuessedLetters(letter) {
    setGuessedLetters(prevArr =>
      prevArr.includes(letter) ? prevArr : [...prevArr, letter]
    )
  }

  function newGame() {
    setGuessedLetters([])
    setWord(chooseRandomWord())
  }
  function renderGameStatus() {
    if (!isGameOver && !isLastGuessCorrect) {

      if (wrongGuessCount) {
        return (
          <section className="farewell">
            <h3>{getFarewellText(languages[wrongGuessCount - 1].name)}</h3>
          </section>
        )
      }
    }

    if (isGameOver) {
      if (isGameWon) {
        return (
          <section className="game-won">
            <h2>You win!</h2>
            <p>Well done! 🎉</p>
          </section>
        )
      }
      if (isGameLost) {
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

      <section
        role="status"
        aria-live="polite"
        className="game-result">

        {renderGameStatus()}

      </section>

      <section className="languages__container">
        <ul className="languages">
          {
            languages.map((language, index) => {

              const langLost = index < wrongGuessCount

              return (
                <li key={language.name}>
                  <button
                    className={langLost ? 'lost' : ''}
                    style={{
                      backgroundColor: language.backgroundColor,
                      color: language.color
                    }}>{language.name}</button>

                </li>
              )
            })
          }
        </ul>
      </section>

      <section className="word">
        {
          Array.from(word).map((char, index) => {

            const isGuessed = guessedLetters.includes(char);

            return (
              isGameOver ? (
                <span
                  className={`char ${isGameLost && !guessedLetters.includes(char) && 'missed'}`}
                  key={index}
                >
                  {char}
                </span>
              ) : (
                <span
                  className="char"
                  key={index}
                >
                  {isGuessed ? char : ''}
                </span>
              )
            )

          }
          )
        }

      </section>

      <section
        className="sr-only"
        aria-live="polite"
        role="status"
      >
        <p>
          {word.includes(lastGuessedLetter) ?
            `Correct! The letter ${lastGuessedLetter} is in the word.` :
            `Sorry, the letter ${lastGuessedLetter} is not in the word.`
          }

        </p>
        <p>Current word: {word.split("").map(letter =>
          guessedLetters.includes(letter) ? letter + "." : "blank.")
          .join(" ")}</p>

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
              <button
                onClick={() => addGuessedLetters(char)} className={`key ${keyState}`}
                key={char}
                disabled={isGameOver}
                aria-label={`Letters ${char}`}
                aria-disabled={guessedLetters.includes(char)}
              >
                {char}
              </button>
            )

          }
          )
        }
      </section>

      <section className="btn__container">
        {
          isGameOver && (
            <button
              className="newgame"
              onClick={newGame}
            >
              New Game
            </button>
          )
        }
      </section>

    </main >
  )
}

export default App