function App() {
  return (
    <main className="container">
      <h1>Assembly Endgame</h1>
      <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      <section className="game-result">

      </section>
      <section className="languages__container">
        <ul className="languages">
          <li><button>HTML</button></li>
          <li><button>CSS</button></li>
          <li><button>Javascript</button></li>
          <li><button>React</button></li>
          <li><button>Typescript</button></li>
          <li><button>Node.js</button></li>
          <li><button>Python</button></li>
          <li><button>Ruby</button></li>
          <li><button>Assembly</button></li>
        </ul>
      </section>

      <section className="guesses__container">

      </section>

      <section className="keyboard__container">

      </section>

      <button className="newgame">
        New Game
      </button>
    </main>
  )
}

export default App