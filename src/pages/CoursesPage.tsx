import { lazy } from "react"
const CoursesContent = lazy(() => import("../components/CoursesContent/CoursesContent"))
const Footer = lazy(() => import("../components/Footer/Footer"))
const Header = lazy(() => import("../components/Header/Header"))


function CoursesPage() {
  return (
    <div>
      <Header />
      <CoursesContent />
      <Footer />
    </div>
  )
}

export default CoursesPage
