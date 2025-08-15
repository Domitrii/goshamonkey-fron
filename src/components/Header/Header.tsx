import { NavLink } from 'react-router'
import css from './Header.module.css'
import { GrShop } from "react-icons/gr";

function Header() {
  return (
    <div className={css.navBar}>
      <div className={css.navBarContent}>
        <NavLink to='/' className={css.logoL}>
          <p className={css.logoC}>
            <img src="../../gll.png" alt="Monkey-logo" className={css.logo} />
          </p>
        </NavLink>
        <div className={css.header}>
          <ul className={css.list}>
            <li className={css.listComponent}>
              <NavLink to="/" className={css.hiPrice}>
                Главная страница
              </NavLink>
            </li>
            <li className={css.listComponent}>
              <NavLink to="/courses" className={css.course}>
                Курсы
              </NavLink>
            </li>
            <li className={css.listComponent}>
              <NavLink to="/hi-price" className={css.hiPrice}>
                Персональные приветы
              </NavLink>
            </li>
            <li className={css.shopIcon}>
                <GrShop className={css.icon} stroke-width="1" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header