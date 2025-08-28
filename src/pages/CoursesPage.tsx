import { lazy } from "react"
const CoursesContent = lazy(() => import("../components/CoursesContent/CoursesContent"))
const Footer = lazy(() => import("../components/Footer/Footer"))

type courseProp = {
  addItem: (item: {img: string, text: string, price: string, index: string, inx: number}) => void
}

function CoursesPage({addItem}: courseProp) {
  return (
    <div>
      <CoursesContent addItem={addItem} />
      <Footer />
    </div>
  )
}

export default CoursesPage
