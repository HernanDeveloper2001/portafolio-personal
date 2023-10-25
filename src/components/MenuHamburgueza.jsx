import { AiOutlineMenu } from "react-icons/ai"
import { menuDataContext } from "../Context/MenuContext"
import { useContext } from "react"

const MenuHamburgueza = () => {

  const { onOpenMenu } = useContext(menuDataContext)

  return (
    <div className="menu" onClick={onOpenMenu}>
      <i>
        <AiOutlineMenu size={40} style={{color:"white"}}/>
      </i>
    </div>
  )
}

export default MenuHamburgueza