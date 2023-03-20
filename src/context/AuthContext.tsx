import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

//Definir como luce, que información tendré aquí
export interface AuthState {
  isLogin: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado Inicial
export const autInitialState: AuthState = {
  isLogin: false,
  username: undefined,
  favoriteIcon: undefined,
};

// Lo usaremos para decirle a React cómo luce y qué expone el context
interface AuthContextProps {
  authState: AuthState;
  singIn: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  logout: () => void;
  changeUserName: (userName: string) => void;
}

// Crear contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente provedor del estado

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, autInitialState);

  const singIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeUserName = (userName: string) => {
    dispatch({type: 'changeUserName', payload: userName});
  };
  return (
    <AuthContext.Provider
      value={{authState, singIn, changeFavoriteIcon, logout, changeUserName}}>
      {children}
    </AuthContext.Provider>
  );
};
