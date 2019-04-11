## Welcome:

Welcome to tic-tac-toe, my first application as a Developer. This README will walk you through my development process and how the application works!


### How the application works:

At the landing page, new users will be given the opportunity to sign up with an email and password. Existing users will able to log in with their credentials. After sign in, users will be able to click New Game to start a game immediately. Users will be able to view their stats (total games played from the API), change their password, or sign out. After clicking the start New Game button, an AJAX request is made to the API creating a new game object, and the gameboard appears, with a display at the top showing whose turn it is. Players click the board to make their choice. Each click, an AJAX request is made to the API, updating an array that represents each selection made on the game board. Players take turns until the game is won with 3 in a row, or if there is a tie. At any point, users can click the New Game button to reset the game board and start a new game.

### Development Process:

- Review requirements docs for big picture as well as detailed expectations for the project.
- Brainstorm and write out some of the core functions of the application. Start thinking about how this will start to look as you begin to approach it.
- Build the game board using HTML & CSS. Get the clicks to represent X's and O's on the board using jQuery.
- Write the game logic using JavaScript conditional statements to check for the various possible winning scenarios and tie scenarios.
- Interact with the API to create a game, update an array representing the various board positions with each click, and retrieve total games played.
- Interact with the API to allow users to sign up, sign in, change password, and sign out. (AJAX, read API documentation)
- Look for opportunities to make code DRY.
- Add basic styles
Work on goals if able.

### User Stories:

- Write user stories and build out a wireframe.
- First time users will want to create an account so they can access the game and keep track of their stats.
- Returning users will want to log in so they can play the game.
- During gameplay, users will want to see whose turn it is and users will want the board to display their clicks as either Xs or Os.
- Users will want to have the ability to start a new game at any point without refreshing the page
- Users will want to be able to log out at any time
