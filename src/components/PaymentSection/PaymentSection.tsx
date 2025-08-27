import css from './PaymentSection.module.css'
// import dotenv from 'dotenv';

// dotenv.config();

type PaymentProps = {
    img: string;
    text: string;
    price: string;
    index: string;
}

function PaymentSection ({ img, text, price, index }: PaymentProps) {

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
            <button className={css.Payment__Content__Btn}>Выбрать Привет</button>
        </div>
    </li>
  )
}
export default PaymentSection