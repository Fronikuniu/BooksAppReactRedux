export default function usersSubReducer(statePart, action) {
  switch (action.type) {
    case 'LOG_USER':
      return { isLogged: true };
    case 'LOGOUT_USER':
      return { isLogged: false };
    default:
      return statePart;
  }
}
