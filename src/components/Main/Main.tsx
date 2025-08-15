import { NavLink } from 'react-router'
import css from './Main.module.css'

function Main() {
  return (
    <div className={css.mainContent}>
        <div>
            <h3>Приветствует на официальном сайте</h3>
            <h1>Гоша Бомжезьян</h1>
            <p>Здесь вы можете найти курсы по созданию видео как у Гоши Бомжезьяна. Или получить привет от него.</p>
            <ul className={css.buttons}>
                <NavLink to='/courses' className={css.btn}>Научитесь ТВОРИТЬ с помощью ИИ</NavLink>
                <NavLink to='/hi-price' className={css.btn}>Я хочу персональный привет</NavLink>
                {/* <li><button>Contact</button></li> */}
            </ul>
        </div>
    </div>
  )
}

export default Main