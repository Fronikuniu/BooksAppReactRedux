export default function authorsSubReducer(statePart, action) {
  switch (action.type) {
    case 'ADD_AUTHOR':
      return [...statePart, action.payload];
    case 'REMOVE_AUTHOR':
      return statePart.filter((author) => author.name !== action.payload);
    default:
      return statePart;
  }
}
