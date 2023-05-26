# Chess.com - Front End Programming Challenge
Welcome to my implementation of the [Chess.com](https://chess.com) front end programming challenge!

# Application Requirements
1. Create a page with a chessboard and a sidebar.
2. On desktop devices the sidebar should be positioned to the right of the chessboard.
3. On mobile devices the sidebar should be positioned below the chessboard.
4. The chessboard should resize responsively to consume available space.
5. Clicking a chessboard square should highlight the square.
6. Keep track of which squares are clicked and the order in which they're clicked.
7. Display the information collected from step 6 in the sidebar.

# Implementation Details
## Technologies Used
 - [Vue.js](https://vuejs.org/)

## Project Structure
The project is structured as follows:
- Components
  - `chessboard`: The components used in the chess board.
  - `sideBar`: The components used in the sidebar.
  - `icons`: The SVG icons used in the application.
  - `ui`: General purpose & reusable UI components.
- Helpers: Functions that are used throughout the application.
- Stores: The vue `reactive` stores used in the application.
- Tests: The unit tests for the application.

## Assumptions
- When a square is clicked and added to the sidebar, it is not un-highlighted when another square is clicked.
- The sidebar should be scrollable when the number of squares clicked exceeds the height of the sidebar.
- The chessboard must remain square, not rectangular, when the screen size changes.

## Design Decisions
- When a highlighted square is clicked, it should be un-highlighted. This is to prevent the user from needing to search for the square in the sidebar to un-highlight it. If this is deemed to be a bad design decision, it can be easily reverted by removing the first condition in the `toggleSquare` method in the `ChessBoard.vue` component. 
  - In the event this is reverted, in order to prevent a bug allowing the user to add a square multiple times, the `toggleSquare` method in the `ChessBoard.vue` component should be modified to check if the square is already in the sidebar before adding it.
- A clear button was added to the sidebar to allow the user to clear the squares that have been clicked. This is to prevent the user from having to manually un-highlight each square in the sidebar or in the chess board. This can be easily removed by removing the `clear` button in the `SideBar.vue` component.
- A hover effect was added to the squares on the chess board indicating which tile the user is hovering over. This is to provide the user with feedback as to which square they are about to click. This can be easily removed by removing the `p` element from the `ChessSquare.vue` component.
- A theme switcher was added to the application to support light and dark mode versions of the application.
- The application was designed to be responsive and support mobile & desktop devices. In order to preserve the size of the responsive chessboard where possible, the point where these two modes switch is at 950px (as opposed to a more standard 768px). This was done for purely aesthetic reasons, and can be easily changed by modifying the `scss` variables in `global.scss`.
