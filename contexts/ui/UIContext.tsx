import { createContext } from 'react'

import { UIState } from './UIProvider'

export interface ContextUIProps extends UIState {
  isMenuOpen: boolean
  toggleSideMenu: () => void
}

export const UIContext = createContext({} as ContextUIProps)
