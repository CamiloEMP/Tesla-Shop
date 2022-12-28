import { UIState } from './UIProvider'

type UIActions = {
  type: 'toggleMenu'
}

export const UIReducer = (state: UIState, action: UIActions): UIState => {
  switch (action.type) {
    case 'toggleMenu':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      }

    default:
      return state
  }
}
