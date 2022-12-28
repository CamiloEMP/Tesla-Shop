import { ReactNode, useReducer } from 'react'

import { UIContext } from './UIContext'
import { UIReducer } from './UIReducer'

export interface UIState {
  isMenuOpen: boolean
}

const UI_INITIAL_STATE: UIState = {
  isMenuOpen: false,
}

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)

  const toggleSideMenu = () => {
    dispatch({ type: 'toggleMenu' })
  }

  return (
    <UIContext.Provider
      value={{
        ...state,
        toggleSideMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
