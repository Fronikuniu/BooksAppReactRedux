const createActionName = function (name) {
  return `app/users/${name}`;
};

const LOG_USER = createActionName('LOG_USER');
const LOGOUT_USER = createActionName('LOGOUT_USER');

export default function usersSubReducer(statePart = {}, action = {}) {
  switch (action.type) {
    case LOG_USER:
      return { isLogged: true };
    case LOGOUT_USER:
      return { isLogged: false };
    default:
      return statePart;
  }
}
