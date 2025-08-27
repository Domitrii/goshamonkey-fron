import { MdClose } from "react-icons/md";
import css from "./Menu.module.css"
import { NavLink } from "react-router-dom";

type menuProps = {
    menu: boolean;
    closeMenu: () => void;
}

function Menu({menu, closeMenu}: menuProps) {
  return (
    <div className={`${menu ? css.Menu : css.not__Menu}`}>

        <div className={css.Menu__Back} onClick={closeMenu}></div>

        <div className={css.Menu__Content}>
            <div className={css.Menu__Content__Close}><MdClose onClick={closeMenu} /> </div>
            <div className={css.Menu__Content__Links}>
              <NavLink to="/">Главная страница</NavLink>
              <NavLink to="/courses">Курсы</NavLink>
              <NavLink to="/hi-price">Персональные приветы</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Menu