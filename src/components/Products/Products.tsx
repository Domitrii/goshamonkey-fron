import React, { useState } from 'react'
import css from './Products.module.css'
import AllSection from '../AllSection/AllSection'


const products = [
    {img: "../../../goshaPremium.png",title: "Премиальный курс от Гоши Бомжезьяна",price: "$350.00",index: "courses", inx: 0},
    {img: "../../../gosha.png",title: "Персональный курс от Гоши Бомжезьяна",price: "$55.00",index: "courses", inx: 1},
    {img: "../../../firstHi.png",title: "Персональный привет от Гоши Бомжезьяна",price: "$7.99",index: "hi-price", inx: 2},
    {img: "../../../secondHiLeha.png",title: "Персональный привет от Лёхи",price: "$7.99",index: "hi-price", inx: 3},
    {img: "../../../zefirkaHI.png",title: "Персональный привет от Зефирки",price: "$7.99",index: "hi-price", inx: 4},
    {img: "../../../G_L_Hi.png",title: "Персональный привет от Гоши Бомжезьяна и Лёхи",price: "$7.99",index: "hi-price", inx: 5},
    {img: "../../../All_Hi.png",title: "Привет от Гоши Бомжезьяна и друзей",price: "$7.99",index: "hi-price", inx: 6},
    {img: "../../../question-mark.png",title: "Закажи персональный привет от кого захочешь",price: "$7.99",index: "hi-price", inx: 7},
]

type AddItemProps = {
    addItem: (item: { img: string; text: string; price: string; index: string, inx: number}) => void;
};

function Products({addItem}: AddItemProps) {
    const [isAll, setIsAll] = useState(true)
    const [isCourses, setIsCourses] = useState(false)
    const [isHi, setIsHi] = useState(false)

    let filteredProducts = products;
    if(isHi) {
        filteredProducts = products.filter(j => j.index === "hi-price")
    } else if(isCourses) {
        filteredProducts = products.filter(j => j.index === "courses")
    }

    const handleBtn = (
        first: React.Dispatch<React.SetStateAction<boolean>>,
        second: React.Dispatch<React.SetStateAction<boolean>>,
        third: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        first(true)
        second(false)
        third(false)
    }    

  return (
    <div className={css.ProductsBlock}>
        <div className={css.NavigateBlock}>
            <h2>Сортировка</h2>
            <span className={css.line}></span>
            <ul className={css.navigatePanel}>
                <li onClick={() => handleBtn(setIsAll, setIsCourses, setIsHi)} className={`${css.AllBtn} ${isAll ? css.BtnChoose : ""}`}>
                    <div>
                        - Всё
                    </div>
                </li>
                <li onClick={() => handleBtn(setIsCourses, setIsAll, setIsHi)} className={`${css.AllBtn} ${isCourses ? css.BtnChoose : ""}`}>
                    - Курсы
                </li>
                <li onClick={() => handleBtn(setIsHi, setIsAll, setIsCourses)} className={`${css.AllBtn} ${isHi ? css.BtnChoose : ""}`}>
                    - Персональные приветы, поздравления
                </li>
            </ul>
        </div>
        <div className={css.AllBlock}>
            <h1>Продукты</h1>
            <ul className={css.list}>
                {filteredProducts.map((i, idx) => (
                    <AllSection
                        key={idx}
                        img={i.img}
                        text={i.title}
                        price={i.price}
                        index={i.index}
                        addItem={() => addItem({ img: i.img, text: i.title, price: i.price, index: i.index, inx: Date.now() + Math.random() })}
                    />
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Products