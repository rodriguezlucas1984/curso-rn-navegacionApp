import {AuthState} from './AuthContext';

type AuthAction =
  | {
      type: 'signIn';
    }
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'logout'}
  | {type: 'changeUserName'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLogin: true,
        username: 'no-username-yet',
      };

    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'logout':
      return {
        ...state,
        favoriteIcon: undefined,
        isLogin: false,
        username: undefined,
      };
    case 'changeUserName':
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
