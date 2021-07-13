export default function booksSubReducer(statePart, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...statePart, action.payload];
    case 'REMOVE_BOOK':
      return statePart.filter((book) => book.id !== action.payload);
    case 'REMOVE_AUTHOR_BOOKS':
      return statePart.filter((author) => author.name !== action.payload);
    default:
      return statePart;
  }
}
