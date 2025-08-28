import { lazy } from "react"
const Courses = lazy(() => import("../components/Courses/Courses"))
const Main = lazy(() => import("../components/Main/Main"))
const Products = lazy(() => import("../components/Products/Products"))
import "../index.css"
import Footer from "../components/Footer/Footer"

type AddItemProps = {
  addItem: (item: { img: string; text: string; price: string; index: string, inx: number }) => void;
};

function FirstPage({ addItem }: AddItemProps) {
  return (
    <div className="first">
      <div className="backPic" />
        <Main />
        <Courses />
        <Products addItem={addItem}/>
        <Footer />
    </div>
  )
}

export default FirstPage