import {createContext,useState } from 'react'

export const menuDataContext = createContext()

const MenuContext = ({children}) => {

  const [ openMenu, setOpenMenu ] = useState(false);

  function onOpenMenu(){
    setOpenMenu(!openMenu)
  }

  function onCloseMenu(){
    setOpenMenu(false)
  }



  return (
    <menuDataContext.Provider value={{ openMenu, onOpenMenu,onCloseMenu }} >
      {children}  
    </menuDataContext.Provider>
  )
}


export default MenuContext