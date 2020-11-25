# Notes App

**Notes App** allows you to create, modify and delete notes with images

## Login

To access the notes page it is necessary to go through the login interface (data will be stored in redux and localStorage).

## Notes Screen

In the notes screen, you can create notes by pressing the + button, Clicking the + button will open a modal.

The mandatory fields of the modal will be the title and description. If an image is not provided, the default image of a beach will appear.

When you slide your mouse over a note, a button with a garbage icon and a button with a pencil icon will appear. Clicking these buttons allows the card to be deleted or changed.

If a card is modified, when the pencil button is pressed, the "active note" field of redux will contain the information of that card.

The upper buttons on the note screen will allow you to sort the items in the list:

**ASC**: Older to Newer (Default).
**DESC** From Newer to Older.
**A-Z**: Alphabetically by title in increasing order.
**Z-A**: Alphabetically by title in descending order.

Card information will be stored in LocalStorage and Redux.

## Get Started

### Dev

yarn dev

### Prod : Create Build

yarn prod

### Tests

yarn test

## Technologies

### React and Redux

React, Redux, React-Hooks, React-Router and React-Modal

### Tests

Jest, enzyme and redux-mock-store and react-test-renderer.

### Styles

styled-components, styled-systems

### Others

webpack, lodash
