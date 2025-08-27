import Footer from "../Footer/Footer"
import PaymentSection from "../PaymentSection/PaymentSection"
import css from "./HiPrice.module.css"

const hiProducts = [
    {img: "../../../firstHi.png",text: "Персональный привет от Гоши Бомжезьяна",price: "$7.99",index: "hi-price"},
    {img: "../../../secondHiLeha.png",text: "Персональный привет от Лёхи",price: "$7.99",index: "hi-price"},
    {img: "../../../zefirkaHI.png",text: "Персональный привет от Зефирки",price: "$7.99",index: "hi-price"},
    {img: "../../../G_L_Hi.png",text: "Персональный привет от Гоши Бомжезьяна и Лёхи",price: "$7.99",index: "hi-price"},
    {img: "../../../All_Hi.png",text: "Привет от Гоши Бомжезьяна и друзей",price: "$7.99",index: "hi-price"},
    {img: "../../../question-mark.png",text: "Закажи персональный привет от кого захочешь",price: "$7.99",index: "hi-price"},
]

function HiPrice() {
  return (
    <div>
        <div>
            <div className={css.hiPriceStartBlock}>
                <h1 className={css.title}>Персональные приветы</h1>
                <p className={css.Hi_text}>У вас есть возможность заказать уникальное видео-поздравление от Гоши Бомжезьяна и его друзей для себя или кого-то ещё 🤘</p>
            </div>
            <ul className={css.list}>
                {hiProducts.map((i, idx) => (
                    <PaymentSection
                        key={idx}
                        img={i.img}
                        text={i.text}
                        price={i.price}
                        index={i.index}
                    />)) }
            </ul>
        </div>
        <Footer />
    </div>
  )
}

export default HiPrice