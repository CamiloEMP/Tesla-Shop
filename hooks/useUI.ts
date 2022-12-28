import { useContext } from 'react'

import { UIContext } from 'contexts/ui/UIContext'

export const useUI = () => {
  return useContext(UIContext)
}
