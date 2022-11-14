import { createContext, ReactNode, useContext, useState } from "react";

interface MenuContextProps {
  isOpenMenu: boolean;
  setIsOpenMenu: (value: boolean) => void;
}

interface MenuContextProviderProps {
  children: ReactNode;
}

const MenuContext = createContext<MenuContextProps>({} as MenuContextProps)

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <MenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuContext = () => useContext(MenuContext)

