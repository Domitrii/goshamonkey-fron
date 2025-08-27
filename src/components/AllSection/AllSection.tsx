import css from "./AllSection.module.css"

interface AllSectionProps {
    img:string,
    text: string,
    price: string,
    index:string,
    // inx: number
    addItem: () => void;
}

function AllSection ({ img, text, price, index, addItem }: AllSectionProps) {
    // const handleConsole = () => {
    //     console.log(`Clicked on ${text} with index ${index} and img ${img} and price ${price}`);
    // }

  return (
    <li className={css.content} >
        <div className={css.picCont}>
            <img src={img} alt="фото курса" className={css.pic} id={index} />
        </div>
        <div className={css.textBlock}> 
            <h3>
                {text}
            </h3>
            <p>
                {price}
            </p>
                {index == "courses" ? 
                (<button onClick={addItem} className={css.btn}>
                        Посмотреть курсы
                </button>) : 
                (<button className={css.btn} onClick={addItem}>
                        Получить привет
                </button>)}
        </div>
    </li>
  )
}

export default AllSection