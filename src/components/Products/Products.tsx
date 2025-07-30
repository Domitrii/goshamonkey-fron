import React, { useEffect, useState } from 'react'
import css from './Products.module.css'
import AllSection from '../AllSection/AllSection'


const products = [
    {img: "../../../goshaPremium.png",text: "Премиальный курс от Гоши-Бомжезьяна",price: " $350.00",index: "courses"},
    {img: "../../../gosha.png",text: "Персональный курс от Гоши-Бомжезьяна",price: "$55.00",index: "courses"},
    {img: "../../../course1.png",text: "Персональный привет от Гоши-Бомжезьяна",price: "100₽",index: "hi-price"},
    {img: "../../../course1.png",text: "Привет от Гоши и Льохи",price: "100₽",index: "hi-price"},
]

function Products() {
    const [isAll, setIsAll] = useState(true)
    const [isCourses, setIsCourses] = useState(false)
    const [isHi, setIsHi] = useState(false)

    let filteredProducts = products;
    if(isHi) {
        filteredProducts = products.filter(j => j.index === "hi-price")
    } else if(isCourses) {
        filteredProducts = products.filter(j => j.index === "courses")
    }

    useEffect(() => {
        console.log(`IsAll = ${isAll}`,`IsCourses = ${isCourses}`, `Ishi = ${isHi}`)
    }, [isAll, isCourses, isHi])

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
            <h2>Navigate</h2>
            <span className={css.line}></span>
            <ul className={css.navigatePanel}>
                <li onClick={() => handleBtn(setIsAll, setIsCourses, setIsHi)} className={`${css.AllBtn} ${isAll ? css.BtnChoose : ""}`}>
                    All
                </li>
                <li onClick={() => handleBtn(setIsCourses, setIsAll, setIsHi)} className={`${css.AllBtn} ${isCourses ? css.BtnChoose : ""}`}>
                    Courses
                </li>
                <li onClick={() => handleBtn(setIsHi, setIsAll, setIsCourses)} className={`${css.AllBtn} ${isHi ? css.BtnChoose : ""}`}>
                    Hi
                </li>
            </ul>
        </div>
        <div className={css.AllBlock}>
            <h1>All Products</h1>
            <ul className={css.list}>
                {filteredProducts.map((i, idx) => (
                    <AllSection
                        key={idx}
                        img={i.img}
                        text={i.text}
                        price={i.price}
                        index={i.index}
                    />
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Products