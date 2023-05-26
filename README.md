# Chess.com - Front End Programming Challenge
Welcome to my implementation of the [Chess.com](https://chess.com) front end programming challenge!

View live at [this link](https://chess-highlighter.rossalexandra.com/), or [this backup link](https://chess-com-assignment.web.app/) incase the DNS records haven't propagated on the first link.

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
- Stores: The `vuex` stores used in the application.
  - `selectedSquares`: The store that keeps track of the squares that have been selected.
- Tests: The unit tests for the application.

## Assumptions
- When a square is clicked and added to the sidebar, it is not un-highlighted when another square is clicked.
- The sidebar should be scrollable when the number of squares clicked exceeds the height of the sidebar.
- The chessboard must remain square, not rectangular, when the screen size changes.

## Additional Features
While not required by the challenge, the following additional features were added to the application to improve a theoretical user's experience, and to make the application more interesting to build:
- Squares which have been highlighted should be able to be un-highlighted.
  - This allows users to undo mistakes.
  - This allows users to change their mind about which squares they want to highlight.
  - This allows users to use the application more fluidly to highlight squares and demonstrate patterns.
  - This allows users to re-order the squares in the sidebar, by un-highlighting and re-highlighting them in the desired order.
- A theme switcher was added to the application to support light and dark mode versions of the application.
  - This allows users to use the application in their preferred theme.
- Drag support was added to the application to allow users to drag over multiple squares to change their state.
  - This allows users to use the application more fluidly to highlight squares and demonstrate patterns.
  - This allows users to much more rapidly highlight squares, causing less strain on the user's wrist.

All of the original requirements of the challenge were met, and the additional features were added on top of the original requirements. The additional features were added in a way that does not impact the original requirements, and can be easily removed if desired. Furthermore, the added features respect the intent of the original requirements, for example the sidebar will still keep track of the order in which squares were clicked, even if the user un-highlights a square. Squares which were un-highlighted will be removed from the sidebar, and the order of the remaining squares will be updated & preserved.

## Design Decisions
- In order to support allowing a user to un-highlight a square, the following design decisions were made:
  - The sidebar tags are clickable, allowing a user to un-highlight a square.
  - Highlighted squares are clickable, allowing a user to un-highlight a square.
  - A clear button was added to the sidebar to allow the user to clear the squares that have been clicked.

- The application was designed to be responsive and support mobile & desktop devices. In order to preserve the size of the responsive chessboard where possible, the point where these two modes switch is at 950px (as opposed to a more standard 768px). This was done for purely aesthetic reasons, and can be easily changed by modifying the `scss` variables in `global.scss`.

## Testing
The application has been tested using the [Jest](https://jestjs.io/) testing framework. The tests can be run using the `npm run test:unit` command.
