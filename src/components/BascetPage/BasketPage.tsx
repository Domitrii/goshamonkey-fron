import css from "./BasketPage.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

type Item = {
  img: string;
  text: string;
  price: string;
  index: string;
  inx: number
};

type BasketPageProps = {
  isBasketOpen: boolean;
  Basket: () => void;
  SelectedItemArray: Item[];
  forDelete: (inx: number, price: string) => void;
  sum: number
};

function BasketPage({ isBasketOpen, Basket, SelectedItemArray, forDelete, sum }: BasketPageProps) {

  const trueSum = (sum / 100).toFixed(2)

  return (
    <>
      <div
        className={`${isBasketOpen ? css.Basket__Back : css.not__Back}`}
        onClick={Basket}
      ></div>

      <div
        className={`${css.Basket__Content} ${
          isBasketOpen ? css.Basket__Content_open : ""
        }`}
      >
        <div className={css.Basket__Content__CloseBtn}><MdClose onClick={Basket} /> </div>
        <div className={css.Basket__List}>
          {SelectedItemArray.length > 0 ? (SelectedItemArray.map((i) => (
            <div key={i.inx} className={css.Basket__Item}>
              <img src={i.img} alt={i.text} className={css.Basket__ItemImg} />
              <div className={css.Basket__Item_Content}>
                <div>{i.text}</div>
                <div>{i.price}</div>
                <div className={css.Basket__Item_Btn} onClick={() => forDelete(i.inx, i.price)}><RiDeleteBin6Line /></div>
              </div>
            </div>
          ))) : <div className={css.No_Items}>Корзина пуста на данный момент</div>}
        </div>
        <div className={css.Basket__Content__Payment}>
          <div className={css.Basket__Payment__Sum}>
            <h2>Сумма</h2>
            <p>${parseFloat(trueSum)}</p>
          </div>
          <button className={css.Pay_Btn}>Pay All</button>
        </div>
      </div>
    </>
  );
}

export default BasketPage;
