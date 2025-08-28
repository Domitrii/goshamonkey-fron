import css from './PaymentSection.module.css'

type PaymentProps = {
    img: string;
    text: string;
    price: string;
    index: string;
    addItem: () => void;
}

function PaymentSection ({ img, text, price, index, addItem }: PaymentProps) {

  return (
    <li className={css.Payment}>
        <div className={css.Payment__Img}>
            <img src={img} alt="фото курса" className={css.pic} id={index} />
        </div>
        <div className={css.Payment__Content}> 
            <div className={css.Payment__Content__Text}>
                {text}
            </div>
            <div className={css.Payment__Content__Price}>
                {price}
            </div>
            <button className={css.Payment__Content__Btn} onClick={addItem}>Выбрать Привет</button>
        </div>
    </li>
  )
}
export default PaymentSection