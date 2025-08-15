import css from "./Footer.module.css"
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <div className={css.footerCont}>
      <div className={css.footerBlock}>
        <div className={css.firstFooterBlock}>
            <h2>GOSHAMONKEY</h2>
            <p>САМЫЙ ВИРУСНЫЙ ИИ-ПЕРСОНАЖ В РУССКОЯЗЫЧНОМ МИРЕ</p>
            <ul className={css.list}>
                <li><a href="https://t.me/goshamonkey" target="_blank"><FaTelegramPlane className={css.icon} /></a></li>
                <li><a href="https://www.youtube.com/@monkeygosha" target="_blank"><FaYoutube className={css.icon} /></a></li>
                <li><a href="https://www.tiktok.com/@goshamonkey" target="_blank"><FaTiktok className={css.icon} /></a></li>
            </ul>
            <p className={css.ALl_Rights}>© 2025. GOSHAMONKEY Все права защищены.</p>
        </div>
        <div className={css.contacts}>
            <h2>Контакты</h2>
            <p>goshamonkey@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer