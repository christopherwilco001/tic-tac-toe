## Greetings

Welcome to tic-tac-toe, my first application as a Developer. This README will give you insight into the development process.

### Application functionality

At the landing page, new users will be given the opportunity to sign up with an email and password. Existing users will able to log back in with their credentials. After sign in, users will be able to click New Game to start a game immediately. Users will be able to track how many games have been played and change their password, or sign out. After clicking the start New Game button, an AJAX request is made to the API creating a new game object, and the gameboard appears, with a display at the top showing whose turn it is. Players click the board to make their choice. Each click, an AJAX request is made to the API, updating an array that represents each selection made on the game board. Players take turns until the game is won with 3 in a row, or if there is a tie. At any point, users can click the New Game button to reset the game board and start a new game.

### Development Process

- Review requirements docs for detailed expectations for the project.
- Come up with ideas as to how the functionality of he game will happen and visulize layout.
- Build the game board using HTML & CSS. Alternate clicks between 'X' and 'O'.
- Write the game logic using JavaScript checking for the various winning scenarios and tie scenarios.
- Interact with the API to allow users to sign up, sign in, change password, and sign out.
- Look for opportunities to make code DRY.
- Work on goals if able.

### User Stories

- First time users will want to create an account so they can access the game and track game stats.
- Returning users will want to log in.
- During gameplay, users will want to see whose turn it is and have functional clicks represented by 'X' and 'O'.
- Users will want to have the ability to start a new game at any point.
- Users will want to be able to log out at any time
- Users will want to be able to change password.

### Technology

- Bootstrap
- CSS
- HTML
- JavaScript
- JQuery

### Wireframe

https://imgur.com/v1EhXvj

### Unsolved Issues

None all requirements had to be met.
