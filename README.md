# The Assembly Reckoning

This is a hangman-inspired guessing game where your goal is to guess a hidden word while saving popular programming languages from elimination. Each incorrect guess says farewell to one language, leaving Assembly as the last resort. Can you guess the word before it’s too late?

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Built with](#built-with)
- [Continued Development](#continued-development)

### Features

- **Interactive Word Filling**: Correct letter guesses fill the blank spaces in the hidden word.

- **Farewell Messages**: Each wrong guess interactively displays a farewell message for the lost language, such as "Goodbye, HTML" or "It's been a pleasure, CSS."

- **Game Over Conditions**:

  - Win: Guess the word correctly and celebrate with a congratulatory message and confetti animation.

  - Loss: Run out of guesses and lose, displaying the correct word with missed letters highlighted in red.

- **Dynamic Keyboard**: Keys change color to indicate status:

  - Green for correct guesses.

  - Red for incorrect guesses.

  - Yellow for unselected keys.

- **New Game Option**: Restart the game seamlessly after a win or loss.

### Screenshots 

![alt text](<public/site preview.png>)

*Game won state*
![alt text](<public/game won state view.png>)

*Game lost state*
![alt text](<public/game lost state view.png>)

### Deployment

The app has been deployed on Vercel: [Live Site](https://assembly-reckoning.vercel.app/)

### Built with

- React: For building the user interface.

- CSS: For styling the components and animations.

- JavaScript: For implementing game logic and interactivity.

- clsx: For conditional className management.

### Continued Development

- Add difficulty levels with varying word lengths.

- Include a scoring system.

- Provide hints for challenging words.

- Add more different animations for game loss.

- Include a timer for added challenge.