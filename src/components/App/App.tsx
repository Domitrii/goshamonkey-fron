import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, useEffect, useState } from "react"
const Menu = lazy(() => import("../Menu/Menu"))
const BasketPage = lazy(() => import("../BascetPage/BasketPage"))
const Header = lazy(() => import("../Header/Header"))
const HiPricePage = lazy(() => import('../../pages/HiPricePage'))
const FirstPage = lazy(() => import('../../pages/FirstPage'))
const CoursesPage = lazy(() => import('../../pages/CoursesPage'))

type Item = {
  img: string,
  text: string,
  price: string,
  index: string,
  inx: number
}

function App() {
  const [isBasketOpen, setBasketOpen] = useState(false);
  const [isSelectedItemArray, setSelectedItemArray] = useState<Item[]>([])
  const [isBasketSum, setBasketSum] = useState(0)
  const [isMenu, setMenu] = useState(false)

const toggleBasket = () => setBasketOpen(prev => !prev);

const addItemToBasket = (item: Item) => {
  setSelectedItemArray(currentItems => [...currentItems, item])
  const priceInCents = Math.round(Number(item.price.slice(1)) * 100)
  setBasketSum(prev => prev + priceInCents)
} 

const deleteByIndex = (inx: number, price: string) => {
  setSelectedItemArray(prev => prev.filter((n) => n.inx !== inx))
  const priceInCents = Math.round(Number(price.slice(1)) * 100)
  setBasketSum(prev => prev - priceInCents)
}

const handleOpenMenu = () => setMenu(true)
const handleCloseMenu = () => setMenu(false)

  // useEffect(() => {
  //   console.log(isBasketSum / 100)
  // }, [isBasketSum])

  useEffect(() => {
    if (isBasketOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isBasketOpen])

  // useEffect(() => {
  //   if(isMenu) {
  //     document.body.style.overflow = "hidden"
  //   } else {
  //     document.body.style.overflow = "auto"
  //   }
  // }, [isMenu])

  return (
    <div>
      <BrowserRouter>
        <Header Basket={toggleBasket} MenuOpen={handleOpenMenu} />
        <Routes>
          <Route path="/" element={<FirstPage addItem={addItemToBasket} />} />
          <Route path="/hi-price" element={<HiPricePage />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      <BasketPage isBasketOpen={isBasketOpen} Basket={toggleBasket} SelectedItemArray={isSelectedItemArray} forDelete={deleteByIndex} sum={isBasketSum} />
      <Menu menu={isMenu} closeMenu={handleCloseMenu} />
      </BrowserRouter>
    </div>
  );
}

export default App
